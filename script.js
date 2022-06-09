'use strict';

let num = 20;/* Глобальная переменная */

function showFirstMessage(text) { /* в () мы будем передавать аргументы функции */
    console.log(text);
   // let num = 20;/* когда переменная созданна внутри функции, она называется локальной переменной*/
    num = 10;/* используем глобальную переменную*/
    console.log(num);
}

showFirstMessage("Hello World!"); /* вызов функции */
console.log(num); 

/*================*/

function calc(a, b) {
    return (a + b);/* return позволяет вернуть сумму, что угодно во внешний мир */
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

/* =======function declaration функция существует до того как она обьявлена======== */
/* можно вызывать прописывать вызов выше чем тело самой функции */
function ret() {
    let num = 50;
    return num; /* во внешний мир наша функция возвращает значение своей локальной переменной*/
}

const anotherNum = ret();
console.log(anotherNum);

/* function expression */
const logger = function() {
    console.log("Hello!");
};

logger();

/* ========Стрелочная функция============ */
//
//const calc = (a, b) => a + b;
const calc = (a, b) => { 
    console.log('1');
    return a + b 
};
/* ==========универсальность функции, польза использования аргументов============ */
const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
    //console.log(curr * amount);
    return curr * amount; /* данная функция возвращает какойто резултат, я другая функция ниже уже что с ним делает */
}   /* функция после return прекращает свою работу, ниже ничего писать нет смысла*/

function promotion(result) {
    console.log(result * discount);
    //return function(){};/* функция может возвращать функцию, котору мы так же можем записать в другую переменную и дальше уже использовать*/
}

//convert(500, usdCurr); /* значение подставляется только во время вызова этой функции */
const res = convert(500, usdCurr);
promotion(res);
//promotion(convert(500, usdCurr));/* вызов функции внутри функции */

/* ======================== */
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();
/* ========функция нам что то возвращает, тест=========== */
function doNothing() {};
console.log(doNothing() === undefined);