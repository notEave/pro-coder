import { FileLoader } from './FileLoader';
import { CodeElement } from './CodeElement';
import { OptionsMenu } from './OptionsMenu';
import { Iterator } from './Iterator';
import { toArray } from './Strings';

const DEFAULT_URI:string = 'https://raw.githubusercontent.com/notEave/' +
    'multilayer-simplex-noise/master/typescript/color/Colors.ts';

class Main {
    public static main(win:Window, doc:HTMLDocument):void {
	const code = new CodeElement(doc).show().hide();
	const btn = new OptionsMenu(win, doc);
	code.show();
	btn.show();

	window.addEventListener('keydown', () => {
	    
	})
    }
}

Main.main(window, document);
