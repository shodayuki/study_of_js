const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // 未完了リストに追加
    createIncompleteTodo(inputText);
}

// 渡された引数を元に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    // button（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        // 戻すボタンを生成してdivタグ配下に生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        moveTarget.firstElementChild.appendChild(backButton);
        // 完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // button（削除）タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);