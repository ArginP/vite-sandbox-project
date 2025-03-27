import './assets/12.css'
// import { create } from "./12-create.js"; // так работает, но нужно экспортировать в каждый jsx модуль
// Лучше добавить ключ jsxInject в конфиг esbuild в vite.config.js с путем "/src/12-create.js" БЕЗ ТОЧКИ!

export const template = (
    <div class="wrapper">
        <p>
            <a href="#">link</a>
        </p>
    </div>
)

// Настройка vite.config.js:
//
// export default defineConfig({
//     esbuild: {
//         jsxFactory: 'create' // по названию функции, которую мы создали
//         jsxInject: 'import { create } from "/src/12-create.js"' // путь без точки, иначе MIME ругается
//     },
// })

// = console.log(el, attrs, content) =
// el = <a></a>
// attrs = href="#"
// content = link