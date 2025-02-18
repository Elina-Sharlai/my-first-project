/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = !user.premium; // 1 step: true 2 step: inversion to false

// console.log(user);

// const keys = Object.keys(user); // []
// console.log("keys:", keys);

// for (const key of keys) {
//     const message = `${key}: ${user[key]}`;
    // console.log(message);
// }
    
/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesValue = Object.values(salaries);
// let sum = 0;

// if (salariesValue.length !== 0) {
    // console.log("✨ Worked");
    
//     for (const value of salariesValue) {
//         sum += value;

//     }
// }
// console.log(sum);

// Task from collegue 

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//     for (const item of products) {
//          if (item.name === productName) {
            //  console.log(item.price * item.quantity);
            //  return item.price * item.quantity;
    // }
  // }
    //  console.log(`"Product ${productName} not found!"`); 
// }

// calculateTotalPrice("Blaster");  // повертає ""Product Blaster not found!""
// calculateTotalPrice("Radar");  // повертає 5200
// calculateTotalPrice("Droid");  // повертає 2800
// calculateTotalPrice("Grip");  // повертає 10800
// calculateTotalPrice("Scanner");  // повертає 8100"

/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

// const account = {
  // Поточний баланс рахунку
  // balance: 0,

  // Історія транзакцій
  // transactions: [],

  /**
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  // createTransaction(amount, type) {},

  /**
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  // deposit(amount) {},

  /**
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  // withdraw(amount) {},

  /**
   * Метод повертає поточний баланс
   */
  // getBalance() {},

  /**
   * Метод шукає та повертає об'єкт транзакції по id
   */
  // getTransactionDetails(id) {},

  /**
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
// getTransactionTotal(type) {},
// };

/**напиши скрипт для об'єкта user, послідовно:
 * 1 додати поле mood зі зніченням happy
 * 2 замініть hobby на "skydiving"
 * 3 замініть premium на false
 * 4 виводить вміст об'єкта users у форматі ключ:
 * значення використовуючи Object.keys() i for...of
 */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const item of Object.keys(user)) {
//   console.log((`${item}: ${user[item]}`));

// };

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
//  */
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };



// function calcSalaries(obj) {
//     let total = 0;
//   const salariesCollection = Object.values(obj);
//   for (const sum of salariesCollection) {
//     total += sum;
//   }
//   return total;
// }
// console.log("🚀 ~ calcSalaries ~ calcSalaries(salaries):", calcSalaries(salaries));

/**створіть об'єкт calculator із трома методами
 * read(a, b) - приймає два аргументи та зберігає їх
 * як властивості об'єкта
 * sum() повертає суму збережених значень 
 * multiply() перемножує збережені значення та повертає результат
 */
// const calculator = {
//   read(a, b) {
//     this.val1 = a;
//     this.val2 = b;
//   },
//   sum() {
//     return this.val1 + this.val2;
//   },
//   multiply() {
//     return this.val1 * this.val2;
//   },
// };


// calculator.read(2, 5);
// console.dir(calculator);
// console.log(calculator.sum());
// console.log(calculator.multiply());

/**Угрупування об'єктів за якістю
 * створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості:
 * ім'я, вік та курс. використовуйте цикл for...of, щоб згрупувати студентів за курсами.
 * Результатом буде об'єкт, де ключами будуть назви курсів, а значення - масивт об'єктів студентів, 
 * що належать до відповідного курсу.
 * Очікуваний результат:
 * const groupedStudents = {
 * Java:[
 * {name: "Alisa", age: 20, cource: "Java"},
 * {name: "Karl", }
 * ]
 * }
 */
// const students = [
//   { name: "Alisa", age: 20, cource: "Java" },
//   { name: "Bob", age: 22, cource: "Python" },
//   { name: "Karl", age: 21, cource: "Java" },
//   { name: "Djon", age: 23, cource: "JavaScript" },
// ];

// const groupedStudents = {};

// for (const student of students) {
//   if (!groupedStudents[student.cource]) {
//     groupedStudents[student.cource] = [];
//   }
//   groupedStudents[student.cource].push(student);
// }
// console.log(groupedStudents);

/**Напишіть функцію updateObject, яка приймає об'єкт, робить копію та повертає новий об'єкт без вказаного параметра
 * Очікуваний результат updateObject({a: 1, b: 2, c: 3}, "b") {a: 1, c: 3}
 */
// const obj = { a: 1, b: 2, c: 3 };
// const updateObject = (objCopy, key) => {
//   const copyObject = { ...objCopy };
//   console.log(objCopy, key);
  
//   delete copyObject[key];
//     return copyObject;
// }
// console.log(updateObject(obj, "b"));
// console.log(obj);

/**Зробіть знижку 20% на всі фрукти у масиві. 
 * Надайте 1[] для кожного продукту
 */
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];


// function calculateTotalPrice(fruitArray) {
//   const massFruits = [];

//   for (const fruit of fruitArray) {
//     const copyFruit = { ...fruit };
//     copyFruit.price *= 0.8;
//     copyFruit.id = `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
//     massFruits.push(copyFruit);

//   }
//   return massFruits;
// }

// Коротший запис функції

function calculateTotalPrice(fruitArray) {
  const massFruits = [];

  for (const fruit of fruitArray) {
    const id =  `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    massFruits.push({ ...fruit, price: fruit.price * 0.8, id});

  }
  return massFruits;
}


// console.log(calculateTotalPrice(fruits));

//   "Як масив масивів перетворити на масив об'єктів. Наприклад:
// 1. Створюємо новий масив
// 2. Перебираємо вихідний масив в циклі
// 3. На кожній ітерації циклу беремо значення із вкладеного масиву 1 та вкладеного масиву 2 за індексом
// 4. Створюємо обʼєкт із властивостями
    //  { columnName_0: someValue_0 }
// 5. Пушимо створений обʼєкт в новий масив

// П.С.Має бути виконана умова рівності довжин вкладених масивів,
// в інакшому випадку потрібно буде робити додаткові перевірки,
    // щоб уникнути не правильних значень в середині обʼєктів"
https://stackblitz.com/edit/vitejs-vite-cyhunmtq?file=src%2Fmain.js
/**
 * Маємо набір даних, який представлено у вигляді матриці
 * Щоб перетворити масив масивів у масив об'єктів можна використати методи map та reduce
 */


// const data1 = [
//   ['columnName_0', 'columnName_1', 'columnName_2'], // Імена стовпців
//   ['someValue_0', 'someValue_1', 'someValue_2'], // Значення рядків
//   ['otherValue_0', 'otherValue_1', 'otherValue_2'],
// ];

// const [headers, ...rows] = data1; // Розділяємо заголовки та рядки

// const res1 = rows.map((row) =>
//   Object.fromEntries(headers.map((key, index) => [key, row[index]]))
// );

// console.log(res1);

/**
 * Маємо набір даних, який представлено у вигляді обʼєкта
 * з властивостями columns та values
 * Для перетворення цієї структури в масив об'єктів
 * можна використати map() та Object.fromEntries()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 */



// const data2 = [
//   {
//     columns: ['columnName_0', 'columnName_1', 'columnName_2'],
//     values: [
//       ['someValue_0', 'someValue_1', 'someValue_2'],
//       ['otherValue_0', 'otherValue_1', 'otherValue_2'],
//     ],
//   },
// ];


// const { columns, values } = data2[0];
// const res2 = values.map((row) =>
//   Object.fromEntries(columns.map((key, index) => [key, row[index]]))
// );


