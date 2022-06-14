"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = __importStar(require("child_process"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
// Yes, the entirety of our API generation is a regex hack. Have fun maintaining this.
var BUILD_DIR = './build';
var LIVESCRIPT_API = path.join(BUILD_DIR, 'livescript_api');
var GDTS_SOURCE = 'tswow/tswow-scripts/wotlk/global.d.ts';
var INTERFACES = path.join(LIVESCRIPT_API, 'interfaces');
var CLASSES = path.join(LIVESCRIPT_API, 'classes');
var ENUMS = path.join(LIVESCRIPT_API, 'enums');
var EVENTS = path.join(LIVESCRIPT_API, 'events');
var FUNCTIONS = path.join(LIVESCRIPT_API, 'functions.md');
var MACROS = path.join(LIVESCRIPT_API, 'macros.md');
var GLOBAL_D_TS = path.join(BUILD_DIR, 'global.d.ts');
var MAX_DESCRIPTION_LENGTH = 120;
var enum_descriptions = {};
var class_descriptions = {};
var event_descriptions = {};
var searchbar_results = {};
function findMethods(type, prefix, file, filename, isMethod) {
    var filenameShort = path.basename(filename).replace('.md', '');
    Array.from(file.matchAll(/\n### (.+)/g)).forEach(function (x) {
        var name = x[1].split('\\').join('');
        var id = "" + (isMethod ? filenameShort + "::" : '') + name;
        var cat = searchbar_results["API: " + type] || (searchbar_results["API: " + type] = {});
        cat[id] = { description: '', url: "api/" + (prefix.length > 0 ? prefix + "/" : '') + filenameShort + "#" + name };
    });
}
function filenameToName(filename) {
    return path.basename(filename).replace('.md', '');
}
// Assumes the >#< header is intact
function addDescription(headerToken, collection, filename, str) {
    filename = path.basename(filename);
    if (filename.endsWith('.md')) {
        filename = filename.substring(0, filename.length - 3);
    }
    var header = str.indexOf(headerToken);
    var start = str.indexOf('\n', header);
    var end = str.indexOf('\n## ', start);
    var slice = str.slice(start, end);
    slice = slice.trimStart();
    var newlineIndex = slice.indexOf('\n');
    if (newlineIndex >= 0) {
        slice = slice.slice(0, newlineIndex);
    }
    if (slice.length > MAX_DESCRIPTION_LENGTH) {
        slice = slice.slice(0, MAX_DESCRIPTION_LENGTH - 3) + '...';
    }
    collection[filename] = slice;
}
// Links to "module" should not be used
function removeModuleLinks(str) {
    while (true) {
        var m = str.match(/\[([a-zA-Z\-_0-9\.`]+?)\]\((?:\.\.\/|)modules(?:\.md|).+?\)/);
        if (m) {
            str = str.replace(m[0], m[1]);
        }
        else {
            break;
        }
    }
    return str;
}
{ // Setup repo
    // Clone
    if (!fs.existsSync('./tswow')) {
        child_process.execSync(
        // TODO: REMOVE DEV BRANCH!!!
        'git clone https://github.com/tswow/tswow.git --depth=1 --branch=dev --recurse-submodules', { stdio: 'inherit' });
    }
    // Generate global.d.ts with enums
    if (!fs.existsSync(GDTS_SOURCE)) {
        var cur = process.cwd();
        process.chdir('./tswow');
        child_process.execSync('npm i', { stdio: 'inherit' });
        child_process.execSync('npm run build gdts-only', { stdio: 'inherit' });
        process.chdir(cur);
    }
}
{ // Generate initial directory
    if (!fs.existsSync(BUILD_DIR)) {
        fs.mkdirSync(BUILD_DIR);
    }
}
{ // Generate LiveScript API
    {
        console.log('Generating LiveScript API');
        if (process.argv.includes('rebuild') || !fs.existsSync(LIVESCRIPT_API)) {
            fs.copyFileSync(GDTS_SOURCE, GLOBAL_D_TS);
            // hack number types
            var gdts_str = fs.readFileSync(GLOBAL_D_TS, 'utf-8');
            gdts_str = gdts_str.split(/ *= *number/).join(' = {}');
            fs.writeFileSync(GLOBAL_D_TS, gdts_str);
            fs.copyFileSync('tsconfig.json', path.join(BUILD_DIR, 'tsconfig.json'));
            process.chdir(BUILD_DIR);
            child_process.execSync("npx typedoc --plugin typedoc-plugin-markdown --hideInPageTOC true --out livescript_api ./global.d.ts", { stdio: 'inherit' });
            fs.rmSync('./tsconfig.json');
            fs.rmSync('./global.d.ts');
            process.chdir('..');
        }
        // Move interfaces to classes
        fs.readdirSync(INTERFACES).forEach(function (x) {
            var cur = path.join(INTERFACES, x);
            var asClass = path.join(CLASSES, x);
            fs.copyFileSync(cur, asClass);
        });
        // Fix events
        var TS_EVENTS = path.join(CLASSES, 'TSEvents.md');
        if (fs.existsSync(TS_EVENTS)) {
            fs.rmSync(TS_EVENTS);
        }
        if (!fs.existsSync(EVENTS)) {
            fs.mkdirSync(EVENTS);
        }
        fs.readdirSync(CLASSES)
            .filter(function (x) { return x.startsWith('hidden.'); })
            .forEach(function (x) {
            var full = path.join(CLASSES, x);
            var out = path.join(EVENTS, x.substring('hidden.'.length));
            fs.renameSync(full, out);
        });
        fs.readdirSync(EVENTS).forEach(function (x) {
            x = path.join(EVENTS, x);
            var str = fs.readFileSync(x, 'utf-8');
            str = str.substring(str.indexOf('\n'));
            addDescription('_hidden', event_descriptions, x, str);
            // Clean up
            str = str.replace(/# Class:.+/, '');
            str = str.replace(/\[_hidden\].+?\n\n/, '');
            str = str.replace(/## Constructors(.|\n|\r)+?\n## /, '## ');
            str = str.replace('<T\\>', '');
            str = str.replace(/#### Returns(.|\n|\r)+?___/g, '___');
            str = str.replace(/#### Returns(.|\n|\r)+/, '');
            str = str.replace(/## Type parameters(.|\n||\r)+?##/, '##');
            str = str.split('../interfaces/').join('../classes/');
            str = str.split('.md)').join(')');
            str = str.split('.md#').join('#');
            // Parameter unpack
            str = str.replace(/▸.+/g, '');
            var rebuildIndex = str.indexOf('## Methods');
            var str_out = str.substring(0, rebuildIndex) + '\n';
            var cur = 0;
            while (true) {
                cur = str.indexOf('\n### ', cur);
                if (cur < 0) {
                    break;
                }
                var end = str.indexOf('\n### ', cur + 1);
                if (end < 0) {
                    end = str.length;
                }
                var segName = str.slice(cur + '\n### '.length, str.indexOf('\n', cur + 1));
                var segment = str.substring(cur, end);
                {
                    var param_descriptions = {};
                    var _a = segment.split('#### Parameters'), comment = _a[0], params = _a[1];
                    { // Find all event param comments
                        var param_matches = Array.from(comment
                            .matchAll(/\*\*`event_param`\*\* *(.+?) +(.+|)/g));
                        for (var _i = 0, param_matches_1 = param_matches; _i < param_matches_1.length; _i++) {
                            var result = param_matches_1[_i];
                            comment = comment.replace(result[0], '');
                            var description = result[2];
                            description = description.trimStart();
                            while (description.startsWith('-')) {
                                description = description.substring(1);
                                description = description.trimStart();
                            }
                            param_descriptions[result[1]] = description;
                        }
                        // Strays
                        while (true) {
                            if (comment.indexOf('event_param') < 0) {
                                break;
                            }
                            comment = comment.replace(/.+?event_param.+/, '');
                        }
                        str_out += comment;
                    }
                    { // Rebuild parameters
                        var CB_PREFIX = '` | (';
                        var CB_SUFFIX = ") =>";
                        var cbStart = params.indexOf(CB_PREFIX);
                        if (cbStart < 0)
                            continue;
                        cbStart += CB_PREFIX.length;
                        var cbEnd = params.indexOf(CB_SUFFIX, cbStart);
                        var args = params
                            .substring(cbStart, cbEnd)
                            .split(',')
                            .filter(function (x) { return x.length > 0; })
                            .map(function (x) { return x.split(': '); })
                            .map(function (_a) {
                            var name = _a[0], type = _a[1];
                            return [name.split('`').join('').split(' ').join(''), type];
                        });
                        var summary = segName + "((" + args.map(function (x) { return "" + x[0]; }).join(',') + ") => void";
                        var cat = searchbar_results['Event'] || (searchbar_results['Event'] = {});
                        cat[filenameToName(x) + "." + segName] = {
                            description: summary,
                            url: "api/livescripts/events/" + filenameToName(x) + "#" + segName
                        };
                        str_out += '\n'
                            + '{: .code-example }\n'
                            + '`'
                            + summary
                            + '`\n';
                        str_out += '#### Event Parameters\n';
                        if (args.length == 0) {
                            str_out += 'This event has no parameters.\n';
                        }
                        else {
                            var has_descriptions = Object.entries(param_descriptions).length > 0;
                            if (has_descriptions) {
                                str_out += '\n';
                                str_out += '{: .table .table-bordered .event-table .api-table}\n';
                                str_out += '| Name | Type | Description |\n';
                                str_out += '|-\n';
                                for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
                                    var _c = args_1[_b], name_1 = _c[0], type = _c[1];
                                    str_out += "| `" + name_1 + "` | " + type + " | " + (param_descriptions[name_1] || '') + " |\n";
                                }
                            }
                            else {
                                str_out += '\n';
                                str_out += '{: .table .table-bordered .event-table .api-table}\n';
                                str_out += '| Name | Type |\n';
                                str_out += '|-\n';
                                for (var _d = 0, args_2 = args; _d < args_2.length; _d++) {
                                    var _e = args_2[_d], name_2 = _e[0], type = _e[1];
                                    str_out += "| `" + name_2 + "` | " + type + " |\n";
                                }
                            }
                        }
                    }
                }
                cur = end;
            }
            // Fix weird bug with missing "../classes" prefix
            while (true) {
                var m = str_out.match(/\(([a-zA-Z0-9_]+?)\) \|/);
                if (!m) {
                    break;
                }
                str_out = str_out.replace(m[0], "(../classes/" + m[1] + ") |");
            }
            str_out = removeModuleLinks(str_out);
            str_out = str_out.split('\n### ').join('\n{: .api-section }\n### ');
            fs.writeFileSync(x, str_out);
        });
        { // Fix enums
            // todo: currently places members in alphabetical order instead of define order.
            fs.readdirSync(ENUMS).forEach(function (x) {
                x = path.join(ENUMS, x);
                var str = fs.readFileSync(x, 'utf-8');
                addDescription('# ', enum_descriptions, x, str);
                str = str.substring(str.indexOf('\n'));
                str = str.replace(/# Enumeration.+/, '');
                var _a = str.split('## Enumeration Members'), header = _a[0], values = _a[1];
                var str_out = header + '\n### Enumeration Members\n';
                Array.from(values.matchAll(/\n### (.+)/g)).map(function (x) { return x[1]; }).forEach(function (x) {
                    str_out += "- " + x + "\n";
                });
                fs.writeFileSync(x, str_out);
            });
        }
        { // Fix classes
            fs.readdirSync(CLASSES).forEach(function (x) {
                x = path.join(CLASSES, x);
                var str = fs.readFileSync(x, 'utf-8');
                addDescription('# ', class_descriptions, x, str);
                // Remove interface/class distinctions
                str = str
                    .split('../classes/').join('')
                    .split('../interfaces/').join('')
                    .split('# Interface: ').join('# Class: ');
                str = str.replace(/## Constructors(.|\n|\r)+?\n## /, '## ');
                str = str.replace(/#### Defined in(.|\n|\r)+?___/g, '___');
                str = str.replace(/#### Defined in(.|\n|\r)+/, '');
                str = removeModuleLinks(str);
                var inherits = [];
                while (true) {
                    var HEADER = '#### Inherited from';
                    var inh = str.indexOf(HEADER);
                    if (inh < 0) {
                        break;
                    }
                    var nameStart = str.indexOf('.[', inh);
                    var name_3 = str.slice(nameStart + 1, str.indexOf(')', nameStart) + 1)
                        .split('\r').join('')
                        .split('\n').join('')
                        .split('.md#').join('#')
                        .replace('[', '[`')
                        .replace(']', '`]')
                        .replace('(', '(./')
                        .trimStart().trimEnd();
                    inherits.push(name_3);
                    var beg = str.lastIndexOf('\n### ', inh);
                    var end = str.indexOf('___', inh);
                    if (end < 0) {
                        end = str.length;
                    }
                    else {
                        end = end + 4;
                    }
                    str = str.slice(0, beg) + str.slice(end);
                }
                var clsIndex = str.indexOf('# Class:');
                str = str.slice(str.indexOf('\n', clsIndex));
                if (inherits.length > 0) {
                    str = str
                        + '\n## Inherited Members\n'
                        + inherits.join(' ') + '\n';
                }
                str = str.split('\n\n|').join('\n\n{: .table .api-table .table-bordered}\n|');
                str = str.split(/\| :-.+/).join('|-');
                str = str.split(/#### Returns\n/).join('**Returns:** ');
                str = str.split('.md)').join(')');
                var cur = str.length;
                while (true) {
                    cur = str.lastIndexOf('▸', cur);
                    if (cur < 0) {
                        break;
                    }
                    var end = str.indexOf('\n', cur);
                    var slice = str.slice(cur, end);
                    slice = slice
                        .replace('▸', '')
                        .split('`').join('')
                        .split('**').join('')
                        .split('\\>').join('>');
                    while (true) {
                        var m = slice.match(/\[(.+?)\]\(.+?\)/);
                        if (m) {
                            slice = slice.replace(m[0], m[1]);
                        }
                        else {
                            break;
                        }
                    }
                    str = str.substring(0, cur)
                        + '{: .code-example }\n'
                        + '`'
                        + slice.trimStart().trimEnd()
                        + '`'
                        + str.substring(end);
                    cur -= 1;
                }
                str = str.split('\n### ').join('\n{: .api-section }\n### ');
                findMethods('Method', 'livescripts/classes', str, x, true);
                // Save
                fs.writeFileSync(x, str);
            });
        }
        { // Fix global functions
            var functions_out_1 = "---\n" +
                "title: Functions\n" +
                "excerpt: Global functions\n" +
                "icon:\n" +
                "  type: fa\n" +
                "  name: fa-paper-plane\n" +
                "color: green\n" +
                "---\n";
            var macros_out_1 = "---\n" +
                "title: Macros\n" +
                "excerpt: Compile-time macros\n" +
                "icon:\n" +
                "  type: fa\n" +
                "  name: fa-paper-plane\n" +
                "color: green\n" +
                "---\n\n";
            macros_out_1 += 'Macros are special livescript functions ';
            macros_out_1 += 'that execute during compile time. This means ';
            macros_out_1 += 'all their arguments must be literals or const.';
            var modules = fs.readFileSync(path.join(LIVESCRIPT_API, 'modules.md'), 'utf-8');
            modules = removeModuleLinks(modules);
            modules = modules.split('\n## Functions')[1];
            modules.split('___').forEach(function (str) {
                str = str.split('\n\n|').join('\n\n{: .table .api-table .table-bordered}\n|');
                str = str.split(/\| :-.+/).join('|-');
                str = str.split(/#### Returns\n/).join('**Returns:** ');
                str = str.split('.md)').join(')');
                var titleMatch = str.match(/\n### (.+)/);
                if (!titleMatch) {
                    throw new Error("No title in function definition");
                }
                var isMacro = str.includes('**`macro`**');
                str = str.split(/\*\*`macro`\*\*/).join('');
                str = str.replace(/#### Defined in(.|\n|\r)+/, '');
                { // nice copypaste
                    var cur = str.indexOf('▸');
                    var end = str.indexOf('\n', cur);
                    var slice = str.slice(cur, end);
                    slice = slice
                        .replace('▸', '')
                        .split('`').join('')
                        .split('**').join('')
                        .split('\\>').join('>');
                    while (true) {
                        var m = slice.match(/\[(.+?)\]\(.+?\)/);
                        if (m) {
                            slice = slice.replace(m[0], m[1]);
                        }
                        else {
                            break;
                        }
                    }
                    str = str.substring(0, cur)
                        + '{: .code-example }\n'
                        + '`'
                        + slice.trimStart().trimEnd()
                        + '`'
                        + str.substring(end);
                }
                if (isMacro) {
                    macros_out_1 += str + '\n___';
                    findMethods('Macro', '', str, 'macros', false);
                }
                else {
                    functions_out_1 += str + '\n___';
                    findMethods('Function', '', str, 'functions', false);
                }
            });
            fs.writeFileSync(path.join(LIVESCRIPT_API, 'functions.md'), functions_out_1);
            fs.writeFileSync(path.join(LIVESCRIPT_API, 'macros.md'), macros_out_1);
        }
    }
}
function write_api_doc(from, to) {
    var to_dirname = path.dirname(to);
    if (!fs.existsSync(to_dirname)) {
        fs.mkdirSync(to_dirname, { recursive: true });
    }
    var str = fs.readFileSync(from, 'utf-8');
    str = '---\n'
        + 'title: ' + path.basename(from).replace('.md', '') + '\n'
        + '---\n'
        + str;
    fs.writeFileSync(to, str);
}
function makeAPIIndex(section, title, excerpt, descriptions) {
    fs.writeFileSync("../_doc/api/livescripts/" + section + "/index.md", "---\ntitle: " + title + "\nexcerpt: " + excerpt + "\nicon:\n  type: fa\n  name: fa-paper-plane\ncolor: green\n---\n\n{: .table .table-striped}\n| Name | Description |\n|-\n" + fs.readdirSync(path.join(LIVESCRIPT_API, section))
        .map(function (x) { return x.substring(0, x.length - 3); })
        .map(function (x) { return "| [" + x + "](./" + x + ") | " + (descriptions[x] || '') + " |"; }).join('\n') + "\n\n");
}
{ // Install API
    fs.readdirSync(EVENTS).forEach(function (x) {
        write_api_doc(path.join(EVENTS, x), path.join('../_doc/api/livescripts/events', x));
    });
    fs.readdirSync(CLASSES).forEach(function (x) {
        write_api_doc(path.join(CLASSES, x), path.join('../_doc/api/livescripts/classes', x));
    });
    fs.readdirSync(ENUMS).forEach(function (x) {
        write_api_doc(path.join(ENUMS, x), path.join('../_doc/api/livescripts/enums', x));
    });
    fs.copyFileSync(FUNCTIONS, '../_doc/api/livescripts/functions.md');
    fs.copyFileSync(MACROS, '../_doc/api/livescripts/macros.md');
    makeAPIIndex('events', 'Events', 'Events', event_descriptions);
    makeAPIIndex('classes', 'Classes', 'Classes', class_descriptions);
    makeAPIIndex('enums', 'Enums', 'Enums', enum_descriptions);
}
{
    // Generate searchbar results
    [{ type: 'Event', values: event_descriptions }, { type: 'Class', values: class_descriptions }, { type: 'Enum', values: enum_descriptions }].forEach(function (_a) {
        var type = _a.type, values = _a.values;
        var t = type;
        type = "API : " + type;
        for (var _i = 0, _b = Object.entries(values); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            var category = (searchbar_results[type] || (searchbar_results[type] = {}));
            category[key] = { description: value, url: "api/livescripts/" + t.toLowerCase() + "/" + key };
        }
    });
    fs.writeFileSync('./build/searchbar.json', JSON.stringify(searchbar_results, null, 4));
    fs.writeFileSync('../_includes/searchbar_results.html', "<script> search_results = " + JSON.stringify(searchbar_results) + " </script>");
}
