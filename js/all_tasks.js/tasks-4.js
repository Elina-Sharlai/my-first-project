/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = !user.premium; // 1 step: true 2 step: inversion to false

// console.log(user);

const keys = Object.keys(user); // []
// console.log("keys:", keys);

for (const key of keys) {
    const message = `${key}: ${user[key]}`;
    // console.log(message);
}
    
/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salariesValue = Object.values(salaries);
let sum = 0;

if (salariesValue.length !== 0) {
    // console.log("✨ Worked");
    
    for (const value of salariesValue) {
        // sum += value;

    }
}
// console.log(sum);

// Task from collegue 

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
    for (const item of products) {
         if (item.name === productName) {
            //  console.log(item.price * item.quantity);
            //  return item.price * item.quantity;
    }
  }
    //  console.log(`"Product ${productName} not found!"`); 
}

calculateTotalPrice("Blaster");  // повертає ""Product Blaster not found!""
calculateTotalPrice("Radar");  // повертає 5200
calculateTotalPrice("Droid");  // повертає 2800
calculateTotalPrice("Grip");  // повертає 10800
calculateTotalPrice("Scanner");  // повертає 8100"


