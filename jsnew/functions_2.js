
function displayMovie(title, genre) {
    console.log("Movie Title:", title);
    console.log("Genre:", genre);
}

function getMovieDetails(movie) {
    return "Title: " + movie.title + ", Genre: " + movie.genre;
}

let myFavoriteMovie = {
    title: "Inception",
    genre: "Science Fiction"
};

displayMovie(myFavoriteMovie.title, myFavoriteMovie.genre);

let movieInfo = getMovieDetails(myFavoriteMovie);
console.log(movieInfo);

