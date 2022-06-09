/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); /* + плюсик превращает строку в чиловой тип данных */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; /* Записываем ответы в базу данных, переменная [a] это свойство нашего обьекта, переменная [b] которое записывается как значение этого свойства. */
        console.log('done');
    } else {
        console.log('error');
        i--; /* Что бы вернутся на один цикл назад используем оператор дикремента i-- */
    }
}

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('Произошда ошибка');
    }
    
console.log(personalMovieDB);
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