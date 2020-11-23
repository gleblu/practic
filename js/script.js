let numberOfFilms = {};

numberOfFilms = prompt("How much films you watch?", "");


let personalMovieDB = {};
personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};


let lastMovies = prompt("One of the last movies you watch?", "");
let rateIt = prompt("How much would you rate it?", "");

let lastMovies2 = prompt("One of the last movies you watch?", "");
let rateIt2 = prompt("How much would you rate it?", "");

personalMovieDB.movies[lastMovies] = rateIt;
personalMovieDB.movies[lastMovies2] = rateIt2;

console.log (personalMovieDB);











