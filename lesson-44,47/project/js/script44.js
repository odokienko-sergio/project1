/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), /* с помощью метода querySelectorAll мы получаем все img класса .promo__adv */
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'); /* метод querySelector используем что бы получить Первый элемент по данному селектору */

/* стрелочная функция для удоления каждого (item) элемента из массива adv */
adv.forEach (item => {
    item.remove();
});
/* Безимянная функция в которой содержится только один аргумент item который приходит из псевдомассива adv
adv.forEach (function (item) {
    item.remove();
});
*/

genre.textContent = 'Фантастика'; /* меняем текст для genre в котором єлемент с классом .promo__genre */
genre.style.margin = '40px 0 10px 0';

poster.style.backgroundImage = 'url("img/bg.jpg")'; /* меняем стиль (бэграунд) для poster в котором класс .promo__bg */

movieList.innerHTML = ""; /* метод innerHTML = "" очищает movieList */

movieDB.movies.sort(); /* тут мы берем массив (movies) обьекта (movieDB) и сортируем .sort() */

//console.log(poster.innerHTML);


/* формируем html верстку
если нам нужно перебрать элементы то мы берем счетчик forEach с двумя аргументами film-каждый элемент масива и i-номер по порядку
*/
movieDB.movies.forEach((film, i) => {
    /* movieList.innerHTML = movieList.innerHTML + "какоето значение"  */
    movieList.innerHTML += `      
        <li class="promo__interactive-item">
            ${i + 1} ${film} 
            <div class="delete"></div>
        </li>
    `; /* ${} - знак интерпалации. Теперь єто динамический конетнт, ${i + 1} - номер по порядку и ${film} - это каждый элемент */
});

/*
a = a + "aaa"; // два способоа одинаковые
a += "aaa";   // сокращеный вариант
*/


/*
adv.forEach(function (item) { 
    item.remove();
});
*/

/* мой пример */
poster.style.backgroundImage = 'url("img/ot.jpg")';

const title = document.querySelector('.promo__title');
title.innerHTML = "";

const descr = poster.querySelector('.promo__descr');
descr.innerHTML = 'Player of the Month:';

const promoRatings = document.querySelector('.promo__ratings');
promoRatings.innerHTML = "<span>Marcus Rashford</span>";
promoRatings.style.margin = '0px 0 0 0';
/*****************/

