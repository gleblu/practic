    "use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('How much films you watched?','');
        
        while (personalMovieDB.count ==''||personalMovieDB.count==null||isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films you watched?','');
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Watched quiet a little films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You movie fan!');
        } else {
            console.log('Error!');
        }
    },

    showMyDB: function (hidden)  {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <=3; i++) {
            let genre = prompt(`You favorit genre under number ${i}`);

            if (genre !== '' && genre !== null) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorit genre ${i + 1} - it's ${item} `);
        });
}

};

