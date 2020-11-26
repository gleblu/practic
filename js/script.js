let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films you watched?','');
    
    while (numberOfFilms ==''||numberOfFilms==null||isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films you watched?','');
}
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('One the last watched film?', ''),
                b = prompt('How much you rate film?', '');
        if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
            console.log('OK!');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('Error!');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched quiet a little films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You movie fan!');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
personalMovieDB.genres[i - 1] = prompt(`You favorit genres under number ${i}`);
    }

}

writeYourGenres();














