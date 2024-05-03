/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useTodo
 */
export const useTodo = () => {
  /* TodoList */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

  /* Todo採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /* actions */
  /**
   * Todo新規登録処理
   *
   * @param {*} title
   * @parma {*} content
   */
  const addTodo = useCallback((title, content) => {
    const nextUniqueId = uniqueId + 1;

    // Todo追加処理
    const newTodo = [
      ...originTodoList,
      {
        id: nextUniqueId,
        title: title,
        content: content
      }
    ];

    // todoListを更新
    setOriginTodoList(newTodo);

    // 採番IDを更新
    setUniqueId(nextUniqueId);
  }, [originTodoList, uniqueId]);

  /**
   * Todo削除処理
   *
   * @param { number } targetId
   * @param { string } targetTitle
   */
  const deleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のTodoを削除しますか？`)) {
      const newTodoList = [...originTodoList];
      const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
      newTodoList.splice(deleteIndex, 1);

      // Todoを削除したTodoListの更新
      setOriginTodoList(newTodoList);
    }
  }

  return {
    originTodoList,
    addTodo,
    deleteTodo
  };
};