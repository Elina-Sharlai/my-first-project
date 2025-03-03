/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */


// const globalValue = 10;

// console.log(userName); // Global scope

// console.log(globalValue); // 10;

// function foo() {
//   const a = 20;
//   console.log(a); // 20;
//   console.log(globalValue); // 10;


//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20;
//     console.log(globalValue); // 10;


//     if (i === 2) {
//       console.log(a); // 20;
//       console.log(globalValue); // 10;
 
//     }
//   }
// }

// foo();

// debugger;

// ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

/**
 * - Стек викликів
 * - Порядок виконання
 */
// debugger;
// function fnA() {
//   console.log("fnA execution");
//   fnB();
// }

// function fnB() {
//   console.log("fnB execution");
//   fnC();
// }

// function fnC() {
//   console.log("fnC execution");
// }

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");

// console.log("After fnB execution");

// console.log("Before fnC execution");

// console.log("After fnC execution");

/** Рекурсивна функція, що підносить числа до степеню */

// Recursion

// function pow(a, b) {
//    if (b === 1) {
//        return a;
//     }
//     return a * pow(a, b - 1); 
// }
// pow(2, 4);

function powCycle(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

console.log(powCycle(2, 4));

// [
//   {
//     post1: {
//       address: "Poltava 1",
//       square: 100,
//     },
//     post2: {
//       address: "Poltava 2",
//       square: 200,
//     },
//     post3: {
//       address: "Poltava 3",
//       square: 300,
//     },
//     post4: {
//       address: "Poltava 4",
//       square: 400,
//     },
//   },
//   {
//     department1: {
//       workers: 10,
//       salary: 10_000,
//     },
//     department2: {
//       workers: 20,
//       salary: 20_000,
//     },
//     department3: {
//       workers: 30,
//       salary: 30_000,
//     },
//   },
// ];
