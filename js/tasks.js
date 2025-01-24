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
const blackListedWord1 = "spam";
const blackListedWord2 = "sale";

const string1 =
    "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

function checkSpamWord(text, spamWord1, spamWord2) {
    const hasSpamWord =
        (text.toLowerCase().includes(spamWord1.toLowerCase()) ||
        text.toLowerCase().includes(spamWord2.toLowerCase()));
    if (hasSpamWord) 
       {
    console.log("Текст містить заборонені слова❌");
       } else {
     console.log("Текст не містить заборонені слова✅");   
}
};
checkSpamWord(string1, blackListedWord1, blackListedWord2);
checkSpamWord(string2, blackListedWord1, blackListedWord2);
checkSpamWord(string3, blackListedWord1, blackListedWord2);
