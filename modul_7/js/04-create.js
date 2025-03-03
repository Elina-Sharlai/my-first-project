/**
 * Створення та додавання елементів
 */

/**
 * Створюємо заголовок
 */

18
console.log("🚀 ~ 18:", 18)
const titleEl = document.createElement("h1");
titleEl.textContent = "About me";
titleEl.classList.add("hero-title");

/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement("img");
console.log("imageEl:", imageEl);
imageEl.src =
  "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "valais-alpine-mountains-glacier";
imageEl.width = "420";
imageEl.classList.add("hero-img");

const heroEl = document.querySelector(".hero");

heroEl.append(titleEl, imageEl);

/**
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const linkItemEl = document.createElement("a");
linkItemEl.textContent = "Reviews";
linkItemEl.href = "/reviews";
linkItemEl.classList.add("site-nav__link");

// TODO Вставляємо посилання в li
navItemEl.append(linkItemEl);
// TODO Вставляємо  li в ul
const listEl = document.querySelector(".site-nav");
listEl.append(navItemEl);