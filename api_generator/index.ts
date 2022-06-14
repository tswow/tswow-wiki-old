import * as child_process from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Yes, the entirety of our API generation is a regex hack. Have fun maintaining this.

const BUILD_DIR = './build'
const LIVESCRIPT_API = path.join(BUILD_DIR,'livescript_api')
const GDTS_SOURCE = 'tswow/tswow-scripts/wotlk/global.d.ts'

const INTERFACES = path.join(LIVESCRIPT_API,'interfaces')
const CLASSES = path.join(LIVESCRIPT_API,'classes')
const ENUMS = path.join(LIVESCRIPT_API,'enums')
const EVENTS = path.join(LIVESCRIPT_API,'events')

const FUNCTIONS = path.join(LIVESCRIPT_API,'functions.md')
const MACROS = path.join(LIVESCRIPT_API,'macros.md')
const GLOBAL_D_TS = path.join(BUILD_DIR,'global.d.ts')    

const MAX_DESCRIPTION_LENGTH = 120

const enum_descriptions: {[key: string]: string} = {}
const class_descriptions: {[key: string]: string} = {}
const event_descriptions: {[key: string]: string} = {}
const searchbar_results: {[key: string]: {[key: string]: {description: string, url: string}}} = {};

function findMethods(type: string, prefix: string, file: string, filename: string, isMethod: boolean) {
    let filenameShort = path.basename(filename).replace('.md','')
    Array.from(file.matchAll(/\n### (.+)/g)).forEach(x=>{
        let name = x[1].split('\\').join('')
        let id = `${isMethod?`${filenameShort}::`:''}${name}`
        let cat = searchbar_results[`API: ${type}`] || (searchbar_results[`API: ${type}`] = {})
        cat[id] = {description:'', url: `api/${prefix.length > 0 ? `${prefix}/`:''}${filenameShort}#${name}`}
    })
}

function filenameToName(filename: string) {
    return path.basename(filename).replace('.md','')
}

// Assumes the >#< header is intact
function addDescription(headerToken: string, collection: {[key: string]: string}, filename: string, str: string) {
    filename = path.basename(filename);
    if(filename.endsWith('.md')) {
        filename = filename.substring(0,filename.length-3);
    }
    let header = str.indexOf(headerToken)
    let start = str.indexOf('\n',header)
    let end = str.indexOf('\n## ',start)
    let slice = str.slice(start,end);
    slice = slice.trimStart()
    let newlineIndex = slice.indexOf('\n')
    if(newlineIndex >= 0) {
        slice = slice.slice(0,newlineIndex)
    }
    if(slice.length > MAX_DESCRIPTION_LENGTH) {
        slice = slice.slice(0,MAX_DESCRIPTION_LENGTH-3) + '...'
    }
    collection[filename] = slice;
}

