//**1. Перевірте, що першим символом є літера А
// Якщо так, виведіть "так", якщо ні, виведіть "ні" */
// const str = "absde";
// if (str[0]==='a') {
//     console.log('так');
    
// } else {
//     console.log('ні');
    
// }

// console.log(str.startsWith('a') ? 'так' : 'ні');

/**2. Написати скрипт, який перевіряє, чи введене число через ... потрапляє в діапазон
// від 55 до 99 включно
// якщо так, вивести в консоль "Число потрапляє в діапазон"
// Якщо ні, вивести "Число не потрапляє в діапазон" */
// const num = 55;
// if (num >=55 && num <=99 ) {
//     console.log("Число потрапляє в діапазон");
// } else {
//     console.log("Число не потрапляє в діапазон");
// }
// console.log(num >=55 && num <=99 ? 'Число потрапляє в діапазон' : 'Число не потрапляє в діапазон');

/**3. Є три вікові групи - діти (0-16), дорослі (17-60),  пенсіонери (61-100)
 * Визнач, до якої вікової групи належить Максим, якщо його вік 55 років. Назву групи вивести на екран.
*/
// const ageMaksim = 101;
// if (ageMaksim >=0 && ageMaksim <=16) {
//    console.log("діти");
    
// }
// else if (ageMaksim >=17 && ageMaksim <=60) {
//    console.log("дорослі");
    
// }
// else if (ageMaksim >=61 && ageMaksim <=100){
//     console.log("пенсіонери");
// }
// else {
//     console.log("Ти скоро народишся знов -:)");
    
// }

/**4. Напишіть у консоль числа від max до min за спаданням
 * Додати усі парні числа від min до max.
*/
// const min = 110;
// const max = 120;
// let sum =0;
// for (let i = max; i > min; i--) {
//    console.log(i);
//     if (i % 2 !== 0) {
//     continue;
//     }
//     sum += i;
//     console.log("Парні числа", i);
// }
// console.log(sum);

/**5. Запитай користувача у модальному вікні, який із напоїв він бажає придбати - 
 * "Чай", "Каву", або "Сік".
 * Залежно від напою оголоси суму до сплати, використовуй switch.
*/
// const drink = prompt("Оберіть напій");
// function orderDrink(drink) {
//     let price = 0;
//     switch (drink) {
//         case "Кава":
//             price = 60;
//             break
//         case "Чай":
//             price = 30;
//             break
//         case "Сік":
//             price = 50;
//             break
//         default:
//             alert("Doesn't exist")
//             break
//     }
//     return alert(`sum: ${price}грн`)
    
// }
// orderDrink(drink);

/** Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */
// const values = "8 11";

// function calculateSquare(data) {
//     if (typeof data !== "string")
    
//     {
//         console.warn("Wrong Data Type");
//         return;
//     }
//     const squareParams = data.split(" ");
//     console.log("🚀 ~ calculateSquare ~ squareParams:", squareParams);
//     const square = squareParams[0] * squareParams[1];
//     console.log("🚀 ~ calculateSquare ~ square:", square);
    
// }

// calculateSquare(values);

/** Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер елемента : значення елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍇", "🍊", "🍌", "🍍", "🥝"];
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(`${i + 1} : ${element}`);
    
    
// }

/** Напиши скрипт, який підраховує суму всіх чисел у масиві */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// function calculateEvenSum(numbers) {
//     let total = 0;
//  for (const number of numbers) {
//      console.log("🚀 ~ calculateEvenSum ~ number:", number);
//     if (number % 2 ===0 ) {
//         total += number;
//     }
//     }
//     return total;
// }

// const res1 = calculateEvenSum(numbers);
// console.log("🚀 ~ res1:", res1);

/** Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,розділені комами.
 * Порядковий номер імен та телефонів у рядках вказують на відповідність.
 * Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "987456321,321456987,753159654,321789654";

// function showContacts(names, phones) {
//     let title = ` # |  Contact   |   Phone   \n`;
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for (let index = 0; index < namesArr.length; index += 1) {
//         const name = namesArr[index];
//         const phone = phonesArr[index];
//         title += `📱 ${index + 1} | ${name} | ${phone} \n`;
//     }
//     return title;
// }
// const res2 = showContacts(names, phones);
// console.table("🚀 ~ res2:", res2);

/** Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього
 * Результуючий рядок не повинен починатися або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the future";
// function showWords(string) {
//     const arr = string.split(" ")
//     return arr.slice(1, arr.length - 1).join (" ");
// }

// const res3 = showWords(string);
// console.log("🚀 ~ res3:", res3);

/** Напиши скрипт найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. 
 * Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;


function findMinNum(numbers) {
    let minNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const currentNnumber = numbers[i];
       
        if (currentNnumber < minNum) {
            minNum = currentNnumber;
        }
    }
    return minNum;
}

min = findMinNum(values);
console.log("🚀 ~ min:", min);

//  Або таке рішення задачі - розпилення масиву на елементи оператором spread

console.log("🚀 ~ Math.min(...values):", Math.min(...values));

/** */

function getCommonElements(array1, array2) {
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
        
    }
    console.log(newArray);
}

getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);