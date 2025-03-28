// === Урок 13 ===
// --- TypeScript ---

function sum(a: number, b: number): number {
    return a + b;
}

// console.log(sum(1, '2'));
// выведет "12", так как по-умолчанию Vite не проводит проверку типов, а просто преобразует ts код в js код

// Чтобы проводить перекомпиляцию с проверкой типов, нужно установить typescript
// npm i -D typescript
// и добавить в package.json новую команду

//  "scripts": {
//     "tsc": "tsc --noEmit"
//  },

//  Далее, создаем tsconfig.json в корне проекта, и добавляем в него путь к файлам ts
//
//  {
//   "compilerOption": {
//     "rootDir": "./"
//   }
// }

// Теперь по команде npm run tsc сборщик esbuild будет производить компиляцию ts кода в js код с проверной типов
//
// main.ts:5:20 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// 5 console.log(sum(1, '2'));
//
// Found 1 error in main.ts:5

// Для авто отслеживания можно запустить команду
//
// npm run tsc -- --watch

// (На самом деле нет)
//
// npm warn Unknown cli config "--watch". This will stop working in the next major version of npm.

// = vite-plugin-checker для проверки типов при конверсии ts в js =
//
// Установка:
//     npm i vite-plugin-checker -D
//
// Добавить vite-plugin-checker плагин в Vite конфиг файл vite.config.js
//
// import checker from 'vite-plugin-checker'
// export default {
//     plugins: [
//         checker({
//             // e.g. use TypeScript check
//             typescript: true,
//         }),
//     ],
// }
//
// = После этого ошибки будут выводится прямо на браузере в dev сервере =
//
// [TypeScript] Argument of type 'string' is not assignable to parameter of type 'number'.
//
// /Frontend/vite-test/main.ts:41:20
//
//     39 |
//
//     40 |
//
//   > 41 | console.log(sum(1, "2"));
//
//        |

console.log(sum(1, 2));

// === Урок 14 ===
// --- ESLint ---
//
// typescript-eslint - статический анализатор кода #title
// Помогает находить и исправлять ошибки
//
// Установка:
// npm install --save-dev eslint @eslint/js typescript typescript-eslint
//
// Настройка:
// Next, create an eslint.config.mjs config file in the root of your project, and populate it with the following:
// // @ts-check
//
// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';
//
// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.recommended,
// );
// The .mjs extension makes the file use the ES modules (ESM) format. Node interprets .js files in the CommonJS (CJS) format by default, but if you have "type": "module" in your package.json, you can also use eslint.config.js.
// Запустить скрипт в корне проекта:
// npx eslint .
//
// export default tseslint.config(
//     eslint.configs.recommended,
//     tseslint.configs.strict,
//     tseslint.configs.stylistic,
// );
//
// Также можно создать файл .eslintignore, и добавить туда файлы, которые не нужно проверять

// === ESLint можно интегрировать с vite-plugin-checker для полной интеграции с Vite ===
//
// Add eslint field to plugin config and options.eslint.lintCommand is required.
// The lintCommand is the same as the lint command of your project.
// The default root of the command uses Vite's root.
//
// e.g.
// export default {
//   plugins: [
//     checker({
//       eslint: {
//         // for example, lint .ts and .tsx
//         lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
//       },
//     }),
//   ],
// }


// === ВАЖНО ===
// В вебшторме не работает, нужно просто включить eslint в настройках IDE
