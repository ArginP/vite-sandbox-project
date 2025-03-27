export function create(el, attrs, content) { // Описывает, как esbuild будет читать и преобразовывать jsx template

    const node = document.createElement(el); // создает нод по старшему элементу

    Object.entries(attrs || {}).forEach(([name, value]) => { // если есть аттрибуты
        node.setAttribute(name, value); // то задает их ноду по парам ключ-значение
    }) // если их нет, но они передадутся ноду как null

    if (typeof content === 'string') { // если в качестве контента есть string (то, что находится внутри тега html)
        content = document.createTextNode(content); // то создается текстовый нод
    }

    node.appendChild(content); // достраивает дерево детьми

    return node;
}