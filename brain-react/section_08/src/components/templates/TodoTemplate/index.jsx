/**
 * TodoTemplate
 *
 * @package components
 */
import React, { useMemo, useState } from 'react';
import { BaseLayout } from '../../organisims/BaseLayout';
import { TodoList } from "../../organisims/TodoList";
import { InputForm } from '../../atoms/InputForm';
import { useTodoContext } from '../../../contexts/TodoContext';
import styles from "./style.module.css";

/**
 * TodoTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();

  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");

  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");

    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm
            inputValue={searchKeyword}
            placeholder={"Search Keyword"}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList
              todoList={showTodoList}
              handleDeleteTodo={deleteTodo}
            />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};