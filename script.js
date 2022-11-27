'use strict';

/* Урок 36 прототипно-ориентированное наследование */

let str = "some";
let strObj = new String(str);

//console.log(typeof(str));
//console.log(typeof(strObj));

console.dir([1,2,3]);
/*---- */
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier); // мы создаем прототип john который будет наследоватся от soldier
/*
const john = {
    health: 100
};*/

//john.__proto__ = soldier; // мы установили протатипа john-a солдата soldier

//Object.setPrototypeOf(john, soldier);

//console.log(john);
//console.log(john.armor);
john.sayHello();

/* урок 37 Рефакторинг */
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания (Задание на урок: 24-29)

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошда ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
        /*for (let i = 1; i <= 3; i++) {*/
            /*let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre == null) {
                console.log('Вы ввели ннекорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }*/
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

            if(genres === '' || genres == null) {
                console.log('Вы ввели ннекорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
    
};
/*урок 39 */
 //to string
 //1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

 // 2) конкотинация
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// to Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+ '5'));

//3)
console.log(typeof(parseInt("15px", 4)));

let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN;
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"44444"));

/* 39-- - home work Задание на поиск ошибок */

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);
/* урок 42-49 
...
*/



/* Урок 50 */
const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); // метод .append помещает эелемент в конец себя
}
loadScript("js/test.js");
loadScript("js/some.js");
