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

const res = userName.slice();
// console.log("🚀 ~ res:", res);

// * - indexOf

const indexOfSpace = res.indexOf(" ");
// console.log("🚀 ~ indexOfSpace:", indexOfSpace);

const firstPhrase = res.slice(0, indexOfSpace);
// console.log("🚀 ~ firstPhrase:", firstPhrase);
const lastPhrase = res.slice(indexOfSpace + 1);
// console.log("🚀 ~ lastPhrase:", lastPhrase);
const fullPhrase = `${firstPhrase}${lastPhrase}`;
// console.log("🚀 ~ fullPhrase:", fullPhrase);

const withoutSpace = res.replace(" ", "");
// console.log("🚀 ~ withoutSpace:", withoutSpace);

// * - toLowerCase/toUpperCase
const allLowerCaseLetter = userName.toLocaleLowerCase();
// console.log("🚀 ~ allLowerCaseLetter:", allLowerCaseLetter);

const allUpperCaseLetter = userName.toLocaleUpperCase();
// console.log("🚀 ~ allUpperCaseLetter:", allUpperCaseLetter);

function capitalise(str) {
    const firstCapitaliseLetter = str[0].toLocaleUpperCase();
    return firstCapitaliseLetter + str.slice(1);
}

const res2 = capitalise("mango");
// console.log("🚀 ~ res2:", res2);

const userTextToArr = text.textContent.split(" ");
// console.log("🚀 ~ userTextToArr:", userTextToArr);

const transformedArr = [];

for (let index = 0; index < userTextToArr.length; index++) {
    const capitaliseWorld = capitalise(userTextToArr[index]);
       
    // const element = userTextToArr[index];
    // capitalise(element);
    transformedArr.push(capitaliseWorld);
}
// console.log(transformedArr.join(" "));

// * - trim Дозволяє прибрати пробіли на початку та вкінці рядка

const autoFromDB = "BMW";


userNickname.addEventListener("blur", event => {
    const inputValue = event.target.value;

    const isInDB = autoFromDB.toUpperCase() === inputValue.toUpperCase();

    const res = isInDB
        ? "В базі даних автомобіль є"
        : "В базі даних автомобіль відсутній";
    
    console.log("🚀 ~ res:", res);
    
});
    
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
