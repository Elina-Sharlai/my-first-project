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
  },];

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


const numbers = [5, 10, 15, 20, 25, 0];
const number = numbers.find(number => number === 20);
console.log(number);

// Задачки для find - шукаємо машину за моделлю

