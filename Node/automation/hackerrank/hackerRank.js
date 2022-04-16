const puppeteer = require("puppeteer");
// let { email, password } = require("./secrets");
let email = "AceD14";
let password = "ace1412";
let { answer } = require("./codes");

let curTab;
let browserOpenPromise = puppeteer.launch({
	headless: false,
	defaultViewportnull: null,
	args: ["--start-maximized"],
	// chrome://version/
	// executablePath:
	// 	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
// console.log(browserOpenPromise);
browserOpenPromise // fulfill
	.then(function (browser) {
		console.log("browser is open");
		console.log(browserOpenPromise);
		// console.log(browser);
		// An array of all open pages inside the Browser.
		// returns an array with all the pages in all browser contexts
		let allTabsPromise = browser.pages();
		return allTabsPromise;
	})
	.then(function (allTabsArr) {
		curTab = allTabsArr[0];
		console.log("new tab");
		// URL to navigate page to
		let visitLoginPagePromise = curTab.goto(
			"https://www.hackerrank.com/auth/login"
		);
		return visitLoginPagePromise;
	})
	.then(function (data) {
		// console.log(data);
		console.log("Hackerrank login page opened");
		//selector(where to type), data(what to type)
		let emailWillBeTypedPromise = curTab.type("input[name='username']", email);
		return emailWillBeTypedPromise;
	})
	.then(function () {
		console.log("email is typed");
		let passwordWillBeTypedPromise = curTab.type(
			"input[type='password']",
			password
		);
		return passwordWillBeTypedPromise;
	})
	.then(function () {
		console.log("password has been typed");
		let willBeLoggedInPromise = curTab.click(
			".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
		);
		return willBeLoggedInPromise;
	})
	.then(function () {
		console.log("logged into hackerrank successfully");
		// waitAndClick will wait for the selector to load , and then click on the node
		let algorithmTabWillBeOPenedPromise = waitAndClick(
			"div[data-automation='algorithms']"
		);
		return algorithmTabWillBeOPenedPromise;
	})
	.then(function () {
		console.log("algorithm page is opened");
		let allQuesPromise = curTab.waitForSelector(
			'a[data-analytics="ChallengeListChallengeName"]'
		);
		return allQuesPromise;
	})
	.then(function () {
		function getAllQuesLinks() {
			let allElem = document.querySelectorAll(
				'a[data-analytics="ChallengeListChallengeName"]'
			);
			let linksArr = [];
			for (let i = 0; i < allElem.length; i++) {
				linksArr.push(allElem[i].getAttribute("href"));
			}
			return linksArr;
		}
		let linksArrPromise = curTab.evaluate(getAllQuesLinks);
		return linksArrPromise;
	})
	.then(function (linksArr) {
		console.log("links to all ques received");
		// console.log(linksArr);
		// question solve krna h
		// link to the question to be solved, idx of the linksArr
		let questionWillBeSolvedPromise = questiionSolver(linksArr[0], 0);
		return questionWillBeSolvedPromise;
	})
	.then(function () {
		console.log("question is solved");
	})
	.catch(function (err) {
		console.log(err);
	});

function waitAndClick(algoBtn) {
	let waitClickPromise = new Promise(function (resolve, reject) {
		let waitForSelectorPromise = curTab.waitForSelector(algoBtn);
		waitForSelectorPromise
			.then(function () {
				console.log("algo btn is found");
				let clickPromise = curTab.click(algoBtn);
				return clickPromise;
			})
			.then(function () {
				console.log("algo btn is clicked");
				resolve();
			})
			.catch(function (err) {
				reject(err);
			});
	});
	return waitClickPromise;
}

function questiionSolver(url, idx) {
	return new Promise(function (resolve, reject) {
		let fulLink = `https://www.hackerrank.com${url}`;
		let goToQuesPagePromise = curTab.goto(fulLink);
		goToQuesPagePromise
			.then(function () {
				console.log("question opened");
				// tick the custom input box mark
				let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
				return waitForCheckBoxAndClickPromise;
			})
			.then(function () {
				// select the box where code will be typed
				let waitForTextBoxPromise = curTab.waitForSelector(".custominput");
				return waitForTextBoxPromise;
			})
			.then(function () {
				let codeWillBeTypedPromise = curTab.type(".custominput", answer[idx]);
				return codeWillBeTypedPromise;
			})
			.then(function () {
				// control key is pressed promise
				let controlPressedPromise = curTab.keyboard.press("Control");
				return controlPressedPromise;
			})
			.then(function () {
				let aKeyPressedPromise = curTab.keyboard.press("a");
				return aKeyPressedPromise;
			})
			.then(function () {
				let xKeyPressedPromise = curTab.keyboard.press("x");
				return xKeyPressedPromise;
			})
			.then(function () {
				// select the editor promise
				let cursorOnEditorpromise = curTab.click(
					".monaco-editor.no-user-select.vs"
				);
				return cursorOnEditorpromise;
			})
			.then(function () {
				let aKeyPressedPromise = curTab.keyboard.press("a");
				return aKeyPressedPromise;
			})
			.then(function () {
				let vKeyPressedPromise = curTab.keyboard.press("v");
				return vKeyPressedPromise;
			})
			.then(function () {
				let submitButtonClickedPromise = curTab.click(".hr-monaco-submit");
				return submitButtonClickedPromise;
			})
			.then(function () {
				let controlDownPromise = curTab.keyboard.up("Control");
				return controlDownPromise;
			})
			.then(function () {
				console.log("code submitted successfully");
				resolve();
			})
			.catch(function (err) {
				reject(err);
			});
	});
}
