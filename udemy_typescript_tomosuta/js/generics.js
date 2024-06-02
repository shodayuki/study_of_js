"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ジェネリック関数、ジェネリクス
function getRandomChar(...chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}
console.log(getRandomChar("1", "a", "A"));
console.log(getRandomChar(1, 2, 3, 4));
