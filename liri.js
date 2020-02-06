var axios = require('axios');
require("dotenv").config();
const fs = require("fs");


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
    spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function (error, response) {
        for (var i = 0; i < response.tracks.items.length; i++) {
            // console.log(response.tracks.items[i].artists[0].name);
            console.log(response.tracks.items[i].name);
            console.log(response.tracks.items[i].uri);
            console.log(response.tracks.items[i].album.name);

        }



    })
} else if (command === "movie-this") {
    var movieName = process.argv[3];
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log(response.data.Title);
            console.log(response.data.Year);
            console.log(response.data.Rated);
            for (var i = 0; i < response.data.Ratings.length; i++) {
                var currentScore = response.data.Ratings[i];
                if (currentScore.Source === "Internet Movie Database" || currentScore.Source === "Rotten Tomatoes") {
                    console.log(currentScore.Source, currentScore.Value);
                }
            }
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Plot);
            console.log(response.data.Actors);
        })


        } else if(command ==="do-what-it-says"){
            fs.readFile('./random.txt', 'utf8', function(err,data){
                if(err){
                    console.log(err);
                }else
                console.log('data', data);
                });
            }

}
