export class Iterator<T> {
    private readonly list:T[];
    private counter:number;
    
    public constructor(list:T[]) {
	this.list = list;
	this.counter = 0;
    }

    public hasNext():boolean {
	return this.counter !== this.list.length;
    }

    public next():T {
	if(this.hasNext()) {
	    return this.list[this.counter++];
	} else {
	    throw new Error('Iterator is consumed.');
	}
    }
}

