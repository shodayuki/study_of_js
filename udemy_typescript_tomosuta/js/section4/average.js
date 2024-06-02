"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// コマンドラインパラメータを受け取る
// 合計と平均を求める関数を作成
const score = [];
for (let i = 2; i < process.argv.length; i++) {
    score.push(Number(process.argv[i]));
}
function get_sum(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum;
}
function get_average(score) {
    const sum = get_sum(score);
    const average = sum / score.length;
    return average;
}
console.table(score);
console.log("人数: " + score.length);
console.log("最高点: " + Math.max(...score));
console.log("最低点: " + Math.min(...score));
console.log("合計: " + get_sum(score));
console.log("平均: " + get_average(score));
