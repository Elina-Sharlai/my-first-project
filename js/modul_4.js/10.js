/**
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */



// console.table(friends);

/**
 * Пошук друга за іменем
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];
console.table(friends);

function findFriendByName(allFriends, friendName) {
    for (const friend of allFriends) {
        if (friend.name === friendName) {
            console.log("Success! Friend was found");
            return friend;
        }
    }
 console.log("Error!");
}



