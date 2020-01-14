require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// commands
var userInput = process.argv[2];
if(userInput === "concert-this"){
console.log('music');
}

var artist = process.argv[3];
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" 
.then(function(response){
    console.log(response);
})

.catch(function(error){
    console.log(error);
})
.finally(function(){

});