const numberOfFilms = +prompt('How much films you watched?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const   a = prompt('One the last films you watched?',''),
            b = prompt('How much you rate film?', '');
    if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
        console.log('done');
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
    
}

if (personalMovieDB.count < 10) {
    console.log('You watched quiet a little films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You classic viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('You movie fan!');
} else {
    console.log('Error!');
}

console.log(personalMovieDB);

