const numberOfFilms = +prompt('How much films you watch?', '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const   a = prompt('One the last film you watched?', ''),
        b = prompt('How much you rate it?', ''),
        c = prompt('One the last film you watched?', ''),
        d = prompt('How much you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


