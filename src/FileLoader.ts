export class FileLoader {
    private readonly source:string;
    private readonly httpRequest:XMLHttpRequest;
    
    public constructor(source:string) {
	this.source = source;
	this.httpRequest = new XMLHttpRequest();
    }

    public setOnLoadEvent(fn:(content:string) => void):FileLoader {
	this.httpRequest.addEventListener('load', function() {
	    fn(this.responseText);
	});
	return this;
    }

    public load():void {
	this.httpRequest.open('GET', this.source);
	this.httpRequest.send();
    }
}
