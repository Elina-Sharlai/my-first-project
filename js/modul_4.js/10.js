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

// console.table(friends);

/**
 * Пошук друга за іменем
 */

function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
if (friend.name === friendName) {
      // console.log("Success! Friend was found");
      return friend;
    }
   }

  console.log("Error!");
}

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {
  const names = [];

  for (let i = 0; i < allFriends.length; i++) {
    const friend = allFriends[i];
    names.push(friend.name);
    // console.log("getAllNames:", friend.name);
  }

  return names;
}

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend.name);
//     }
//   }

//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
]

function calcTotalPrice(stones, stoneName) {
  // stones = []
  // stoneName = "Діамант"
  // arguments = pseudo []
  // this

  for (const stone of stones) {
    // console.log(stone.name);
    // console.log(stone.price);
    // console.log(stone.quantity);
    // console.log("\n");
    
    
    if (stone.name === stoneName) {
      const total = stone.price * stone.quantity;
      // return `Вартість каміння: ${stone.name} складає ${total} у.о`;
    }
  }

  // return `В крамниці відсутнє каміння - ${stoneName}`;

  // return undefined
}

const result1 = calcTotalPrice(stones, "Діамант");
// console.log("result1:", result1);
const result2 = calcTotalPrice(stones, "Галька");
// console.log("result2:", result2);

/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    // return this.tracks.length;
  },
};

// console.log(playlist.getTrackCount());

playlist.changeName("New playlist name");

playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

playlist.updateRating(4);
// console.log(playlist);

/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [
  1000,
  ...[1, 2, 3, "qwe"],
  2000,
  ...[4, 5, 6],
  3000,
  ...[7, 8, 9],
  ...[...[10, 11, 12]],
];
// console.table(numbers);

const user = {
  name: "Mango",
  city: "Kyiv",
  ...{
    city: "Lviv",
    street: "Mazepu",
    building: 10,
  },
};
// console.log("user:", user);

const registeredUser = {
  nickname: "YK",
  email: "example@email.com",
  phone: "+38 099 123-45-67",
};

const updateProfile = {
  nickname: "Ajax",
  phone: "+38 077 123-45-67",
};

const updatedInfo = {
  ...registeredUser,
  ...updateProfile,
};
// console.log("updatedInfo:", updatedInfo);

/**Пошук найменшої або найбільшої температури (числа) */

const temps = [18, 14, 12, 21, 17, 29, 24];

const minTemp = Math.min(...temps);
// console.log("minTemp:", minTemp);
const maxTemp = Math.max(...temps);
// console.log("minTemp:", maxTemp);


const temperatureMonday = [10, 12, 11];
const temperatureTuesday = [8, 8, 9];
const temperatureWednesday = [12, 10, 8];

const temperatureByThreeDay = [
  ...temperatureMonday,
  ...temperatureTuesday,
  ...temperatureWednesday,
];
// console.log("temperatureByThreeDay:", temperatureByThreeDay);

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

// console.log("a: ", a);
// console.log("b: ", b);
// console.log(a[0] === b[0]);

a[0].x = 1000;

// console.log(b[0].x);

/**
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/**
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

/**Синтаксис операції rest */

function showParams(a, b, c, ...args) {
  // console.log(arguments);
  console.log("showParams  args:", args);
}

// showParams("a", 1, true, { x: 10 }, [1, 2, 3]);






