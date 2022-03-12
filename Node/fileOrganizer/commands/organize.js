const fs = require('fs'); //fs module
const path = require('path'); //path module
let types = {
	media: ['mp4', 'mkv', 'mp3'],
	archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
	document: [
		'docx',
		'doc',
		'pdf',
		'xlsx',
		'xls',
		'odt',
		'ods',
		'odp',
		'odg',
		'odf',
		'txt',
		'ps',
		'tex',
	],
	app: ['exe', 'dmg', 'pkp', 'deb'],
	images: ['png', 'jpg', 'jpeg'],
};

function organize(scrPath) {
	if (scrPath == undefined) {
		// The process.cwd() method returns the current working dirctory of the Node.js process.
		// console.log(scrPath); // undefined
		scrPath = process.cwd();
		console.log('source path is ', scrPath);
	}

	let organizedFiles = path.join(scrPath, 'organized_files');
	// console.log('organized files folder path is ', organizedFiles);
	if (fs.existsSync(organizedFiles) == false) {
		//organizedfiles naam ka folder exist nhi krta toh ek folder bana do warna rhne do
		fs.mkdirSync(organizedFiles);
	} else console.log('folder already exists');
}

organize();
