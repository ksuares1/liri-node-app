require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// commands
var command = process.argv[2];
if(command === "concert-this"){

// var artist = process.argv[3];
var querURL=
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" 
.then(function(response){
    console.log(response);
})

.catch(function(error){
    console.log(error);
})
.finally(function(){

});