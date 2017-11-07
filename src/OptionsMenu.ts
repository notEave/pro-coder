export class OptionsMenu {
    private readonly optionsButton:HTMLButtonElement;
    private readonly doc:HTMLDocument;
    private readonly win:Window;
    
    public constructor(win:Window, doc:HTMLDocument) {
	this.doc = doc;
	this.win = win;
	this.optionsButton = doc.createElement('button');
	this.optionsButton.innerText = '^G Get Help';

	(() => {
	    let isOpen:boolean = false;

	    const toggleMenu = () => {
		console.log('hello world!');
		isOpen = !isOpen;
	    }

	    this.win.addEventListener('keydown', (e:KeyboardEvent) => {
		if(e.ctrlKey && e.key === 'g') {
		    e.preventDefault();
		    toggleMenu();
		}
	    })

	    this.optionsButton.addEventListener('click', (e:MouseEvent) => {
		toggleMenu();
	    })
	    
	})();
    }

    public show():void {
	this.doc.body.appendChild(this.optionsButton);
    }

    public hide():void {
	this.doc.body.removeChild(this.optionsButton);
    }
}
