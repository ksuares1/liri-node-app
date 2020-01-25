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

    // spotify.search({ type: 'track', query: 'Jealous' }, function (err, data) {
    //     if (err) {
    //         return console.log('Error occurred: ' + err);
    //     }

    //     console.log(data);
    // });


} else if (command === "spotify-this-song") {
    var songName = process.argv[3];
    spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function (error, response) {
        for (var i = 0; i < response.tracks.items.length; i++) {
            // console.log(response.tracks.items[i].artists[0].name);
            console.log(response.tracks.items[i].name);
            console.log(response.tracks.items[i].uri);
            console.log(response.tracks.items[i].album.name);

        }

        if (error) {
            return console.log(error);
        }
        else if (command === "movie-this") {
            var movieName = process.argv[3];
            axios.get("http://www.omdbapi.com/?t=" + movieName+ "&y=&plot=short&apikey=[key]")
                .then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i].title);
                    console.log(response.data[i].year);
                    console.log(response.data[i].rating);
                    console.log(response.data[i].country);
                    console.log(response.data[i].language);
                    console.log(response.data[i].plot);
                    console.log(response.data[i].actors);
                    }
                }
            

         }

     })
 }
            
