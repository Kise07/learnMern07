const puppeteer = require("puppeteer");

let browserOPenPromise = puppeteer.launch({
	headless: false,
	defaultViewportnull: null,
	args: ["--start-maximized"],
	executablePath: "/path/to/Chrome",
});
browserOPenPromise
    .then(function (browser) {
	// console.log("browser is open");
});
