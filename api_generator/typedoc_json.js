"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConstructor = exports.getSignatures = exports.getParameters = void 0;
function getParameters(node) {
    if (!node.signatures)
        return;
}
exports.getParameters = getParameters;
function getSignatures(node) {
    return node.children
        .filter(function (x) { return x.kindString == 'Constructor'; })
        .map(function (x) { return x; })
        .reduce(function (p, c) { return p.concat(c.signatures); }, []);
}
exports.getSignatures = getSignatures;
function isConstructor(node) {
    return node.kindString == 'Constructor Signature';
}
exports.isConstructor = isConstructor;
