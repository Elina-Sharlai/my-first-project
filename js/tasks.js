// const hasAccess = sub === "pro" || sub === "vip";
// console.log("🚀 ~ hasAccess:", hasAccess);

// 7. Напиши скрипт, який перевіряє можливість чата з користувачем
// Для цього користувач має бути
// * Другом
// * Онлайн
// * Без режима не турбувати
// const isOnline = true;
// const isFriend = true;
// const isDnd = false; // режим не турбувати вимкнено

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("🚀 ~ canOpenChat:", canOpenChat);

/**8. Напиши скрипт, який перевіряє, чи закінчується значення змінної link символом /.
 * Якщо ні, додай до кінця змінної link цей символ.
 * Використовуй конструкцію if...else.
 */
// let link = "https://my-site.com/about";
// if (link.endsWith("/")) {
//   console.log("🚀 ~ link:", link);
// } else {
//   console.log("🚀 ~ link + " / ":", link + "/");
// }

/**9. Форматування посилання (includes та логічне "І")
 * Напиши скрипт, який перевіряє, чи закінчується значення змінної url символом /.
 * Якщо ні, додай до кінця значення url цей символ, але тільки в тому випадку, якщо в url є 
 * підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = "https://somesite.com/about";

// if (url.includes("my-site") && !url.endsWith("/")) {
//  console.log(url + "/");
  
// } else {
//  console.log(url);
// };

/**Пошук у рядку методом includes()
 */
// const blackListedWord1 = "spam";
// const blackListedWord2 = "sale";

// const string1 =
//     "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = "#fatlivesmatter advertising campaign";

// function checkSpamWord(text, spamWord1, spamWord2) {
//     const hasSpamWord =
//         (text.toLowerCase().includes(spamWord1.toLowerCase()) ||
//         text.toLowerCase().includes(spamWord2.toLowerCase()));
//     if (hasSpamWord)
//        {
//     console.log("Текст містить заборонені слова❌");
//        } else {
//      console.log("Текст не містить заборонені слова✅");
// }
// };
// checkSpamWord(string1, blackListedWord1, blackListedWord2);
// checkSpamWord(string2, blackListedWord1, blackListedWord2);
// checkSpamWord(string3, blackListedWord1, blackListedWord2);


// let a = 10;
// function catculateEvenTotal(number) {
//     debugger;
//     let sum = 0;
//      for (let i = 1; i <= number; i++) {
//          sum += i;
        
//      }
//     return sum;
//     }
// const res = catculateEvenTotal(a);
// console.log("🚀 ~ res:", res);


/**10. Функція catculateEvenTotal(number) приймає ціле число (параметр number)
 * Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці
 * до цього числа включно. Парні числа це ті, що можна поділити на 2 без остачі 
 * (як це зробити розглядалося у темі Арифметичні операції у модулі 1).
 * Наприклад, якщо number дорівнює 6, то сума це 2+4+6, тобто 12
 */

// function catculateEvenTotal(number) {
//     let sum = 0;
//     for (let i = 2; i <= number; i++) {
//         if (i % 2 === 0) {
//             sum += i; 
//         } 
        
//     }
//     return sum;
// }

// const res1 = catculateEvenTotal(20);
// console.log("🚀 ~ res1:", res1);

// або так записати цю фунцію:
// function catculateEvenTotal(number) {
//     let sum = 2;
//     for (let i = 4; i <= number; i += 2) {
//         if (i % 2 !== 0) continue; {
//             sum += i; 
//         } 
        
//     }
//     return sum;
// }

// const res1 = catculateEvenTotal(20);
// console.log("🚀 ~ res1:", res1);
