// Методи рядків
/**
 * - slice
 * - toLowerCase/toUpperCase
 * - includes
 * - startsWith/endsWith
 * - indexOf
 * - trim
 */
 
const userName = "Jakob Mercer";

userName.length
// console.log("🚀 ~ userName.length:", userName.length);

const firstUserNameChar = userName[0];
// console.log("🚀 ~ firstUserNameChar:", firstUserNameChar);

const lastUserNameChar = userName[userName.length - 1];
// console.log("🚀 ~ lastUserNameChar:", lastUserNameChar);

// * - slice

// const res = userName.slice();
// // console.log("🚀 ~ res:", res);

// // * - indexOf

// const indexOfSpace = res.indexOf(" ");
// // console.log("🚀 ~ indexOfSpace:", indexOfSpace);

// const firstPhrase = res.slice(0, indexOfSpace);
// // console.log("🚀 ~ firstPhrase:", firstPhrase);
// const lastPhrase = res.slice(indexOfSpace + 1);
// // console.log("🚀 ~ lastPhrase:", lastPhrase);
// const fullPhrase = `${firstPhrase}${lastPhrase}`;
// // console.log("🚀 ~ fullPhrase:", fullPhrase);

// const withoutSpace = res.replace(" ", "");
// // console.log("🚀 ~ withoutSpace:", withoutSpace);

// // * - toLowerCase/toUpperCase
// const allLowerCaseLetter = userName.toLocaleLowerCase();
// // console.log("🚀 ~ allLowerCaseLetter:", allLowerCaseLetter);

// const allUpperCaseLetter = userName.toLocaleUpperCase();
// // console.log("🚀 ~ allUpperCaseLetter:", allUpperCaseLetter);

// function capitalise(str) {
//     const firstCapitaliseLetter = str[0].toLocaleUpperCase();
//     return firstCapitaliseLetter + str.slice(1);
// }

// const res2 = capitalise("mango");
// // console.log("🚀 ~ res2:", res2);

// const userTextToArr = text.textContent.split(" ");
// // console.log("🚀 ~ userTextToArr:", userTextToArr);

// const transformedArr = [];

// for (let index = 0; index < userTextToArr.length; index++) {
//     const capitaliseWorld = capitalise(userTextToArr[index]);
       
//     // const element = userTextToArr[index];
//     // capitalise(element);
//     transformedArr.push(capitaliseWorld);
// }
// console.log(transformedArr.join(" "));

// * - trim Дозволяє прибрати пробіли на початку та вкінці рядка

// const autoFromDB = "BMW";


// userNickname.addEventListener("blur", event => {
//     const inputValue = event.target.value;

//     const isInDB = autoFromDB.toUpperCase() === inputValue.toUpperCase();

//     const res = isInDB
//         ? "В базі даних автомобіль є"
//         : "В базі даних автомобіль відсутній";
    
//     console.log("🚀 ~ res:", res);
    
// });

//   * - startsWith/endsWith

// const username = "Jakob Mercer";

// console.log(username.endsWith("er", 9)); //true


// * - includes

// const username = "Jakob Mercer";


// console.log(username.includes("ob")); //true
// console.log(username.includes("ob", 5)); //false

/**Цикли
 * Цикл for
 * Відлік від 0 до N
 * Зворотній відлік від N до 0
 * Збільшення/зменшення лічильника на 2+
 * Інкремент і декремент
 * Цикли while i do...while
 */
// console.log("Before");

// Ітерація - один повний оберт циклу

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
 // debugger;
// for (let i = 0; i < 10; i++) {
//        console.log(i);
//    }
// console.log("After");

// * Відлік від 0 до N
// function countAscending(start, end) {
//     for (let i = start; i <= end;  i++) {
//         console.log("Current value ", i);
        
       
//     }
// }
// countAscending(0, 5);

// * Зворотній відлік від N до 0
// function countDescending(start, end) {
//     for (let i = start; i >= end;  i--) {
//         console.log("Current value ", i);
        
       
//     }
// }
// countDescending(11, 5);
// let x = 1;
// // console.log(x++); //1 => повертає старе значення змінної
// console.log(x--); //1


// let y = 1;
// // console.log(++y); //2 => повертає нове значення змінної
// console.log(--y); //0
// * Інкремент і декремент - збільшення або зменшення змінної на 1

// * Збільшення/зменшення лічильника на 2+
// console.log("Before");
// for (let i = 0; i < 10; i+= 2) {
//         console.log(i);
//     }
// console.log("After");

// * Цикли while i do...while

let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter++;   
}

do {
  console.log(counter);
    ++counter;   
} while (counter > 10);


