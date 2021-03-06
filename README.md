# liri-node-app


### About

In this assignment we made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
Here is a link of the app in action - https://drive.google.com/file/d/1QZffi8qMLyQXzit4L6oW2yrxZH0g666T/view

### What it does
liri.js will allow a user to serach Spotify songs, concerts nearby, and movies.


#### Directions
Using the following in the user's terminal
`node liri.js spotify-this-song <insert song title>`


A user can have access to:

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

If the user does not input anything then the program will output "Pumped up Kicks" by Foster the People

#### Movies
Using the following in the user's terminal
`node liri.js movie-this <insert movie title>`

This user will be able to access:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- Rotten Tomatoes Rating.
- Rotten Tomatoes URL.

If the user doesn't type a movie in, the program will provide 'The Dark Knight' as default movie

#### Do What It Says
`node liri.js do-what-it-says`


Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Program will run `spotify-this-song` for "I Want it That Way," default


