/**
 * Псевдомасив arguments і Array.from()
 * Параметри за замовчуванням
 * Функціональний вираз
 */

function showArguments() {
  // a = undefined
  // b = undefined
  // arguments = []
  console.log(arguments);
  const args = Array.from(arguments);
  // const args = [...arguments];
  console.log("args:", args);

  // return undefined
}

// showArguments(1, 2, 3);
// showArguments(1, 2, 3, 4, 5);
// showArguments(1, 2, 3, 4, 5, 6, 7);

// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }


// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// function checkAge(age) {
//    if (age >= 18) {
//     return "You are an adult";
//   }
// }

// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));

// let room = 1;

// function printMessage(guestName, hotelName = "Peach Hotel", roomNumber = room) {
//   const message = `Room number ${roomNumber} in hotel ${hotelName} reserved by ${guestName}`;

//   room += 1;
//   return message;
// }

// const result = printMessage("Ajax");
// console.log("🚀 ~ result:", result);
// const result2 = printMessage("Poly", "Strawberry Hotel");
// console.log("🚀 ~ result2:", result2);

// function createLink(domen, protocol = "https://") {
//     const link = protocol + domen + "/";
//     return link;

// }

// const res1 = createLink(`goit.ua`);

// console.log("🚀 ~ res1:", res1);

/**
 * Перепиши функцію add для складання довільної
 * кількості аргументів (чисел) на function expression
 */

// HOSTING - процес підняття функції
// Функція нижче має назву function declaration
// function add() {
//     const args = Array.from(arguments);
//     let total = 0;

// for (const arg of args) {
//     total  += arg;    
//     }
//     return total;
// }



// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// Функція зверху, записана у вигляді function expression - анонімна самовикликаюча функція
// IIFE - Immediately Invoked Function Expression

(function () {
  console.log("Worked 1");
})();
(function () {
  console.log("Worked 2");
})();
(function () {
  console.log("Worked 3");
})();
(function () {
  console.log("Worked 4");
})();

const fn1 = function () {
    console.log("Unonimous function worked ✨");
    
 }

fn1();

// ============================== //
// Оголошення всіх змінних та оперцій над ними
const a = 1;
const b = 2;
const c = 3;

const d = multiply(a, b, c);

// ============================== //
// Опис самих процедур над змінними
function multiply(a, b, c) {
  return a + b + c;
}
function divide(a, b, c) {
  return a + b + c;
}
function pow(base, pow) {
  return base ^ pow;
}

// ============================== //
// Оголошення функцій на початку файлу з кодом
const multiply1 = function (a, b, c) {
  return a + b + c;
};
const divide1 = function (a, b, c) {
  return a + b + c;
};
const pow1 = function (base, pow) {
  return base ** pow;
};

// ============================== //
// Оголошення  змінних та оперцій над ними
const a1 = multiply1(1, 2, 3);