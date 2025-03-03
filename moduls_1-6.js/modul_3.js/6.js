// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// courses[0]
// console.log("🚀 ~ courses[0]:", courses[0]);
// console.log("🚀 ~ courses[1]:", courses[1]);
// console.log("🚀 ~ courses[2]:", courses[2]);
// console.log("🚀 ~ courses[3]:", courses[3]);

// console.log("🚀 ~ courses[4]:", courses[4]);
// console.log("🚀 ~ courses[0]:", courses.at(-1));=> швидкий шлях, щоб дістати останній елемент

// const diffElements = ["Some text", true, 12, [1, 2, 3]];=> поганий приклад масиву


// const newArr = new Array(); => метод не робочий!

// const secodArr = [];=> правильний запис масиву

// Заміна всередині масиву, використовуючи індекс
// courses[1] = "SQL";
// console.table(courses);

// Довжина масиву


// const newArr = [];
// newArr[10] = "apple";
// console.log("🚀 ~ newArr:", newArr);

// courses.length = 0;=> очищення масиву, операція незворотня

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// const lastIndex = courses.length - 1;
// console.log("🚀 ~ lastIndex:", lastIndex);
// courses[lastIndex]
// console.log("🚀 ~ courses[lastIndex]:", courses[lastIndex]);=>як дістати останній елемент із масиву
// courses.at(-1);
// console.log("🚀 ~ courses.at(-1):", courses.at(-1));

// Передача за посиланням і за значенням

// const a = [1, 2, 3];
// a[0] = 500;
// console.log("🚀 ~ a:", a);
// const b = a;
// console.log("🚀 ~ b:", b);

/** Методи масиву
 * - join()
 * - split()
 * - slice()
 * - concat()
 * - indexOf()
 * - push() | pop()
 * - shift() | unshift()
 */
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//  * - join()  => для перетворення масиву в рядок

// const joinArr = courses.join(" ");
// console.log("🚀 ~ joinArr:", joinArr);

//  * - split()
// const str = "JavaScript is awsome";
// console.log("🚀 ~ str:", str);

// const arrFromStr = str.split(" ");

// const reversedArr = arrFromStr.reverse();

// const reversedStr = reversedArr.join(" ");
// console.log("🚀 ~ reversedStr:", reversedStr);

//  * - slice() => може виймати елементи із масиву і копіювати масив у новий масив
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// const updatedCourses = courses.slice(2, 4);
// console.log("🚀 ~ updatedCourses:", updatedCourses);


//  * - concat() => дозволяє зшити масиви
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// const newCourses = ["Design", "Pyton", "Math"];
// const updatedCourses = courses.concat(newCourses);
// console.table(updatedCourses);

//  * - indexOf() => дозволяє дізнатися індекс необхідного елемента
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// const searchIdx = courses.indexOf("JavaScript");
// console.log("🚀 ~ searchIdx:", searchIdx);

// const arr1 = courses.slice(0, searchIdx + 1).join("-");
// console.log("🚀 ~ arr1:", arr1);

// const arr2 = courses.slice(searchIdx + 1).join();
// console.log("🚀 ~ arr2:", arr2);

// const res = arr1 + "|" + arr2;
// console.log("🚀 ~ res:", res);


// chaining => метод приєднання різних методів

//  * - push() | pop()

// FIFO => first in first out => Queue
// FILO => first in last out
// LIFO => last in first out => Stack

// метод push() дозволяє додати елемент в кінець масиву і повертає оновлену довжину масиву

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// courses.push("Java");
// const res1 = courses.push("Java");
// console.log("🚀 ~ res1:", res1);

// console.log("🚀 ~ courses:", courses);

// метод pop() дозволяє видалити елемент з кінця масиву => результат роботи, це є значення, яке було видалено

// courses.pop();
// const res2 = courses.pop();
// console.log("🚀 ~ res2:", res2);

// console.log("🚀 ~ courses:", courses);

// * - shift() | unshift()
// Цей метод видаляє перший елемент масиву, але всі наступні елементи реіндексуються -
// наступні елементи мають отримати індекс попереднього елемента

/** 
 * Ітерація по масиву
 * - Ітерація по масиву циклом for
 * Метод includes()
 * Цикл for...of
 * Різниця у використанні for i for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const IsFriendsOnline = [true, true, false, false];
// console.table(friends);

for (let i = 0; i < friends.length; i += 1){

    // console.log("🚀 ~ friends[i] += `-${i+1}`:", friends[i] += `-${i+1}`);

    //  console.log(friends[i] += ` - ${IsFriendsOnline[i] ? "Online" : "Offline"}`);
//    console.log("🚀 ~ friends:", friends);
 }
    
//  * Цикл for...of

for (let friend of friends) {
    // console.log("🚀 ~ friends:", friends);
    // console.log("🚀 ~ friend:", friend);
    
}























