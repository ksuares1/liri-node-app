var axios = require('axios');
require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys = require("./assets/JavaScript/keys.js");
var spotify = new Spotify(keys.spotify);

// commands
var command = process.argv[2];
var input = process.argv.slice(3).join(' ');
if (command === "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].venue);
            }

        })

        .catch(function (error) {
            console.log(error);
        })

} else if (command === "spotify-this-song") {
    for(var i =0; i<response.data.length; i++){
        console.log(response.data[i].country.city.region);
    }
}

