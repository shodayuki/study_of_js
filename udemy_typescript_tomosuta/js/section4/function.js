"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getDice(10, 15));
function getRandomChar(...chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}
console.log(getRandomChar("1", "a", "A", "B", "C"));
const add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
const add2 = (a, b) => a + b;
console.log(add2(1, 5));
let add_tax = (price) => {
    const tax = 1.1;
    return Math.floor(price * tax);
};
console.log(add_tax(100));
function print_name(name) {
    if (typeof name === "string") {
        console.log(name + 'さん');
    }
    else {
        for (let n of name) {
            console.log(n + 'さん');
        }
    }
}
print_name('田中');
print_name(['田中', '高橋', '橋本']);
