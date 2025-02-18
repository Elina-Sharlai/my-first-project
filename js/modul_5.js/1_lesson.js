/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function registerGuest(name, callback) {
  // name = "Mango"
  // callback = function (guestName) { console.log(`Ласкаво просимо ${guestName}`) }
  callback(name);
}

registerGuest("Mango", function (guestName) {
//   console.log(`Ласкаво просимо ${guestName}`);
});

registerGuest("Mango", function (guestName) {
//   console.log(`Чи потрібно прибрати ваш номер ${guestName}?`);
});

registerGuest("Poly", function (guestName) {
//   console.log(`Ласкаво просимо постійних гостей: ${guestName}`);
});

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   // a = 2
//   // b = 3
//   const result = callback(a, b);
    // console.log("calc:", result);
      // 💩💩💩
  // if (operator === "**") {
  //   base ** power;
  // } else if (operator === "%") {
  //   numerator % denominator;
  // } else if (operator === "*") {
  //   leftOperand * rightOperand;
  // } else if (operator === "/") {
  //   leftOperand / rightOperand;
  // }
// }

// callback-hell - нечитабельний код

// calc(2, 3, pow);

// calc(10, 8, rest);

// calc(1, 10, minus);

// functions
function pow(base, power) {
  return base ** power;
}
function rest(numerator, denominator) {
  return numerator % denominator;
}
function minus(leftOperand, rightOperand) {
  return leftOperand - rightOperand;
}

const res1 = pow(4, 2);
// console.log(res1);


/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву.
 * Функція each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  array = [64, 49, 36, 25, 16];
  // callback = function (value) {console.log("res2  res2:", res2);return value * 2;};
  const newArray = [];
  for (const item of array) {
    const result = callback(item);
    newArray.push(result);
  }
  return newArray;
}

const res2 = each([64, 49, 36, 25, 16], function (value) {
  return value * 2;
});
// console.log("res2:", res2);

const res3 = each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});
// console.log("res3:", res3);

const res4 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
// console.log("res4:", res4);

const res5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
// console.log("res5 :", res5);

const res6 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
// console.log("res6:", res6);

// Logger from Kahoot

function foo(callback) {
  callback(10);
}

function logger(a, b) {
//   console.log(a + b);
}

// foo(logger);

/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

function add(a, b, c) {
  return a + b + c;
}

const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

function fnA() {
  return {
    a: 5,
  };
}

// console.log(fnA());

const arrowFnA = a => ({ a });

// console.log(arrowFnA(5));


/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

// calc(2, 3, (x, y) => x + y);

// calc(10, 8, (x, y) => x - y);

/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;
[].forEach(() => { })
 
numbers.forEach((number, index, array) => total += number);
// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// function logItems(items) {
//     items.forEach((item, index) =>
//         console.log(`${index + 1} - ${item}`));
        
// }

// logItems(["Mango", "Poly", "Ajax"]);
// console.log("\n");
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// console.log(`${nameList[i]}: ${phoneList[i]}`);
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 * Порахувати середнє значення
 */
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// function calculateAverage(...args) {
//     let total = 0;
//  args.forEach((element) => (total += element))
//     return total / args.length;
// }





// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 2, price: 22455 },
  { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

const getModels = cars => {
    const models = cars.map(item => item.model);
    return models;
        
        
    
} 

// console.table(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount = (cars, discount) =>
    cars.map(item => ({ ...item, price: item.price * (1 - discount) }));



// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

/**Збільшуємо кількість гравця за id */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
// console.table(players);

const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//     if (player.id === playerIdToUpdate) {
//         return { ...player, timePlayed: player.timePlayed + 100 };
//     }
//     return { ...player };
// });
 
// Скорочуємо функцію записом тернарного оператора

const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : { ...player }
);

// console.table(updatedPlayers);
// console.table(players);


/**
 * Метод flatMap
 */

const tweets = [
  {
    id: "000",
    likes: 5,
    tags: ["js", "nodejs"],
  },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = tweets.flatMap((tweet, index, array) => {
  return tweet.tags;
});
// console.log(tags);

const updatedTweets = tweets.map((tweet, index, array) => {
  // tweet.likes += 1
  return {
    ...tweet,
    likes: tweet.likes + 1,
    tags: tweet.tags.slice(0, -1),
  };
});
// console.log("updatedTweets  updatedTweets:", updatedTweets);
// console.log("ORIGINAL:", tweets);
const url =
  "https://pixabay.com/api/?key=15249615-5ccf49bef51d4f01888f64cb2&q=yellow+flowers&image_type=photo";

fetch(url)
  .then(resp => {
    return resp.json();
  })
  .then(data => {
    const tags = data.hits[0].tags.split(",");
    // console.log("tags:", tags);
  });

// "Як використовуються об'єкти і їх методи наприклад, при додаванні картки товару на сторінку.
//    Для цього зчитується інформація з бази даних або json,
    // отримуючи масив об'єктів і кожен об'єкт передається у шаблонний об'єкт з методами,
    //  у якому один з методів додає на сторінку елемент картки чи це робиться якось по іншому ?
// Ось грубий приклад того, що маю на увазі:

// const readObject = JSON.parse(somejsonData); // Зчитуємо дані з json або бази даних і отримуємо масив об'єктів або об'єкт з вкладеними об'єктами

// const templateObj = {
//   val1, // Заголовок, наприклад
//   val2, // ціна
//   val3, // опис
//   setValues(readObjectItem) {
//     const { val1, val2, val3 } = readObjectItem;
//     this.val1 = val1;
//     this.val2 = val2;
//     this.val3 = val3;
//     this.addItemToPage();
//   },
//   addItemToPage() { 
//     //Код, який додає елементи на сторінку
//   }
// };

// перебираємо елементи
// readObject.forEach(element => {
//   templateObj.setValues(element);
// });

// "Здебільшого для того, щоб відрендерити елементи на сторінці використовується функціональний підхід програмування,
//  в якому є набір функцій, кожна з яких виконує чітко визначене завдання.Наприклад:

// getCardsData() { ... }
// createCardsMarkup() { ... }
// renderCards() { ... }

// Якщо ж розглядати цю задачу через підхід ООП,
    // тоді ми об'єднуємо функції та дані в об'єкт, який має стан(дані) та методи для роботи з ним.

class CardsRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.cards = [];
  }

//   fetchData() { ... }
//   createMarkup() { ... }
//   render() { ... }
}


// Поясніть, як у цьому випадку працює filter.

const students = [];

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // [""biology"", ""science"", ""literature"", ""mathematics"", ""physics""]





