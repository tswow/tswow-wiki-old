export interface DocNode {
    id: number
    name: string
    kindString: 'Project'|'Class'|'Constructor'|'Constructor Signature'|'Interface'|'Method'|'Call signature'
    children: DocNode[]
}

export interface DocConstructor extends DocNode {
    signatures: DocConstructorSignature[]
    kindString: 'Constructor Signature'
}

export interface DocMethod extends DocNode {
}

export interface DocConstructorSignature extends DocNode {
    typeParameter: DocNode[]
}

export interface DocType {
    type: "reference";
    typeArguments: DocType[]
}

export function getParameters(node: DocNode) {
    if(!(node as any).signatures) return;
}

export function getSignatures(node: DocNode): DocConstructorSignature[] {
    return node.children
        .filter(x=>x.kindString == 'Constructor')
        .map(x=> x as DocConstructor)
        .reduce((p,c)=>p.concat(c.signatures),[] as DocConstructorSignature[])
}

export function isConstructor(node: DocNode): node is DocConstructorSignature {
    return node.kindString == 'Constructor Signature'
}