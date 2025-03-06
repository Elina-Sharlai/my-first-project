// Розгалудження

// Конструкція if працює, якщо умов для перевірки не більше 2

// console.log("Before");
// const number = prompt("Введіть число", "");
// let msg;

// if (Number(number)) {
//  if (Number(number) >= 12) {
//        msg = 'Ви вввели число, яке більше або дорівнює 12';
// } else {
// msg = 'Ви вввели число, яке менше 12';
// }
// } else {
//     msg = 'Ви ввели не число';
// }



// console.log("🚀 ~ msg:", msg);

// console.log("After");

// Конструкція if...else

// const points = 5000;

// if (points <= 500) {
//    console.log("Level 1");
// } else if (points > 500 && points <= 1500){
//    console.log("Level 2");
// }else if (points > 1500 && points <= 3500){
//     console.log("Level 3");
// }
// else {
//     console.log("Level 4");
// }

// Тернарний оператор
// const balance = Math.round(Math.random() * 100) / 100;
// console.log("🚀 ~ balance:", balance);
// let message = balance >= 0.5 ? "Positive" : "Negative";


// if (balance >= 0) {
//     message = "Positive";
// } else {
//     message = "Negative";
// }

// Блокова область видимості змінних

// const c = 15;

// if (true) {
//     const a = 5;
//     console.log("🚀 ~ a:", a);
//     console.log("🚀 ~ b:", b);
//     console.log("🚀 ~ c:", c);
// }

// if (true) {
//     const b = 10;
//     console.log("🚀 ~ a:", a);
//     console.log("🚀 ~ b:", b);
//     console.log("🚀 ~ c:", c);
// }

// Лексичне оточення функції

// function dish(dishName) {
//     return function (chief) {
//         return `${chief} now cooking ${dishName}`;
//     };
// }

// const scrambleEggs = dish("Scramble eggs");

// const finishedDish = scrambleEggs("Mango");
// console.log("🚀 ~ finishedDish:", finishedDish);

// const finishedDish2 = scrambleEggs("Poly");
// console.log("🚀 ~ finishedDish2:", finishedDish2);

// const finishedDish3 = scrambleEggs("Jordj");
// console.log("🚀 ~ finishedDish3:", finishedDish3);

// Оператор switch


// let userName;
// userName.addEventListener("change", function (event) {
//     const input = event.target;
//     const username = input.value;
//     switch (username) {
//         case "Mango":
//         case "Poly":
//         result.textContent = "ADMIN";
//             break;
//         case "Ajax":
//         result.textContent = "MANAGER";
//         break;
//     default:
//         result.textContent = "Unregister user";
// }
// });

// Логічні оператори
// Перетворення типів : логічне
// Оператор && - логічне і
// Оператор || - Або
// Оператор ! - заперечення "Не"
// При роботі з логічними операторами все приводиться до логічного (булевого) типу даних
// false:
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(""));

// true:
// console.log(Boolean(true));
// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean("hello"));
// console.log(Boolean("true"));
// console.log(Boolean([]));

// Логічний оператор "і" && може приймати тільки чотири комбінації


// const res1 = true && true;
// console.log("🚀 ~ res1:", res1);
// const res2 = true && false;
// console.log("🚀 ~ res2:", res2);
// const res3 = false && true;
// console.log("🚀 ~ res3:", res3);
// const res4 = false && false;
// console.log("🚀 ~ res4:", res4);

// console.log(5 && 4); //4
// console.log(5 && "mango"); //mango
// console.log(5 && "mango"); //0

// Логічний орератор "Або" ||
// const res1 = true || true;
// console.log("🚀 ~ res1:", res1); //true
// const res2 = true || false;
// console.log("🚀 ~ res2:", res2); //true
// const res3 = false || true;
// console.log("🚀 ~ res3:", res3); //true
// const res4 = false || false;
// console.log("🚀 ~ res4:", res4); //false

// console.log(false || 5);
// console.log(false || 0);

// Логічний оператор "Не" або "Інверсія" - "!"
//  Використовується для явного перетворення значення на булевий тип -> console.log(!!5);
// console.log(!5);
// console.log(!false);