"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item = [
    {
        "name": "いちご",
        "price": 150
    },
    {
        "name": "ぶどう",
        "price": 200
    }
];
console.log(item[0].name);
console.log(item[0].price);
const itemStr = '{"name": "いちご", "price": 150}';
const itemParse = JSON.parse(itemStr);
console.log(itemParse.name);
const itemStr2 = JSON.stringify(item);
console.log(itemStr2);
