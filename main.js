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

function createTree(tree, data) {
    container.append(createTreeDom(data));
}

function createTreeDom(data) {
    if (!Object.keys(data).length) {
        return
    }
    let ul = document.createElement('ul');
    for (let key in data) {
        let li = document.createElement('li');
        li.innerHTML = key;
        let childrenUl = createTreeDom(data[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }
        ul.append(li);
    }
    return ul;
}
let container = document.getElementById('tree');
createTree(container, data);
