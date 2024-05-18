// キャラクターをインスタンス化する
let friend1 = new Friend("あれす", 180, 66, 13, 2, 45);
let friend2 = new Friend("なーしゃ", 110, 16, 12, 3, 45);
let friend3 = new Friend("だすてん", 140, 43, 11, 1, 45);
let enemy1 = new Troll("トロル", 270, 38, 20, "../image/troll.png");
let enemy2 = new Dragon("ドラゴン", 380, 68, 6, "../image/dragon.png");

// キャラクター配列をつくる
let characters = [];
characters.push(friend1);
characters.push(friend2);
characters.push(friend3);
characters.push(enemy1);
characters.push(enemy2);

friend1.command = "recoveryCommand";
friend1.action();