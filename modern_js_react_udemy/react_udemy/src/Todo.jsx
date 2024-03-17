import './App.css';
import {useState} from "react";

export const Todo = () => {
  // 入力されたTODOのState（todoTextは初期値のState, setTodoTextは更新関数）
  const [todoText, setTodoText] = useState("");

  // 未完了TODOに関するState(incompleteTodosは初期値のState, setIncompleteTodosは更新関数)
  const [incompleteTodos, setIncompleteTodos] = useState([
      "TODO1です", "TODO2です"
  ]);

  // 完了TODOに関するState（completeTodosは初期値のState, setCompleteTodosは更新関数）
  const [completeTodos, setCompleteTodos] = useState([
      "TODO1でした", "TODO2でした"
  ]);

  // テキスト変更を検知する関数処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
      // 空文字の時は何も返却しない処理を実施
      if (todoText === "") return;

      // スプレッド構文を用いて未完了のTODO配列をコピーして、
      // newTodos配列にtodoTextを配列に追加
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);

      // フォームを空にする
      setTodoText("");
  };

  return (
    <>
        <div className="input-area">
            <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
            <button onClick={onClickAdd}>追加</button>
        </div>
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
                {incompleteTodos.map((todo) => {
                    return (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {completeTodos.map((todo) => {
                    return (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button>戻す</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
  );
};

export default Todo;
