"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/*
const storeName = 'Bookshop';

const storeDescription = {
    budget: 10000,
    employees: ["Johny", "Jim", "Jack"],
    products: {
        book: 300,
        vinyl: 450
    },
    open: true
};
*/




// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase
