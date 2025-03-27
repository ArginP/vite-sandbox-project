// ~~~  Vite - Быстрая Сборка JavaScript Проектов | Полный курс ~~~
// ~~~  https://youtu.be/evmIHSAn1AU ~~~

// === Урок 02 Установка collect.js ===
// import '/src/02.js';

// === Урок 03 ===
// --- Стандартное подключение стилей ---
import '/src/assets/03.css';

// import {name} from в начале,
// ?inline к концу файла, чтобы экспортировать стили как обычные ECMAScript модули

// === Урок 04 ===
// * // --- Подключение стилей в виде ECMAScript модулей ---
// * import stylesA from '/src/assets/04a.module.css';
// * import stylesB from '/src/assets/04b.module.css';
// *
// * // console.log(stylesA); // Передаст объекты
// * // console.log(stylesB);
// *
// * // --- Присвоит DOM элементу классы, сгенерированные Vite: ---
// * document.querySelector('.heading').classList.add(`${stylesA.heading}`);
// * document.querySelector('.heading').classList.add(`${stylesB.heading}`);
// * // Стили успешно применятся

// --- Подключение стилей с псевдонимами ---
import { heading as headingFontSize } from '/src/assets/04a.module.css';
import { heading as headingColor } from '/src/assets/04b.module.css';

// --- Присвоит DOM элементу классы по псевдонимам: ---
document.querySelector('.heading').className = `${headingFontSize} ${headingColor}`;