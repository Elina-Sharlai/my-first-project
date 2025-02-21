/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

// const numbers = [5, 10, 15, 20, 25, 0];

// const filteredNumbers = numbers.filter(number => {
//     console.log(number > 101)
//     return number > 101 || number === 0;
  
// });
// console.log(filteredNumbers);

const allCars = [{
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "e-pickup",
    amount: 1,
    price: 70000,
    onSale: true,
  },
];

/** Нехай функція filterByPrice повертає масив автомобілів, 
 * ціна яких менша ніж значення параметра threshold */

// console.table(allCars, 30000);

// const filterByPrice = (cars, threshold) => {
//     return cars.filter((car) => {
//         return car.price < threshold;
//     });
// };
//  коротший запис коду зверху
const filterByPrice = (cars, threshold) =>
  cars.filter(car => car.price < threshold);

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

const getCarsWithDiscount = cars => { 
    return cars.filter(car => {
        return car.onSale;
    })
};

// console.table(getCarsWithDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */


const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));

/**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */
// const getCarsWithTypeAndPrice = (cars, type, threshold) => {
//     let totalPrice = 0;
//     const filteredCarsByType = cars.filter(car => car.type === type);

//     const filteredCarsByPrice = filteredCarsByType.filter(car => car.price < threshold);
//     filteredCarsByPrice.forEach(car => {
//         totalPrice += car.price;
//     });
//     return totalPrice;
// }

// Ця сама функція записом ланцюжком
const getCarsWithTypeAndPrice = (cars, type, threshold) => {
  let totalPrice = 0;
  cars
    .filter(car => car.type === type)
    .filter(car => car.price < threshold)
    .forEach(car => {
      totalPrice += car.price;
    });
  const res = cars.filter(car => car.type === type && car.price < threshold);
  // console.log("getCarsWithTypeAndPrice:", res);
  return totalPrice;
};
const result = getCarsWithTypeAndPrice(allCars, "suv", 32000);
// console.log("🚀 ~ result:", result);


// const numbers = [5, 10, 15, 20, 25, 0];
// const number = numbers.find(number => number === 20);
// // console.log(number);

// Задачки для find - шукаємо машину за моделлю

// console.table(allCars);

const getCarByModel = (cars, model) => cars.find((car) => car.model === model && car.type === "e-pickup");


// console.log(getCarByModel(allCars, "F-150"));
// console.log(getCarByModel(allCars, "CX-9"));
// console.log(getCarByModel(allCars, "Cayenne"));
// console.table(getCarByModel(allCars, "F-150"));

/**
 * Шукаємо машину за типом кузова
 */
const getCarByType = (cars, type) => cars.find(car => car.type === type);

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
// console.log(getCarByType(allCars, "tank"));

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
//   { id: "player-2", name: "Poly", timePlayed: 370, points: 92, online: false },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// console.table(players);

// const isAllOnline = players.every((player) => {
//   return player.online;
// })
// console.log("🚀 ~ isAllOnline ~ isAllOnline:", isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

// const isAnyOnline = players.some((player) => {
//   return player.online;
// })
// console.log("🚀 ~ isAnyOnline ~ isAnyOnline:", isAnyOnline);

// const anyHardcorePlayers = players.some(player => {
//   return player.timePlayed > 400;
// });
// console.log("anyHardcorePlayers: ", anyHardcorePlayers);

/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number, index, array) => {
  // console.log(acc);
  // console.log(number);
  return (acc += number);
}, 0);
// console.log("🚀 ~ total ~ total:", total);

// const total = numbers.reduce((acc, number) => (acc += number), 0);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, salary) => {
  return acc += salary;
})
// console.log("🚀 ~ totalSalary:", totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// console.table(players);

const totalTimePlayed = players.reduce((acc, player) => acc += player.timePlayed, 0)
// console.log("🚀 ~ totalTimePlayed ~ totalTimePlayed:", totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

// console.table(cart);

const totalSumInCart = cart.reduce((acc, {price, quantity}) => acc += (price * quantity), 0);
console.log("🚀 ~ totalSumInCart ~ totalSumInCart:", totalSumInCart);


// const url =
//   "https://pixabay.com/api/?key=15249615-5ccf49bef51d4f01888f64cb2&q=yellow+flowers&image_type=photo&per_page=9";

// fetch(url)
//   .then(resp => {
//     return resp.json();
//   })
//   .then(data => {
//     const images = data.hits;
//     const markup = images.reduce((str, image) => {
// return str += `<li class="item">
//         <img
//         class="gallery-img"
//         src="${image.previewURL}"
//         alt="${image.tags}"
//         width="${image.previewWidth}"
//         height="${image.previewHeight}"
//         />
        
//       </li>`
//     }, '')
    //  document.querySelector(".gallery").insertAdjacentHTML("beforeend", markup);
    
  // });

