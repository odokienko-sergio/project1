"use strict";
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
 /* Вложенный цикл */
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}
console.log(result);

/*Метка*/
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue first;/* Метка */
            console.log(`Third level: ${k}`);
        }
    }
}





//let num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    num++;
//    console.log(num);
//}
//while (num < 55);

//for (let i = 1; i <= 10; i++) {
//    if (i === 6) {
//        break;
//        //continue;
//    }
//    console.log(i);
//}

/* Home Work #1 верно*/
let num = 5;

    while (num <= 10) {
    console.log(num);
    num++;
}
/* ответ */
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

firstTask();

/* 2 верно*/
for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
            //continue;
        }
        console.log(i);
}

/* 3 верно */
for (let i = 1; i <= 5; i++) {
    console.log(i * 2);
}
/* ответ */
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
thirdTask();

/* 4-------- */
let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++; 
            continue;
        } else {
            console.log(i);
        }
        i++;
    }


    //for (let i = 2; i <= 16; i++) {
    //    if (i % 2 === 0) {
    //        continue;
    //    } else {
    //        console.log(i);
    //    }
    //}

    
/* 5  Заполнить массив цифрами от 5 до 10 включительно */

//const arr = [1, 2, 3, 4, 5];
//console.log(arr[0]);
function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask();

/* Екстра Home work */
// Место для первой задачи

    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    result.push(3);
    result.push(5);
    result.push(8);
    result.push(16);
    result.push(20);
    result.push(23);
    result.push(50);
    // Пишем решение вот тут
    console.log(result);
    // Не трогаем
    return result;
    
}
firstTask();
/* Екстра Home work ответ*/
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
}

firstTask();
/* */
/* Екстра Home work 2 */
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

secondTask();

/* Екстра Home work 3 */
function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }

    console.log(result);
    return result;
}

thirdTask();
/* 4 */
const lines = 5;
let resultNew = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        resultNew += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        resultNew += "*";
    }
    resultNew += "\n";
}

console.log(resultNew);