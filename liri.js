var axios = require('axios');
require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys = require("./assets/JavaScript/keys.js");
var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();

// commands
var command = process.argv[2];
var input = process.argv.slice(3).join(' ');
if (command === "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].venue);
                console.log(response.data[i].venue.city);
                console.log(moment(response.data[i].dateTime).format("MM/DD/YYYY"));
            }

        })

        .catch(function (error) {
            console.log(error);
        })

} else if (command === "spotify-this-song") {
    var songName = process.argv[3];
    axios.get('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10')
        .then(function (error, response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].artists.name);
                console.log(response.data[i].artists.name.song);
                console.log(response.data[i].artists.name.preview_url);
                console.log(response.data[i].artists.name);
                
            }
        }

    
    

        )
    }
