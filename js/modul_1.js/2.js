"use strict";
// Перетворення типів: рядки

const guestName = "Mango";
const roomNumber = "12";

const str1 = 'Some text';
const srt2 = "Some text. I'm ready.";
// const srt3 = `Hello <guestName>. Your room is <roomNumber>!`;
const srt3 = `Hello ${guestName}. Your room is ${roomNumber}!`;

// console.log("🚀 ~ srt3:", srt3);

const message = "Hello" + " " + guestName + "." + " " + "Your room is " + roomNumber + "!";
// console.log(message);

// String() - явне перетворення числа в рядок
// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// Неявне перетворення числа в рядок

// const userInput = +3; // унарний
// let number = -3; // унарний мінус

// console.log("5" + 3); // "53" бінарний
// console.log("5" + true); // "5true"
// console.log("5" + false); // "5false"
// console.log("5" + null); // "5null"

// console.log(3 + 11 + "55"); // "1455"
// console.log(3 + (11 + "55")); // "31155"

// Перетворення типів: числа

// Number - конструктор чисел

// Явне перетворення типів

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number('Jacob')); // NaN
// console.log(Number('25px')); // NaN


// Неявне перетворення типів

// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log('5' + true); // "5true"
// console.log(5 - true); // 4
// console.log('5px' - false); // NaN


const userValue = userNumber.value;
// console.log("🚀 ~ userValue:", userValue); // 5

const yourNumber = 5;

// console.log(yourNumber === Number(userValue));

answer.textContent = yourNumber === Number(userValue)? "Win" : "Lose";

// Number(userValue) = +userValue - унарний плюс перед рядком те саме, що слово Number


// console.log(1 + +true); // 2

// Перевірки:

// const result1 = isNaN("25px");
// console.log("🚀 ~ result1:", result1); // true NaN

// const result2 = Number.isNaN("25px");
// console.log("🚀 ~ result2:", result2); // false 25

// const result1 = Number.parseInt("25px");
// console.log("🚀 ~ result1:", result1); // 25

// const result2 = Number.parseFloat("25.9px");
// console.log("🚀 ~ result2:", result2); // 25.9

// Оператори порівняння - лівий та правий операнди приводяться до чисел

// console.log("5 > 4", 5 > 4); //true
// console.log("'2' > '12':", "2" > "12"); // '2' > '12': true - лексикографічний принцип


// Оператори рівності == === != !==

// console.log("'4' == 4:", "4" == 4); // '4' == 4: true

// строга рівність ===

// console.log('🚀 ~ "6" === 6:', "6" === 6); // false
// console.log("🚀 ~ '6' === '6':", '6' === '6'); // true

// строга нерівність !==

// console.log("🚀 ~ 1 !== true:", 1 !== true);
// console.log("🚀 ~ '0' !== false:", '0' !== false);

// console.log("🚀 ~ undefined == null:", undefined == null);
// console.log("🚀 ~ undefined === null:", undefined === null);