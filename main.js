'use strict'
const data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
const container = document.getElementById('tree');

function createTree(tree, data) {
    container.append(createTreeDom(data));
}

function createTreeDom(data) {
    if (!Object.keys(data).length) {
        return
    }
    const ul = document.createElement('ul');
    for (let key in data) {
        const li = document.createElement('li');
        li.innerHTML = key;
        const childrenUl = createTreeDom(data[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }
        ul.append(li);
    }
    return ul;
}
createTree(container, data);
