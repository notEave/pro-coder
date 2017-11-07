export class CodeElement {
    private readonly preElem:HTMLPreElement;
    private readonly codeElem:HTMLElement;
    private readonly doc:HTMLDocument;
    
    public constructor(doc:HTMLDocument) {
	this.doc = doc;
	this.preElem = doc.createElement('pre');
	this.codeElem = doc.createElement('code');
	this.preElem.appendChild(this.codeElem);
    }

    public hide():CodeElement {
	this.doc.body.removeChild(this.preElem);
	return this;
    }

    public show():CodeElement {
	this.doc.body.appendChild(this.preElem);
	return this;
    }

    public replaceText(content:string):void {
	this.codeElem.innerText = content;
    }

    public concatText(content:string):void {
	this.codeElem.innerText += (content);
    }

    public clearText():void {
	this.codeElem.innerText = '';
    }

    public getText():string {
	return this.codeElem.innerText;
    }
}
