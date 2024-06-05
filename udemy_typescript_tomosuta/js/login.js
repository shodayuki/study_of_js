"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const username = "taniguchi";
const password = "12345678";
if (username === "taniguchi" && password === "12345678") {
    console.log('ログインしました');
}
else {
    console.log('ログインに失敗しました');
}
// 同意しました
const agree = true;
if (agree) {
    console.log("同意しました");
}
if (!agree) {
    console.log("同意してください");
}
