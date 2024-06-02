"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dice = 0;
while (dice !== 1) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
}
