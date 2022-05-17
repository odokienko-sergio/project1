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

if (3) {
    console.log('Ok!');
} else {
    console.log('Error');
}


/*const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('Ok!');
}*/

/* Тернарный оператор ? - */
/*(num === 50) ? console.log('Ok!') : console.log('Error');*/
/* 4 + 4 Бинарный аргумент */
/* +'4' Унарный аргумент*/


const num = 50; 

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
        console.log('Neverno');
        break;
    case 51:
        console.log('V tochku!');
        break;
    default:
        console.log('Ne v etot raz');
        break;
}






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
