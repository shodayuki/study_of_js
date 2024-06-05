const username: string = "taniguchi";
const password: string = "12345678";

if (username === "taniguchi" && password === "12345678") {
  console.log('ログインしました')
} else {
  console.log('ログインに失敗しました')
}

// 同意しました
const agree: boolean = true;

if (agree) {
  console.log("同意しました");
}

if (!agree) {
  console.log("同意してください");
}