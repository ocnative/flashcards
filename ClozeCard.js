// Explain module.exports.
module.exports = ClozeCard;

// Declare Variables for Required Fields
// Item:        Required for:
// ==========   ================================
// cloze.Json   The data for the cloze card set. 
// fs           Provides File I/O.
var clozeJson = require('./cloze.json');
var fs = require('fs');

// ClozeCard Constructor
function ClozeCard(text, cloze) {

	// Checks cloze to see if it is contained in text
	if (text.indexOf(cloze) === -1) {
		return console.log(cloze + ' Doesn\'t appear in ' + text);
	}

	// Allows Constructor to be called without new
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);

	}


	// Create properties
	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, '...');
	this.card = function () {


		// Setup variable
		var question = {
			partial: this.partial,
			cloze: this.cloze,
			cardType: 'cloze'

		};

		// Push question to array
		clozeJson.push(question);

		// add question variable to basic.json file
		fs.writeFile('cloze.json', JSON.stringify(clozeJson, null, 2), function (error) {

			// if there is an error, log the error
			if (error) {
				console.log(error);

			}

		});

	};

}