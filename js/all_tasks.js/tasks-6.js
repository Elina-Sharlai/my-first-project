/**
 * -------------------------
 */
const book = {
  title: "React for beginners",
  showThis() {
    console.log("showThis -> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};

// book.showThis(); // Який this ??? {title: 'React for beginners', showThis: ƒ, showTitle: ƒ}

const outerShowThis = book.showThis;
// outerShowThis(); // Який this ??? showThis -> this undefined

const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ??? Mistake

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
const chopShop = {
    stones: [
        { name: "Emerald", price: 1300, quantity: 4 },
        { name: "Diamond", price: 2700, quantity: 3 },
        { name: "Sapphire", price: 1400, quantity: 7 },
        { name: "Ruby", price: 800, quantity: 2 },
    ],
    calcTotalPrice(stoneName) {
        const findStone = this.stones.find((stone) => {
            return stone.name === stoneName;
        })
        if (!findStone) {
            return "Sorry, your stone doesn't exist in our store";
        }
        return findStone.price * findStone.quantity;
        
    }
}
//   calcTotalPrice(stoneName) {
//     const findStone = this.stones.find(stone => {
//       return stone.name === stoneName;
//     });

//     if (!findStone) {
//       return "Sorry. Your stone doesnt exist is store";
//     }

//     return findStone.price * findStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond"));/ // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// console.log(chopShop.calcTotalPrice("Sand")); // Sorry, your stone doesn't exist in our store

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву.
// Очікуваний результат [1, 4, 9, 14, 25].

const array = [1, 2, 3, 4, 5];
const changeArr = (arr) => arr.map(number => Math.pow(number, 2));
  // return arr.map(number => number ** 2)
  
// console.log(changeArr(array));

// console.log('\n');
 
/** Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}.
 *   Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві.
 *  Очікуваний результат [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const flatArray = (arr) => {
  return arr.flatMap(item => item.values);
}
// console.log(flatArray(data));

/**Дано масив об'єктів. Перевірте, чи є хоча б один об'єкт, менше 20 років. Очікуваний результат true. */

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const lessAge = arr => arr.some(item => item.age < 20);

// console.log(lessAge(people));

/**Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним */

const arr = [2, 4, 6, 8, 10];
const evenNumbers = arr => arr.every(number => number % 2 === 0);

// console.log(evenNumbers(arr));

/** Знайдіть перше непарне число */
const numbers = [2, 1, 6, 8, 9, 10, 12];
const firstOdd = arr => arr.find(number => number % 2 !== 0);

// console.log(firstOdd(numbers));

//** Відсортуйте масив чисел у порядку зростання [4, 2, 5, 1, 3] Очікуваний результат [1, 2, 3, 4, 5] */

const normal = [4, 2, 5, 1, 3];
const raiser = arr => arr.toSorted((a, b) => a - b);
// console.log(raiser(normal));

/** Відсортуйте масив рядків у порядку ["banana", "orange", "apple", "pear"] алфавіту.  */
const fruits = ["banana", "orange", "apple", "pear"];

const alphabet = arr => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(alphabet(fruits));

/**Дано масив об'єктів. Створіть новий масив, в якому вік об'єктів більше 20 років.*/

const peopleNew = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const peopleSorted = arr => arr.filter(item => item.age > 20);
// console.log(peopleSorted(peopleNew));

/** Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод для обчислення елементів масиву */

const num = [1, 2, 3, 4, 5];
const sum = arr => arr.reduce((acc, item) => acc += item, 0);
// console.log(sum(num));

/** Створи клас для калькулятора, який має такі методи:
 * метод number, який набуває початкового значення для наступних операцій
 * метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

class Calculator {
  constructor() {
    this.results = 0;
  }
  number(num) {
    this.results = num;
    return this;
  }
  getResult(){
    return this.results;
  }
  add(num) {
    this.results += num;
    return this;
  }
  substruct(num) {
    this.results -= num;
    return this;
  }
  divide(num) {
    this.results /= num;
    return this;

  }
  multiply(num) {
      this.results *= num;
    return this;  
  }
};

const calculator = new Calculator();
// console.log(calculator.getResult());

const res = calculator.number(10).add(5).multiply(3).substruct(5).divide(8).getResult();
// console.log("🚀 ~ res:", res);

/**Напиши клас Client, який створює об'єкт з властивостями login email
 * оголоси приватні властивості #login #email, доступ до них зроби через геттер сетер
 */

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get getlogin() {
    return this.#login;
  }
  set changelogin(newLogin) {
    return this.#login = newLogin;
  }
};

const client = new Client("Elina", "elina@gmail.com");
client.changelogin = "Anatolii";
// console.log("🚀 ~ client:", client.getlogin)

class Car {
  constructor(name, engine, tipe) {
    this.name = name;
    this.engine = engine;
    this.tipe = tipe;
  }
  getInfo() {
    return { name: this.name, engine: this.engine, tipe: this.tipe };
  }
  
};
const car = new Car("Hunday", "petrol", "crossower");
console.log("🚀 ~ car:", car.getInfo());

class Example extends Car {
  constructor(color, year, name, engine, tipe) {
    super(name, engine, tipe);
    this.color = color;
    this.year = year;
    
  }
};

const example = new Example("green", "2022", "Hunday", "petrol", "crossower");
console.log("🚀 ~ example:", example);
















