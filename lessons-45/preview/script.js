
const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
/*
btn.onclick = function() {
    alert('CLick');
};
*/

//let i = 0;
const deleteElement = (e) => {
   // e.target.remove();
   console.log(e.currentTarget);
   console.log(e.type);
   /*
   i++;
   if (i == 1) {
    btn.removeEventListener('click', deleteElement);
   }
   */
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);


btns.forEach(btn => {  
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a'); /* берем элемент а со строницы */

link.addEventListener('click', function(event) {  /* колбэк функция, стрелочная функция () => */
    event.preventDefault(); /* отменяем стандартное поведение браузера .preventDefault(); !!!!!!!!!!!!!!!!*/

    console.log(event.target);
});
/*
btn.addEventListener('click', (e) => {
   // alert('CLick');
   console.log(e.target);
   e.target.remove();
   //console.log('hover');
} );
*/


/*
btn.addEventListener('click', () => {
    alert('CLick2');
} );
*/