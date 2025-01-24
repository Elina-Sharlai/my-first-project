// "use strict";
// function greeting(name) {
//     return `Hello ${name}! Welcome on board`;
// }

// const userName = "Mango";

// console.log(greeting(userName));

// const titleEl = document.querySelector('h1');
// const transformTitleEl = titleEl.textContent.toUpperCase();

// setTimeout(() => {
//   titleEl.innerHTML = transformTitleEl;
// }, 2000);

// const someNumber = Math.random();
// console.log("🚀 ~ someNumber:", someNumber)
// ctrl+alt+l

// console.log("someNumber", someNumber)

// console.log(console);


// window.addEventListener("beforeunload")

// function transformTitleEl(title) {
//   return title.textContent.toUpperCase();
// }

// function changeTitleCase(title) {
//   titleEl.innerHTML = transformTitleEl;
// }
// setTimeout(changeTitleCase(titleEl), 2000);

// let UIElement = null;
// console.log("🚀 ~ UIElement:", typeof UIElement);


// UIElement = "<ul><li>item</li></ul>";

// let dropdownMenu;
// console.log("🚀 ~ dropdownMenu:", typeof dropdownMenu);

// if (!UIElement) {
//   console.log("Element doesn't exist");
// } else {
//   console.log("Do some magic");
// }
// const floatNumber = 41;
// console.log("🚀 ~ floatNumber:", typeof floatNumber);

// console.log(typeof true);

// const username = "Mango";

// console.log(username + " Love's JS");

// let age = 20;

// age = 31;

// const price = 200;

// debugger; - слово для зупинки і перевірки в консолі всього, що було зроблено раніше

// const a = 10;
// const b = 5;

// const result = b % a;
// const result = b ** 2;
// console.log("🚀 ~ result:", result);

// console.log(Math);



// incrementBtn.addEventListener("click", () => {
//   let counterValue = counter.textContent;
//   counterValue++;
//   counter.textContent = counterValue;
// });

// const apples = 47;
// const grapes = 135;

// const sumFruits = apples + grapes;
// console.log("🚀 ~ sumFruits:", sumFruits);

// const extractApplesGrapes = apples - grapes;
// console.log("🚀 ~ extractApplesGrapes:", extractApplesGrapes);

// Заміна виразу перевизначення комбінованим оператором
// let students = 100;
// students += 50;
// console.log("🚀 ~ students:", students);



// Пріоритет операторів в інструкції привласнення значення змінної result

// піднесення до степені пріорітетніше за множення і ділення

// const result = 108 + 223 - 2 * 5 ** 2;
// console.log("🚀 ~ result:", result);

// let x = 1;
// let y = 3;

// const res = y / (++x);
// console.log("🚀 ~ res:", res)

// const result = a + b;
// console.log("🚀 ~ result:", result)

// Рядки

// const firstName = "chelsy";
// const lastName = "Emerald";

// if (firstName.length === 0 || firstName === undefined) {
  
// }

// Перевірка!!!

// if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {  
// } else {
// }

// // Або!!!!

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }



// avatar.textContent = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;

// const fullName = firstName + " " + lastName;
// console.log(fullName);

// Шаблонні рядки

// const quantity = 15;
// let orderMsg = "You ordered ??? bots";

// 1-й метод - гірший - конкатенація
// orderMsg = "You ordered" + " " + quantity + " " + "bots";
// console.log("🚀 ~ orderMsg:", orderMsg)

// 2-й метод шаблонного рядка кращий
// const quantity = 15;
// const orderMsg = `You ordered ${quantity / 3} bots`;
// console.log("🚀 ~ orderMsg:", orderMsg);

// Індексація елементів
// const message = "This string is 28 chars long";
// const char = message[2];
// message[2].toUpperCase(); замінити літеру в рядку дуже складно! Цуй приклад недієвий!

// console.log("🚀 ~ char:", char);
// console.log("🚀 ~ message:", message);


// const firstPart = message.slice(0, 2);
// const uppercaseLetter = message[2].toUpperCase();
// console.log("🚀 ~ uppercaseLetter:", uppercaseLetter);
// const updMessage = firstPart + uppercaseLetter + message.slice(3);
// console.log("🚀 ~ updMessage:", updMessage.length);

// Складання фрази за допомогою шаблонних рядків

// A has B bots in stock

const companyName = "Cybergine Systems";
const repairBots = 150;
const defenceBots = 50;

const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`; 

console.log("🚀 ~ msg:", msg);