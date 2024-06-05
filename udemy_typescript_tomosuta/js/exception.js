"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const division = (a, b) => {
    if (b === 0) {
        throw new Error('0では割れません。');
    }
    return a / b;
};
try {
    console.log(division(10, 2));
}
catch (error) {
    console.log(error.message);
}