// Links to "module" should not be used
function removeModuleLinks(str: string) {
    while(true) {
        let m = str.match(/\[([a-zA-Z\-_0-9\.`]+?)\]\((?:\.\.\/|)modules(?:\.md|).+?\)/)
        if(m) {
            str = str.replace(m[0],m[1])
        } else {
            break;
        }
    }
    return str;
}

{ // Setup repo
    // Clone
    if(!fs.existsSync('./tswow')) {
        child_process.execSync(
            // TODO: REMOVE DEV BRANCH!!!
            'git clone https://github.com/tswow/tswow.git --depth=1 --branch=dev --recurse-submodules',
            {stdio:'inherit'}
        )
    }

    // Generate global.d.ts with enums
    if(!fs.existsSync(GDTS_SOURCE)) {
        let cur = process.cwd();
        process.chdir('./tswow')
        child_process.execSync('npm i',{stdio:'inherit'})
        child_process.execSync('npm run build gdts-only',{stdio:'inherit'})
        process.chdir(cur)
    }
}

{ // Generate initial directory
    if(!fs.existsSync(BUILD_DIR)) {
        fs.mkdirSync(BUILD_DIR)
    }
}

{ // Generate LiveScript API
    {
        console.log('Generating LiveScript API')
        {
            fs.copyFileSync(GDTS_SOURCE,GLOBAL_D_TS);

            // hack number types
            let gdts_str = fs.readFileSync(GLOBAL_D_TS,'utf-8')
            gdts_str = gdts_str.split(/ *= *number/).join(' = {}')
            fs.writeFileSync(GLOBAL_D_TS,gdts_str);

            fs.copyFileSync('tsconfig.json',path.join(BUILD_DIR,'tsconfig.json'))
            process.chdir(BUILD_DIR)
            child_process.execSync(`npx typedoc --plugin typedoc-plugin-markdown --hideInPageTOC true --out livescript_api ./global.d.ts`,{stdio:'inherit'})
            fs.rmSync('./tsconfig.json')
            fs.rmSync('./global.d.ts')
            process.chdir('..')
        }

        // Move interfaces to classes
        fs.readdirSync(INTERFACES).forEach(x=>{
            const cur = path.join(INTERFACES,x)
            const asClass = path.join(CLASSES,x)
            fs.copyFileSync(cur,asClass);
        })

        // Fix events
        const TS_EVENTS = path.join(CLASSES,'TSEvents.md')
        if(fs.existsSync(TS_EVENTS)) {
            fs.rmSync(TS_EVENTS)
        }
        if(!fs.existsSync(EVENTS)) {
            fs.mkdirSync(EVENTS)
        }
        fs.readdirSync(CLASSES)
            .filter(x=>x.startsWith('hidden.'))
            .forEach(x=>{
                let full = path.join(CLASSES,x);
                let out = path.join(EVENTS,x.substring('hidden.'.length));
                fs.renameSync(full,out);
            })

        fs.readdirSync(EVENTS).forEach(x=>{
            x = path.join(EVENTS,x);
            let str = fs.readFileSync(x,'utf-8')
            str = str.substring(str.indexOf('\n'))
            addDescription('_hidden',event_descriptions,x,str);

            // Clean up
            str = str.replace(/# Class:.+/,'')
            str = str.replace(/\[_hidden\].+?\n\n/,'')
            str = str.replace(/## Constructors(.|\n|\r)+?\n## /,'## ')
            str = str.replace('<T\\>','')
            str = str.replace(/#### Returns(.|\n|\r)+?___/g,'___')
            str = str.replace(/#### Returns(.|\n|\r)+/,'')
            str = str.replace(/## Type parameters(.|\n||\r)+?##/,'##')
            str = str.split('../interfaces/').join('../classes/')
            str = str.split('.md)').join(')')
            str = str.split('.md#').join('#')

            // Parameter unpack
            str = str.replace(/▸.+/g,'')
            let rebuildIndex = str.indexOf('## Methods')
            let str_out = str.substring(0,rebuildIndex) + '\n';

            let cur = 0;
            while(true) {
                cur = str.indexOf('\n### ',cur);
                if(cur < 0) {
                    break;
                }
                let end = str.indexOf('\n### ',cur+1);
                if(end < 0) {
                    end = str.length;
                }

                let segName = str.slice(cur+'\n### '.length,str.indexOf('\n',cur+1))

                let segment = str.substring(cur,end)
                {
                    let param_descriptions: {[key: string]: string} = {}

                    let [comment,params] = segment.split('#### Parameters')

                    { // Find all event param comments
                        const param_matches = Array.from(comment
                            .matchAll(/\*\*`event_param`\*\* *(.+?) +(.+|)/g))
                        for(const result of param_matches) {
                            comment = comment.replace(result[0],'')
                            let description = result[2];
                            description = description.trimStart()
                            while(description.startsWith('-')) {
                                description = description.substring(1)
                                description = description.trimStart()
                            }
                            param_descriptions[result[1]] = description
                        }

                        // Strays
                        while(true) {
                            if(comment.indexOf('event_param') < 0) {
                                break;
                            }
                            comment = comment.replace(/.+?event_param.+/,'')
                        }
                        str_out += comment;
                    }

                    { // Rebuild parameters
                        const CB_PREFIX = '` | ('
                        const CB_SUFFIX = `) =>`;
                        let cbStart = params.indexOf(CB_PREFIX);
                        if(cbStart<0) continue;
                        cbStart+=CB_PREFIX.length
                        let cbEnd = params.indexOf(CB_SUFFIX,cbStart)
                        let args = params
                            .substring(cbStart,cbEnd)
                            .split(',')
                            .filter(x=>x.length>0)
                            .map(x=>x.split(': '))
                            .map(([name,type]) => [name.split('`').join('').split(' ').join(''),type])

                        let summary = `${segName}((${args.map(x=>`${x[0]}`).join(',')}) => void`

                        let cat = searchbar_results['Event'] || (searchbar_results['Event'] = {})
                        cat[`${filenameToName(x)}.${segName}`] = {
                            description: summary,
                            url: `api/livescripts/events/${filenameToName(x)}#${segName}`
                        }

                        str_out += '\n'
                                + '{: .code-example }\n'
                                + '`'
                                + summary
                                + '`\n'

                        str_out += '#### Event Parameters\n'
                        if(args.length == 0) {
                            str_out += 'This event has no parameters.\n'
                        } else {
                            let has_descriptions = Object.entries(param_descriptions).length > 0
                            if(has_descriptions) {
                                str_out += '\n'
                                str_out += '{: .table .table-bordered .event-table .api-table}\n'
                                str_out += '| Name | Type | Description |\n'
                                str_out += '|-\n'
                                for(const [name,type] of args) {
                                    str_out += `| \`${name}\` | ${type} | ${param_descriptions[name]||''} |\n`;
                                }
                            } else {
                                str_out += '\n'
                                str_out += '{: .table .table-bordered .event-table .api-table}\n'
                                str_out += '| Name | Type |\n'
                                str_out += '|-\n'
                                for(const [name, type] of args) {
                                    str_out += `| \`${name}\` | ${type} |\n`;
                                }
                            }
                        }
                    }

                }
                cur = end;
            }

            // Fix weird bug with missing "../classes" prefix
            while(true) {
                let m = str_out.match(/\(([a-zA-Z0-9_]+?)\) \|/)
                if(!m) {
                    break;
                }
                str_out = str_out.replace(m[0],`(../classes/${m[1]}) |`)
            }

            str_out = removeModuleLinks(str_out)
            str_out = str_out.split('\n### ').join('\n{: .api-section }\n### ')
            fs.writeFileSync(x,str_out)
        })

        { // Fix enums
            // todo: currently places members in alphabetical order instead of define order.
            fs.readdirSync(ENUMS).forEach(x=>{
                x = path.join(ENUMS,x);
                let str = fs.readFileSync(x,'utf-8')
                addDescription('# ', enum_descriptions,x,str);
                str = str.substring(str.indexOf('\n'))
                str = str.replace(/# Enumeration.+/,'')
                let [header,values] = str.split('## Enumeration Members')
                let str_out = header + '\n### Enumeration Members\n'
                Array.from(values.matchAll(/\n### (.+)/g)).map(x=>x[1]).forEach(x=>{
                    str_out+= `- ${x}\n`;
                })
                fs.writeFileSync(x,str_out);
            })
        }

        { // Fix classes
            fs.readdirSync(CLASSES).forEach(x=>{
                x = path.join(CLASSES,x);
                let str = fs.readFileSync(x,'utf-8')
                addDescription('# ', class_descriptions,x,str);
    
                // Remove interface/class distinctions
                str = str
                    .split('../classes/').join('')
                    .split('../interfaces/').join('')
                    .split('# Interface: ').join('# Class: ')

                str = str.replace(/## Constructors(.|\n|\r)+?\n## /,'## ')
                str = str.replace(/#### Defined in(.|\n|\r)+?___/g,'___')
                str = str.replace(/#### Defined in(.|\n|\r)+/,'')
                str = removeModuleLinks(str);

                const inherits: string[] = []

                while(true) {
                    const HEADER = '#### Inherited from'
                    let inh = str.indexOf(HEADER)
                    if(inh < 0) {
                        break;
                    }

                    let nameStart = str.indexOf('.[',inh)
                    let name = str.slice(nameStart+1,str.indexOf(')',nameStart)+1)
                        .split('\r').join('')
                        .split('\n').join('')
                        .split('.md#').join('#')
                        .replace('[','[`')
                        .replace(']','`]')
                        .replace('(','(./')
                        .trimStart().trimEnd()
                    
                    inherits.push(name)
                    
                    let beg = str.lastIndexOf('\n### ',inh)
                    let end = str.indexOf('___',inh)
                    if(end < 0) {
                        end = str.length;
                    } else {
                        end = end+4;
                    }
                    str = str.slice(0,beg) + str.slice(end)
                }
    
                let clsIndex = str.indexOf('# Class:')
                str = str.slice(str.indexOf('\n',clsIndex));

                if(inherits.length > 0) {
                    str = str
                        + '\n## Inherited Members\n' 
                        + inherits.join(' ') + '\n'
                }

                str = str.split('\n\n|').join('\n\n{: .table .api-table .table-bordered}\n|')
                str = str.split(/\| :-.+/).join('|-')
                str = str.split(/#### Returns\n/).join('**Returns:** ')
                str = str.split('.md)').join(')')

                let cur = str.length
                while(true) {
                    cur = str.lastIndexOf('▸',cur);
                    if(cur < 0) {
                        break;
                    }
                    let end = str.indexOf('\n',cur)
                    let slice = str.slice(cur,end);
                    slice = slice
                        .replace('▸','')
                        .split('`').join('')
                        .split('**').join('')
                        .split('\\>').join('>')

                    while(true) {
                        let m = slice.match(/\[(.+?)\]\(.+?\)/)
                        if(m) {
                            slice = slice.replace(m[0],m[1])
                        } else {
                            break;
                        }
                    }

                    str = str.substring(0,cur) 
                        + '{: .code-example }\n'
                        + '`'
                        + slice.trimStart().trimEnd()
                        + '`'
                        + str.substring(end)
                        ;
                    cur-=1
                }

                str = str.split('\n### ').join('\n{: .api-section }\n### ')
                findMethods('Method','livescripts/classes',str,x,true);

                // Save
                fs.writeFileSync(x,str);
            })
        }

        { // Fix global functions
            let functions_out = 
                "---\n" +
                "title: Functions\n" +
                "excerpt: Global functions\n"+
                "icon:\n" +
                "  type: fa\n" +
                "  name: fa-paper-plane\n" +
                "color: green\n" +
                "---\n"
                ;

            let macros_out = 
                "---\n" +
                "title: Macros\n" +
                "excerpt: Compile-time macros\n"+
                "icon:\n" +
                "  type: fa\n" +
                "  name: fa-paper-plane\n" +
                "color: green\n" +
                "---\n\n"
                ;

            macros_out+= 'Macros are special livescript functions '
            macros_out+= 'that execute during compile time. This means '
            macros_out+= 'all their arguments must be literals or const.'

            let modules = fs.readFileSync(path.join(LIVESCRIPT_API,'modules.md'),'utf-8')
            modules = removeModuleLinks(modules);
            modules = modules.split('\n## Functions')[1]

            modules.split('___').forEach(str=>{
                str = str.split('\n\n|').join('\n\n{: .table .api-table .table-bordered}\n|')
                str = str.split(/\| :-.+/).join('|-')
                str = str.split(/#### Returns\n/).join('**Returns:** ')
                str = str.split('.md)').join(')')

                let titleMatch = str.match(/\n### (.+)/)
                if(!titleMatch) {
                    throw new Error(`No title in function definition`)
                }
                const isMacro = str.includes('**`macro`**');
                str = str.split(/\*\*`macro`\*\*/).join('')
                str = str.replace(/#### Defined in(.|\n|\r)+/,'')

                { // nice copypaste
                    let cur = str.indexOf('▸');
                    let end = str.indexOf('\n',cur)
                    let slice = str.slice(cur,end);
                    slice = slice
                        .replace('▸','')
                        .split('`').join('')
                        .split('**').join('')
                        .split('\\>').join('>')

                    while(true) {
                        let m = slice.match(/\[(.+?)\]\(.+?\)/)
                        if(m) {
                            slice = slice.replace(m[0],m[1])
                        } else {
                            break;
                        }
                    }

                    str = str.substring(0,cur) 
                        + '{: .code-example }\n'
                        + '`'
                        + slice.trimStart().trimEnd()
                        + '`'
                        + str.substring(end)
                        ;
                }

                if(isMacro) {
                    macros_out += str + '\n___'
                    findMethods('Macro','livescripts',str,'livescripts/macros',false);
                } else {
                    functions_out += str + '\n___'
                    findMethods('Function','livescripts',str,'livescripts/functions',false);
                }
            })
            fs.writeFileSync(path.join(LIVESCRIPT_API,'functions.md'),functions_out)
            fs.writeFileSync(path.join(LIVESCRIPT_API,'macros.md'),macros_out)
        }
    }
}

function write_api_doc(from: string, to: string) {
    let to_dirname = path.dirname(to);
    if(!fs.existsSync(to_dirname)) {
        fs.mkdirSync(to_dirname,{recursive:true})
    }

    let str = fs.readFileSync(from, 'utf-8');
    str = '---\n'
        + 'title: ' + path.basename(from).replace('.md','') +'\n'
        + '---\n'
        + str;
    fs.writeFileSync(to,str);
}

function makeAPIIndex(section: string, title: string, excerpt: string, descriptions: {[key: string]: string}) {
    fs.writeFileSync(`../_doc/api/livescripts/${section}/index.md`,
`---
title: ${title}
excerpt: ${excerpt}
icon:
  type: fa
  name: fa-paper-plane
color: green
---

{: .table .table-striped}
| Name | Description |
|-
${fs.readdirSync(path.join(LIVESCRIPT_API,section))
    .map(x=>x.substring(0,x.length-3))
    .map(x=>`| [${x}](./${x}) | ${descriptions[x] || ''} |`).join('\n')}

`)
}

{ // Install API
    fs.readdirSync(EVENTS).forEach(x=>{
        write_api_doc(path.join(EVENTS,x),path.join('../_doc/api/livescripts/events',x))
    })

    fs.readdirSync(CLASSES).forEach(x=>{
        write_api_doc(path.join(CLASSES,x),path.join('../_doc/api/livescripts/classes',x))
    })

    fs.readdirSync(ENUMS).forEach(x=>{
        write_api_doc(path.join(ENUMS,x),path.join('../_doc/api/livescripts/enums',x))
    })

    fs.copyFileSync(FUNCTIONS,'../_doc/api/livescripts/functions.md')
    fs.copyFileSync(MACROS,'../_doc/api/livescripts/macros.md')

    makeAPIIndex('events','Events','Events', event_descriptions)
    makeAPIIndex('classes','Classes','Classes', class_descriptions)
    makeAPIIndex('enums','Enums','Enums', enum_descriptions)
}

{
    // Generate searchbar results
    [{type:'Event',values:event_descriptions},{type: 'Class',values:class_descriptions},{type:'Enum',values:enum_descriptions}].forEach(({type,values})=>{
        let t = type;
        type = `API : ${type}`
        for(const [key,value] of Object.entries(values)) {
            let category = (searchbar_results[type] || (searchbar_results[type] = {}))
            category[key] = {description:value,url:`api/livescripts/${t.toLowerCase()}/${key}`};
        }
    })
    fs.writeFileSync('./build/searchbar.json',JSON.stringify(searchbar_results,null,4))
    fs.writeFileSync('../_includes/searchbar_results.html',`<script> search_results = ${JSON.stringify(searchbar_results)} </script>`)
}