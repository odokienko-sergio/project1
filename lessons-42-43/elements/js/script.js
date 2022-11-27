'use strict';

const box = document.getElementById('box');

console.log(box);

//const btns = document.getElementsByTagName('button')[1];

//console.log(btns);

const btns = document.getElementsByTagName('button');

console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');


//console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

//const oneHeart = document.querySelector('.heart');
const oneHeart = wrapper.querySelector('div');
console.log(oneHeart);

/* УРок 43 */

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';
//box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//for ( let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div'); // создаем элемент (виден только в JS)
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.append(div);
//document.querySelector('.wrapper').append(div);
//wrapper.prepend(div);
wrapper.append(div);
//wrapper.appendChild(div);

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[1]);
//wrapper.removeChild(hearts[1]);

//circles[1].remove();

hearts[0].replaceWith(circles[0]); // метод замена єлементов (1ый элемент сердечка заменить на кружок)
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');

/* my examples */
const title = document.querySelector('h3');
title.style.textAlign = 'center';

const texts = document.getElementsByTagName('p');
texts[4].style.color = 'red';
texts[4].style.width = '50px';

const paragraphs = document.querySelectorAll('.paragraph');
for ( let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = 'yellow';
    paragraphs[i].style.width = '60px';
    paragraphs[i].style.borderRadius = '10%';
    }

/* добавление єлемента */
const span = document.createElement('span');

span.classList.add('specific');

//document.body.append(span);
document.querySelector('.custom-block').append(span);

span.textContent = "Hello";
/********/