/**
 * Перепиши функцію add для складання довільної
 * кількості аргументів (чисел) на function expression
 */

// const add = function () {
//   const args = Array.from(arguments);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//     const args = Array.from(arguments);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5;
// console.log(calAverage(14, 8, 2)); // 8;
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2;

/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */


// function logItems(items) {
//    for (let i = 0; i < items.length; i += 1) {
//     const item = items[i];
//     console.log(`${i+1} - ${item}`);
//        }
// }

// Інший варіант вирішення задачі:

// function logItems() {
//     const args = Array.from(arguments[0]);
//     for (let i = 0; i < args.length; i += 1) {
//     const item = args[i];
//     console.log(`${i+1} - ${item}`);
//        }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {

//     const namesArr = names.split(',');
//     const phonesArr = phones.split(',');

//     for (let i = 0; i < names.length; i++) {

//         const name = namesArr[i];
//         const phone = phonesArr[i];

//         console.log(`Contact ${name}\nPhone number: ${phone}`);
//             }
    
// }

// printInfo("Jacob,William,Solomon,Artemis","89001234567,89001112233,890055566377,890055566300");

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// console.log("hours", );
// console.log("minutes", 70 % 60);

// function formatTime(minutes) {
//     const hours = Math.trunc(minutes / 60);
//     minutes = minutes % 60;
    // console.log(hours, minutes);
    
//     return `${normalizeDigits(hours)}:${normalizeDigits(minutes)}`;

// }

// function normalizeDigits(number) {
//     return String(number).padStart(2, "0");
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(360)); // "06:00"

// "Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок ""<item> is available to order!"", де item - це назва товара, якщо товар було знайдено
// рядок ""Sorry! We are out of stock!"", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, 
// тобто наприклад ""plum"" і ""pLuM"" мають бути знайдені у масиві[""apple"", ""plum"", ""pear""]. 

function checkStorage(storage, item) {
    const lowerCaseItem = item.toLowerCase();
    
    for (const item of storage) {
      
        if (item.toLowerCase() === lowerCaseItem) {
            return `${lowerCaseItem} is available to order!`;
        }
        
    }
return "Sorry! We are out of stock!";
}
    

    const res1 = checkStorage(["apple", "plum", "pear"], "pLuM");
console.log("🚀 ~ res1:", res1);

    

    // Інший варіант вирішення задачі

//   if (storage.map(product => product.toLowerCase()).includes(lowerCaseItem)) {
//     return `${lowerCaseItem} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }







