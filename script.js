"use strict";

//const hamburger = 5;
//const fries = 0;

//if (hamburger && fries) {
//    console.log('Я сыт!');
//}

//console.log((hamburger && fries));

//Оператор И && возвращает первое ложное значение на котором остановился, а если все агрументы правдивы вернет последний
// И && запеняется на лжи, а или || запиняется на правде.
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Vse happy!');
} else {
    console.log('Mi uhodim');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);




let johnReport, alexReport, samReport, ariaReport = 'done';

console.log(johnReport || alexReport || samReport || ariaReport);

console.log(!0);/* возвращает противоположное значение */
//console.log(hamburger === 3 && cola && fries);

/*Home work*/
 
console.log( NaN || 2 || undefined );/* 2 - первое правдивое */
 
console.log( NaN && 2 && undefined );/* Nan - первое не правдивое */
 
console.log( 1 && 2 && 3 ); /* 3 - последнее правдивое */
 
console.log( !1 && 2 || !3 ); /* -1, false */

/* */

console.log( 25 || null && !3 ); /* -3 не верно. правильный ответ 25 */
 
console.log( NaN || null || !3 || undefined || 5); /* 5 */
 
console.log( NaN || null && !3 && undefined || 5); /* -3 не верно. правильный ответ 5 */
 
console.log( 5 === 5 && 3 > 1 || 5); /* true */

//console.log(1 && 0);/* сравниваем true и false. оператор запунлся на последнем не правдвом выражении */
//console.log(1 && 5);/* оба правдивы, оператор возвращает последнее значение */
//console.log(null && 5);/* вернуло первое не правдивое выражение */
//console.log(0 && 'sdsdsd');/* не правда и строка */

/* выполнится */
const hamburgerr = 3;
const friess = 3;
const colaa = 0;
const nuggetss = 2;
 
if (hamburgerr === 3 && colaa || friess === 3 && nuggetss) {
   console.log('Done!');
}
/* выполнится */
let hhamburger;
const ffries = NaN;
const ccola = 0;
const nnuggets = 2;
 
if (hhamburger || ccola || ffries === 3 || nnuggets) {
   console.log('Done!');
}
/* не выполнится */
let hammburger;
const frries = NaN;
const coola = 0;
const nugggets = 2;
 
if (hammburger && coola || frries === 3 && nugggets) {
   console.log('Done!');
}


/*-------------------------------------- */
if (hamburger === 3 && cola === 1 && fries) {
    console.log('Vse siti!');
} else {
    console.log('Mi uhodim');
}


/*-----------------------------*/
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
/*--------------------------------*/
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

/*
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
*/




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
