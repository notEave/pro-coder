import { FileLoader } from './FileLoader';
import { CodeElement } from './CodeElement';
import { OptionsMenu } from './OptionsMenu';
import { Iterator } from './Iterator';
import { toArray } from './Strings';

// const DEFAULT_URI:string = 'https://raw.githubusercontent.com/notEave/multilayer-simplex-noise/master/typescript/color/Colors.ts';

//const DEFAULT_URI =  'https://raw.githubusercontent.com/notEave/asteroid-defender/master/js/asteroid-defender.js';

const DEFAULT_URI:string = 'https://raw.githubusercontent.com/id-Software/Quake-III-Arena/master/code/game/q_math.c';

//const DEFAULT_URI:string = 'https://raw.githubusercontent.com/torvalds/linux/master/fs/ext4/balloc.c';

class Main {
    public static main(win:Window, doc:HTMLDocument):void {
	const buffer = doc.getElementById('text') as HTMLSpanElement;
	const header = doc.getElementById('buffer-name') as HTMLSpanElement;
	const appname = doc.getElementById('app-name') as HTMLSpanElement;
	const cur = doc.getElementById('cursor') as HTMLSpanElement;

	const onoff = (v:number) => {
	    return v % 2;
	}
	
	let counter = 0;

	(() => {
	    setInterval(() => {
		cur.style.opacity = onoff(counter++).toString();
	    }, 500);
	})();

	const rand = () => Math.random() * 10 | 0;

	const major = rand();
	const minor = rand();
	const patch = rand();

	appname.innerHTML = `&nbsp;&nbsp;GNU nano ${major}.${minor}.${patch}`;
	doc.title = `GNU nano ${major}.${minor}.${patch}`;
	const uri:string[] = DEFAULT_URI.split('/');
	header.innerText = 'File: ' + uri[uri.length-1];
	
	new FileLoader(DEFAULT_URI)
	    .setOnLoadEvent((content:string) => {
		const len = 3;
		let cursor = 0;

		const render = () => {
		    const write = content.substr(cursor, len);
		    cursor += len;
		    buffer.innerText += write;
		    window.scrollTo(0, 1000000);
		    
		    if(cursor >= content.length) {
			return;
		    } else {
			requestAnimationFrame(render);
		    }
		}

		requestAnimationFrame(render)
		
	    }).load();
    }
}

Main.main(window, document);
