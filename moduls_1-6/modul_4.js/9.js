/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};
// console.log(playlist);


function changePlaylistName(playlist, newName) {
    playlist.name = newName;
}

changePlaylistName(playlist, "My wonderful playlist");
// console.log(playlist);

const airplane = {
  manufactor: "Boenig",
  model: "737",
  airname: "UA-PSA",
  crew: {
    count: 3,
    rating: ["senior cabin crew", "junior cabin crew"],
  },
  pilots: [
    {
      capitan: {
        name: "Mango",
        hours: 10_000,
      },
      hasLicence: true,
    },
    {
      copilot: {
        name: "Ajax",
        hours: 1_000,
      },
      hasLicence: true,
    },
  ],
  wings: 2,
  seats: 186,
  cabinClasses: ["1st class", "business class", "econom class"],
  laggageCapacity: 1_500,
  engines: {
    power: 1_000,
    resouce: 100_000,
    fuelConsuption: "100 l/hour",
  },
};

// console.log(airplane.laggageCapacity);
// console.log("Has licence:", airplane.pilots[1].hasLicence);

// console.log("Fuel consumption:", airplane["engines"]["fuelConsuption"]);

const pilots = ["Mango", "Poly"];
pilots["hasLicence"] = true;

// console.log("pilots:", pilots);
// console.log("pilots:", pilots["hasLicence"]);

function checkLicence(pilot) {
  return pilot.hasLicence ? "Horray we can fly" : "❌ Oooops problem";
}

// console.log(checkLicence.name);

/**
 * Об'єкти
 *
 * - Тип даних за посиланням ✅
 * - Масиви і функції - це об'єкти ✅
 */

// імутабельність - незмінність даних

const accountUserA = {
  name: "Mango",
  age: 12,
  isOnline: false,
  password: "qwe+123",
  playTime: {
    hours: 10,
    minutes: 1,
  },
};

// const accountUserB = accountUserA;
/** Операція Розпилення для копіювання об'єкта */
const accountUserB = { ...accountUserA };
// TODO: deep clone

accountUserB.name = "Poly";
accountUserB.password = "zxc+098";
const newClone = structuredClone(accountUserA);
// console.log("newClone:", newClone);
accountUserA.games = ["CS GO", "Dota", "LA2"];
// console.log("userA", accountUserA);
newClone.playTime.hours = 1;
// console.log(accountUserB === accountUserA);
// console.log("userA", accountUserA);
// console.log("userB", accountUserB);

/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = "Mango";
const email = "mango@mail.com";

const credentials = {
  username,
  email,
};

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

// * - Обчислювальні властивості

const inputName = "color";

const colorPickedData = {
     lightness: 0.1,
  darkness: 0.5,
};

colorPickedData["current" + inputName[0].toUpperCase() + inputName.slice(1)] = "#000000";
// console.log(colorPickedData);

// Selected option

// const currentOptionIndex = select.options.selectedIndex;

// option.textContent = select.options[currentOptionIndex].value;

// select.addEventListener("change", selectHandler);

// function selectHandler(event) {
//     const select = event.currentTarget;
        
//   const currentOptionIndex = select.options.selectedIndex;
//     option.textContent = select.options[currentOptionIndex].value;
      
// }

/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// Ітерації

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
let counter = 0;
let value = 0;


// for (const key in feedback) {
    // 1. step ==> const key = 'good'
    // 2. step ==> const key = 'neutral'
    // 3. step ==> const key = 'bad'
    // console.log(feedback[key]);
    // totalFeedback += (feedback[key]);
    // counter++;
    // }

// console.log("🚀 ~ totalFeedback:", totalFeedback);
// console.log("🚀 ~ counter:", counter);
// console.log("Mean feedback", totalFeedback/counter);

// garbage collection - механізм для очистки значень, які не використовуються

const keys = Object.keys(feedback);
console.log("🚀 ~ keys:", keys);

const values = Object.values(feedback);
console.log("🚀 ~ keys:", keys);

for (const value of values) {
    totalFeedback += value; 
}

console.log("🚀 ~ totalFeedback:", totalFeedback);

const entries = Object.entries(feedback);
console.log("🚀 ~ entries:", entries);

