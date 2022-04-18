const request = require('request');
// Cheerio
// Cheerio parses HTML and it traverse the html so that data can be manipulated according to user's needs
const Cheerio = require('cheerio');
request('https://www.worldometers.info/coronavirus/', cb);

function cb(err, res, body) {
	if (err) {
		console.error('error', err);
	} else {
		handleHtml(body);
	}
}

function handleHtml(html) {
	let selecTool = Cheerio.load(html);

	let coronaStats = selecTool('.maincounter-number');

	// console.log(coronaStats.text());

	let totalCases = selecTool(coronaStats[0]).text();
	console.log('Total Cases -> ' + totalCases);

	let totalDeaths = selecTool(coronaStats[1]).text();
	console.log('Total Deaths -> ' + totalDeaths);

	let totalRecovered = selecTool(coronaStats[2]).text();
	console.log('Total Patients Recovered -> ' + totalRecovered);
}
