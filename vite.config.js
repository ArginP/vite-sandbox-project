import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from "autoprefixer";
import checker from 'vite-plugin-checker'
import path from 'path'

console.log(path.resolve(__dirname, './src/assets'))

export default defineConfig({
    esbuild: {
        jsxFactory: 'create',
        jsxInject: 'import { create } from "/src/12-create.js"'
    },
    plugins: [
        tailwindcss(),
        Inspect(),
        checker({
            typescript: true,
        })
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({}) // настройки autoprefixer сюда
            ],
        }
    },
    resolve: {
      alias: {
          '@': path.resolve(__dirname, './src/assets'),
      }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                login: path.resolve(__dirname, 'login/login.html'),
            }
        }
    }
})