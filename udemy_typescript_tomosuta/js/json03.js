"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemStr = '{"name": "いちご", "price": 150';
try {
    const itemParse = JSON.parse(itemStr);
    console.log(itemParse.name);
}
catch (error) {
    console.log('JSONの形式が正しくありません。');
}
console.log("プログラムを続けました");
