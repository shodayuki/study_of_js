/**
 * TodoTemplate
 *
 * @package components
 */
import React from 'react';
import { BaseLayout } from '../../organisims/BaseLayout';
import { TodoList } from "../../organisims/TodoList";
import { InputForm } from '../../atoms/InputForm';
import { useTodoContext } from '../../../contexts/TodoContext';
import { useTodoTemplate } from './useTodoTemplate';
import styles from "./style.module.css";

/**
 * TodoTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();

  const [
    { searchKeyword, showTodoList },
    { handleChangeSearchKeyword }
  ] = useTodoTemplate({ originTodoList })

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