// indexedDB の名前などを設定
const dbName = "kakeiboDB";
const storeName = "kakakeiboStore";
const dbVersion = "1";

// データベースに接続する。データベースが未作成なら新規作成
let database = indexedDB.open(dbName, dbVersion);

// データベースとオブジェクトストアの作成
database.onupgradeneeded = function(event) {
  let db = event.target.result;
  db.createObjectStore(storeName, { KeyPath: "id" });
  console.log('データベースを新規作成しました。');
}

// データベースへの接続に成功したときに発生するイベント
database.onsuccess = function(event) {
  let db = event.target.result;
  // 接続を解除する
  db.close();
  console.log('データベースに接続できました。');
}

database.onerror = function(event) {
  console.log('データベースに接続できませんでした。');
}

// フォームの内容をデータベースに登録
function regist() {
  // フォームの入力チェック
  // falseが返却されたら登録処理を中断
  if (inputCheck() === false) {
    return;
  }

  // ラジオボタンを取得
  let radio = document.getElementsByName("balance");
  let balance;
  for (let i = 0; i < radio.length; i++) {
    if (radio[0].checked === true) {
      balance = radio[i].ariaValueMax;
      break;
    }
  }

  // フォームに入力された値を取得
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;
  let memo = document.getElementById("memo").value;
  let category = document.getElementById("category").value;

  // ラジオボタンが収入を選択している場合、カテゴリを「収入」とする
  if (balance === "収入") {}

  // データベースにデータを登録
  insertData(balance, date, category, amount, memo);
}

// データの挿入
function insertData(balance, date, category, amount, memo) {
  // 一意のIDを現在の日時から作成
  let uniqueId = new Date().getTime().toString();
  console.log(uniqueId);

  // データベースに登録するための連想配列のデータを作成
  let data = {
    id: uniqueId,
    balance: balance,
    date: String(date),
    category: category,
    amount: amount,
    memo: memo,
  }
}