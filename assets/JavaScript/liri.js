require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// commands
var userInput = process.argv[2];
if(userInput ==="concert-this"){
console.log();
}

var artist = process.argv[3];

