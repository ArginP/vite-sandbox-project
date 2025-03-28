// ~~~  Vite - Быстрая Сборка JavaScript Проектов | Полный курс ~~~
// ~~~  https://youtu.be/evmIHSAn1AU ~~~

// === Урок 02 Установка collect.js ===
// import './src/02.js';

// === Урок 03 ===
// // --- Стандартное подключение стилей ---
// import './src/assets/03.css';
//
// // import {name} from в начале,
// // ?inline к концу файла, чтобы экспортировать стили как обычные ECMAScript модули

// === Урок 04 ===
// // --- Подключение стилей в виде ECMAScript модулей ---
//
// import stylesA from './src/assets/04a.module.css';
// import stylesB from './src/assets/04b.module.css';
//
// // console.log(stylesA); // Передаст объекты
// // console.log(stylesB);
//
// // --- Присвоит DOM элементу классы, сгенерированные Vite: ---
// document.querySelector('.heading').classList.add(`${stylesA.heading}`);
// document.querySelector('.heading').classList.add(`${stylesB.heading}`);
// // Стили успешно применятся
//
// --- Подключение стилей с псевдонимами ---
// import { heading as headingFontSize } from './src/assets/04a.module.css';
// import { heading as headingColor } from './src/assets/04b.module.css';
//
// --- Присвоит DOM элементу классы по псевдонимам: ---
// document.querySelector('.heading').className = `${headingFontSize} ${headingColor}`;

// import './src/assets/style.scss'; // Тест автопрефиксера, рабоатет

// === Урок 05 ===
// --- Подключение стилей Tailwind ---
// import './src/assets/05.css';

// === Урок 06 ===
// --- Использование препроцессоров CSS ---
// import './src/assets/06.sass'

// --- Использование файлов препроцессоров CSS в качестве модулей ---
// import styles from './src/assets/06.module.sass'
//
// document.body.className = styles.wrapper; // по названию класса из файла 06.module.sass

// === Урок 07 ===
// --- Импорт JSON ---
// import data from './src/assets/07.json' // Чтобы получить весь объект JSON

// console.log(data)

// Чтобы деструктурировать объект JSON, и получить конкретные данные по этим ключам:
// import { name, age } from './src/assets/07.json'

// console.log(name, age)

// // === Урок 08 ===
// // --- Импорт статических файлов ---
// import imageUrl from './src/assets/images/javascript.svg'
//
// document.querySelector('#image').src = imageUrl // статическая ссылка на файл

// import imageUrlRaw from './src/assets/images/javascript.svg?raw' // содержимое файла картинки в виде строки
//
// console.log(imageUrlRaw) // (svg xml path)
//
// import url from './src/assets/07.json?url' // вместо содержимого JSON файла получаем путь к нему
//
// console.log(url)
// // /src/assets/07.json?t=1743089056103

// === Урок 09 ===
// --- Папка public ---
// К файлам, находящимся в этой папке можно получить доступ напрямую по их названию, без пути /public/*
// Будет доступна по http://localhost:5173/vite.svg

// При npm run build, файлы из public попадут в неизмененном виде в корень папки dist вместе index.html
// = npm run preview хостит последний билд, созданный npm run build, а не актуальную версию dev кода! =

// === Урок 10 ===
// --- glob импорты ---
// const modules = import.meta.glob('./src/10/*.js')
//
// document.addEventListener('click', () => {
//     console.log('click')
//     Object.values(modules).forEach(module => {
//         module().then((data) => {
//             console.log(data) // модули передадутся в виде объектов, а их код выполнится (по клику в DOMe)
//         })
//     })
// })

// --- { eager: true } ---
// const modules = import.meta.glob('./src/10/*.js', { eager: true })
//
// document.addEventListener('click', () => {
//     console.log('click')
//     Object.values(modules).forEach(module => {
//         module().then((data) => {
//             console.log(data) // в таком виде вызов модулей будет преобразован в отдельные вызовы,
//             // и они будут выполнены без ожидания события, а сразу при загрузке страницы Важно!
//             // Это будут статические модули, и их содержимое будет присвоено результирующему объекту.
//             // = Это может сломать логику выполнения функций =
//             // В данном примере скрипты из модулей выполнятся после загрузки, но по клику будет ошибка, что module не функция
//         })
//     })
// })

// === Урок 11 ===
// --- Именованные glob импорты ---

// { as: 'raw' } // вернет строковое представление модуля
// { as: 'url' } // вернет путь к модулю

// const modules = import.meta.glob('./src/10/*.js', { import: 'name' });
//
// document.addEventListener('click', () => {
//     console.log('click')
//     Object.values(modules).forEach(module => {
//         module().then((name) => {
//             console.log(name) // выведет только значение константы 'name'
//         })
//     })
// })

// также можно указать { import: 'default' }, тогда выведется дефолтный экспорт

// = { eager: true, import: 'name' } =
// выведет один объект, с ключами в виде модулей, которым будет присвоено значение константы 'name'

// === Урок 12 ===
// --- JSX синтаксис ---

// import {template} from "./src/12.jsx";

// console.log(template.outerHTML); // <div className="wrapper"><p><a href="#">link</a></p></div>

// document.querySelector(`#app`).appendChild(template);
// отрисует наш темплейт в ДОМе

// === Урок 13 ===
// --- TypeScript ---