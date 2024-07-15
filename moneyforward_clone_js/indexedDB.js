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

  // 入出金一覧を作成
  createList();
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

  // データベースを開く
  let database = indexedDB.open(dbName, dbVersion);

  // データベースが開かなかったときの処理
  database.onerror = function(event) {
    console.log('データベースに接続できませんでした。');
  }

  // データベースを開いたらデータの登録を実行
  database.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction(storeName, "readwrite");

    transaction.oncomplete = function(event) {
      console.log('トランザクション完了');
    }

    transaction.onerror = function(event) {
      console.log('トランザクションエラー');
    }

    let store = transaction.objectStore(storeName);
    let addData = store.add(data);

    addData.onsuccess = function(event) {
      console.log('データ登録できました');
      alert('登録しました');
    }

    addData.onerror = function(event) {
      console.log('データが登録できませんでした');
    }

    db.close();
  }
}

function createList() {
  // データベースからデータを全件取得
  let database = indexedDB.open(dbName);
  database.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction(storeName, "readonly");
    let store = transaction.objectStore(storeName);

    store.getAll().onsuccess = function(data) {
      console.log(data);
      let rows = data.target.result;
      let section = document.getElementById("list");

      // 入出金一覧のテーブルを作る
      // バッククオートでヒアドキュメント
      let table = `
				<table>
					<tr>
						<th>日付</th>
						<th>収支</th>
						<th>カテゴリ</th>
						<th>金額</th>
						<th>メモ</th>
						<th>削除</th>
					</tr>
				</table>
			`;

      // 入出金のデータを表示
      rows.forEach((element) => {
        console.log(element);
        table += `
					<tr>
						<td>${element.date}</td>
						<td>${element.balance}</td>
						<td>${element.category}</td>
						<td>${element.amount}</td>
						<td>${element.memo}</td>
						<td><button onclick="deleteData('${element.id}')">×</button></td>
					</tr>
				`;
      });
      table += `</table>`;
      section.innerHTML = table;
    }
  }
}

/**
 * データ削除
 *
 * id int
 */
function deleteData(id) {
  // データベースを開く
  let database = indexedDB.open(dbName, dbVersion);

  // 開いたら削除を実行
  database.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction(storeName, "readwrite");

    transaction.oncomplete = function(event) {
      console.log('トランザクション完了');
    }

    transaction.onerror = function(event) {
      console.log('トランザクションエラー');
    }

    let store = transaction.objectStore(storeName);
    let deleteData = store.delete(id);

    deleteData.onsuccess = function(event) {
      console.log('削除成功');
      createList();
    }

    deleteData.onerror = function(event) {
      console.log('削除失敗');
    }

    db.close();
  }

  // データベースが開けなかったときの処理
  database.onerror = function(event) {
    console.log('データベースに接続できませんでした。');
  }
}