/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */
function foo() {
//   console.log("foo -> this", this);
}

// foo();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: "Mango",
  showTag() {
    // console.log("showTag -> this", this);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
}

// showTag();

const mango = {
  tag: "Mango",
};

mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: "Poly",
  showTag() {
    // console.log("showTag -> this", this);
    // console.log("showTag -> this.tag", this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

function invokeAction(action) {
  // console.log(action);
  action();
}

// invokeAction(jacob.showTag);

/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// function print(x, y) {
  // x = 100
  // y = 200
  // arguments = [100, 200]
  // this = objA
  // return undefind
// }
// print.x = 100;
// print(100, 200);
// console.dir(print);

const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */

const changeColor = function (color) {
  // this = hat
  // console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

changeColor.call(hat, "orange");
// console.log(hat);

const sweater = {
  color: "green",
};

changeColor.call(sweater, "blue");
// console.log(sweater);


/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */


const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
// console.log(hat);

changeSweaterColor("red");
// console.log(sweater);

changeSweaterColor("indigo");
// console.log(sweater);

/**
 * -------------------------------
 */
const counter = {
  value: 0,
  increment(value) {
    // console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    // console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  name: "Barsik",
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
  }
  // console.log(dog[key]); // "name"
}

const keys = Object.keys(dog);
// console.log("keys:", keys);

/**
 * ----------------------------------------
 */
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);