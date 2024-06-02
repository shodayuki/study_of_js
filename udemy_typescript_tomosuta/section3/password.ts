// 必要なパスワードの長さをパラメータで指定できる
// 指定された長さでアルファベットの大文字・小文字と数字、記号を組み合わせたランダムのパスワードが生成される
// 生成されたパスワードを画面に表示する
// あらかじめパスワードの元となる文字列を配列として準備する
// パラメータを受け取って、パスワードの長さを得る
// 乱数を使って、配列の中から適当な一文字を取り出す
// 指定された長さまで繰り返し行う
// 画面に表示する

const seeds: string[] = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "!", "#", "@"
];

const password_length: number = Number(process.argv[2]);
let password: string = '';
let random: number;

for (let i: number = 0; i < password_length; i++) {
  random = Math.floor(Math.random() * seeds.length);
  password += seeds[random];
}

console.log(password);