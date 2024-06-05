// コマンドラインパラメータを受け取る
// 合計と平均を求める関数を作成
const score: number[] = [];

for (let i: number = 2; i < process.argv.length; i++) {
  score.push(Number(process.argv[i]));
}

function get_sum(score: number[]): number {
  let sum: number = 0;

  for (let i: number = 0; i < score.length; i++) {
    sum += score[i];
  }

  return sum;
}

function get_average(score: number[]): number {
  const sum = get_sum(score);
  const average: number = sum / score.length;

  return average;
}

console.table(score);
console.log("人数: " + score.length);
console.log("最高点: " + Math.max(...score));
console.log("最低点: " + Math.min(...score));
console.log("合計: " + get_sum(score));
console.log("平均: " + get_average(score));