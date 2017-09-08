
// Explain module.exports.
module.exports = BasicCard;

// Declare Variables for Required Fields
// Item:        Required for:
// ==========   ================================
// basic.Json   The data for the basic card set. 
// fs           Provides File I/O.
var basicJson = require('./basic.json');
var fs = require('fs');

// BasicCard Constructor
function BasicCard(front, back) {

  // Allows Constructor to be called without new 
  // (new what? Function?)
  if (!(this instanceof BasicCard)){
    return new BasicCard(front, back);
  }

  this.front = front;
  this.back = back;
  this.card = function() {

    // Set up variable for basic card question
    var question = {
      front: this.front,
      back: this.back,
      cardType: 'basic'
    };

    // Push this new question to the array.
    basicJson.push(question);

    // Add contents of question variable to basic.json file.
    fs.writeFile('basic.json', JSON.stringify(basicJson, null, 2), function(error) {

      // If there is an error, log it to the console.
      if (error) {
        console.log(error);
      }

    });

  };

}