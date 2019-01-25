var keys = require("./keys.js");

var request = require('request');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var dotenv = require("dotenv").config();
var moment = require('moment');


var input = process.argv;
var action = input[2];
var inputs = input[3];

//spotify key
var spotify = new Spotify(keys.spotify);


switch (action) {
	case "spotify-this-song":
	spotify(inputs);
	break;

	case "movie-this":
	movie(inputs);
	break;

	case "do-what-it-says":
	doit();
	break;
};

function spotify(inputs) {

	var spotify = new Spotify(keys.spotifyKeys);
		if (!inputs){
        	inputs = 'Pumped up Kicks';
    	}
		spotify.search({ type: 'track', query: inputs }, function(err, data) {
			if (err){
	            console.log('Error occurred: ' + err);
	            return;
	        }

	        var songInfo = data.tracks.items;
	        console.log("Artist(s): " + songInfo[0].artists[0].name);
	        console.log("Song Name: " + songInfo[0].name);
	        console.log("Preview Link: " + songInfo[0].preview_url);
	        console.log("Album: " + songInfo[0].album.name);
	});
}
//    * `concert-this`
https://rest.bandsintown.com/artists/adel/events?app_id=codingbootcamp#
function concertThis(bandQuery) {

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp#";

    // console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            var concertData = JSON.parse(body);


            for (i = 0; i < concertData.length && i < 5; i++) {

                var momentDT = moment(concertData[i].datetime).format('L');
                // console.log(concertData);
                console.log("===============================");
                console.log("Venue Name : " + concertData[i].venue.name +
                    "\nVenue Location: " + concertData[i].venue.city + "," + concertData[i].venue.country +
                    "\nDate of the Event: " + momentDT +
                    "\n===============================");
            }
        };
    });
}

function movie(inputs) {

	var queryUrl = "http://www.omdbapi.com/?t=" + inputs + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {
		if (!inputs){
        	inputs = 'The Dark Knight';
    	}
		if (!error && response.statusCode === 200) {

		    console.log("Title: " + JSON.parse(body).Title);
		    console.log("Release Year: " + JSON.parse(body).Year);
		    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
		    console.log("Country: " + JSON.parse(body).Country);
		    console.log("Language: " + JSON.parse(body).Language);
		    console.log("Plot: " + JSON.parse(body).Plot);
		    console.log("Actors: " + JSON.parse(body).Actors);
		}
	});
};

function doit() {
	fs.readFile('random.txt', "utf8", function(error, data){

		if (error) {
    		return console.log(error);
  		}

		// Then split it by commas (to make it more readable)
		var dataArr = data.split(",");

		// Each command is represented. Because of the format in the txt file, remove the quotes to run these commands. 
		if (dataArr[0] === "spotify-this-song") {
			var songcheck = dataArr[1].slice(1, -1);
			spotify(songcheck);
		} else if (dataArr[0] === "my-tweets") {
			var tweetname = dataArr[1].slice(1, -1);
			twitter(tweetname);
		} else if(dataArr[0] === "movie-this") {
			var movie_name = dataArr[1].slice(1, -1);
			movie(movie_name);
		} 
		
  	});

};

