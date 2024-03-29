import './App.css';
import {useState} from "react";
import {InputTodo} from "./components/InputTodo";
import {IncompleteTodos} from "./components/IncompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";

export const Todo = () => {
  // 入力されたTODOのState（todoTextは初期値のState, setTodoTextは更新関数）
  const [todoText, setTodoText] = useState("");

  // 未完了TODOに関するState(incompleteTodosは初期値のState, setIncompleteTodosは更新関数)
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了TODOに関するState（completeTodosは初期値のState, setCompleteTodosは更新関数）
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onClickDelete = (index) => {
      // 配列をコピー
      const newTodos = [...incompleteTodos];
      // 配列の中身を削除
      newTodos.splice(index, 1);
      // Stateを更新
      setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
      // 配列をコピー
      const newIncompleteTodos = [...incompleteTodos];
      // 配列の中身を削除
      newIncompleteTodos.splice(index, 1);

      // 完了TODOの配列をコピーして、完了ボタンを押下した未完了のTODOを配列に追加
      const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
      // 未完了TODOのStateを更新
      setIncompleteTodos(newIncompleteTodos);
      // 完了TODOのStateを更新
      setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
      // 完了TODO配列をコピー
      const newCompleteTodos = [...completeTodos];
      // 完了TODO配列から完了ボタンを押下した配列を削除
      newCompleteTodos.splice(index, 1);

      // 未完了TODO配列をコピーして、完了ボタンを押下した配列を未完了TODO配列に追加
      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
      // 完了TODOのStateを更新
      setCompleteTodos(newCompleteTodos);
      // 未完了TODOのStateを更新
      setIncompleteTodos(newIncompleteTodos);
  };

  const insMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
        <InputTodo
            todoText={todoText}
            onChange={onChangeTodoText}
            onClick={onClickAdd}
            disabled={insMaxLimitIncompleteTodos}
        />
        {insMaxLimitIncompleteTodos && (
            <p style={{color: "red"}}>
                登録できるTODOは5個までですよ
            </p>
        )}
        <IncompleteTodos
            todos={incompleteTodos}
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
        />
        <CompleteTodos
            todos={completeTodos}
            onClickBack={onClickBack}
        />
    </>
  );
};

export default Todo;
