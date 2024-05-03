import React from 'react';
import { BaseLayout } from '../../organisims/BaseLayout';
import { TodoList } from "../../organisims/TodoList";
import { InputForm } from '../../atoms/InputForm';
import { useTodoContext } from '../../../contexts/TodoContext';
import styles from "./style.module.css";

export const TodoTemplate = () => {
  const {
    addInputValue,
    searchKeyword,
    showTodoList,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleSearchTodo
  } = useTodoContext();

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm
            inputValue={searchKeyword}
            placeholder={"Search Keyword"}
            handleChangeValue={handleSearchTodo}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList
              todoList={showTodoList}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};