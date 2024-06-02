"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefecture = {
    "hokkaido": "北海道",
    "aomori": "青森県",
    "iwate": "岩手県",
    "tokyo": "東京都"
};
console.log(prefecture["tokyo"]);
for (let key in prefecture) {
    console.log(prefecture[key]);
}
