'use strict';

/* Урок 25 */
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
/* end */

/* Урок 26 д и 27 д  */
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
/*============================Home Work================== */
// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

// Место для третьей задачи
/*3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, 
она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, 
то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
*/


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);


/* Урок 28 ============================*/
const str = "test";
const arr = [1, 2, 4];

console.log(str[2]);
//console.log(arr.length);


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.substr(6, 5));

const test = "12.2px";
//console.log(parseInt(test));
console.log(parseFloat(test));



/* Задание на урок: 24-29

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); /* + плюсик превращает строку в чиловой тип данных */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; /* Записываем ответы в базу данных, переменная [a] это свойство нашего обьекта, переменная [b] которое записывается как значение этого свойства. */
            console.log('done');
        } else {
            console.log('error');
            i--; /* Что бы вернутся на один цикл назад используем оператор дикремента i-- */
        }
    }
}

rememberMyFilms();


    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошда ошибка');
        }
    }

    detectPersonalLevel(); 

    function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    
    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }

    writeYourGenres();

/* My Home work */
/*
const numberOfGoals = +prompt("Сколько голов ты забил за карьеру?", '');

const personalPlayerId = {
    totalGoals: numberOfGoals,
    team: {},
    number: {},
    position: {},
    alias: {}
};

for (let i = 0; i < 1; i++) {
    const a = prompt('В какой команде ты сейас играешь?', '');
    const b = prompt('Сколько голов было забито за этот клуб?', '');
    const c = prompt('Под каким номером играешь?', '');
    const d = prompt('На какой позиции играешь?', '');

    if (a != null && b != null && c != null && d != null && a.length < 50) {
        personalPlayerId.team[a] = b;
        personalPlayerId.number = c;
        personalPlayerId.position = d;
        console.log('done!');
    } else {
        console.log('error!');
        i--;
    }
}

    if (personalPlayerId.totalGoals < 10) {
        personalPlayerId.alias = "Ты наверное вратарь?";
    } else if (personalPlayerId.totalGoals <= 10 && personalPlayerId.totalGoals < 30) {
        personalPlayerId.alias = "Не плохо, но ты явно не нападающий или не игрок основы";
    } else if (personalPlayerId.totalGoals <= 30 && personalPlayerId.totalGoals < 50) {
        personalPlayerId.alias = "Ого, да ты приражденный страйкер!";
    } else if (personalPlayerId.totalGoals >= 50) {
        personalPlayerId.alias = "Роналдо, это ты?";
    } else {
        personalPlayerId.alias = "error";
    }
console.log(personalPlayerId);
*/

/* 29 Home Wprk 1
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
(тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, 
который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - 
вернуть строку "При вычислении произошла ошибка"
Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
*/
// Место для первой задачи
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

/*
2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 

Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. 
Конечно, там будет куда больше условий, но смысл остается таким же.
*/
// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

/* 29 Home Wprk 2
1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - 
функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/
// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);

/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - 
возвращается 0. Дробные числа разрешены.
Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0
*/
// Место для второй задачи
function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');

/*
29 Home work 3
Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"
*/
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5);