import { FileLoader } from './FileLoader';

const DEFAULT_URI:string = 'https://raw.githubusercontent.com/id-Software/Quake-III-Arena/master/code/game/q_math.c';

class Main {
    public static main(win:Window, doc:HTMLDocument):void {
	const $ = (id:string) => {
	    return document.getElementById(id) as HTMLElement;
	}

	const blink_cursor = () => {
	    const on_off = (v:number) => {
		return v % 2;
	    }

	    const cursor = $('cursor');
	    let point = 1;

	    /*
	    ** if the user hits a key cursor will be set visible
	    */
	    win.addEventListener('keydown', (e:KeyboardEvent) => {
		cursor.style.opacity = on_off(point = 1).toString();
	    })
	    setInterval(() => {
		cursor.style.opacity = on_off(point++).toString();
	    }, 500);
	}

	const set_random_app_version = () => {
	    const rand = () => Math.random() * 10 | 0;
	    const version_number = `${rand()}.${rand()}.${rand()}`;
	    
	    $('version-number').innerText = version_number;
	    doc.title = 'GNU nano ' + version_number;
	}

	const load_file = (uri:string, callback:(content:string) => void) => {
	    new FileLoader(uri).setOnLoadEvent((content:string) => {
		callback(content);
	    }).load();
	}

	const set_header_file_name = (name:string) => {
	    $('buffer-name').innerText = 'File: ' + name;
	}

	const reset_header_file_name = () => {
	    $('buffer-name').innerText = 'New Buffer';
	}

	const start_file_gen = () => {
	    const input = read_in();

	    set_header_file_name((() => {
		const parts = input.uri.split('/');
		return parts[parts.length-1];
	    })());

	    load_file(input.uri, (content:string) => {
		let cursor = 0;
		const text = $('text');
		const kbEvent = (e:KeyboardEvent) => {
		    if(e.ctrlKey && e.key === 'r') {
			win.removeEventListener('keydown', kbEvent);
			text.innerText = '';
			reset_header_file_name();
		    } else {
			const snippet = content.substr(cursor, input.speed);
			text.innerText += snippet;
			cursor += input.speed;
			window.scrollTo(0, 1000000);
		    }
		}

		win.addEventListener('keydown', kbEvent);
	    });
	}

	const read_in = () => {
	    const type_speed = $('type-speed-in') as HTMLInputElement;
	    const file_uri   = $('file-uri-in') as HTMLInputElement;

	    return {
		speed: parseInt(type_speed.value),
		uri:   file_uri.value
	    };
	}

	const add_menu_listener = () => {
	    let visib:boolean = false;
	    const options = $('options-menu');
	    let id = 0;
	    
	    win.addEventListener('keydown', (e:KeyboardEvent) => {
		if(e.key === 'r' && e.ctrlKey) {
		    e.preventDefault();
		    visib = !visib;
		    
		    if(visib) {
			options.style.display = 'block';
		    } else {
			options.style.display = 'none';
			/* call load routine */
			start_file_gen();
		    }
		}
	    });
	}
	set_random_app_version();
	blink_cursor();
	add_menu_listener();
    }
}

Main.main(window, document);
