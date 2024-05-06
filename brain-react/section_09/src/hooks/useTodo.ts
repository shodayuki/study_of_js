/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback } from 'react';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '@/constants/data';

/**
 * useTodo
 */
export const useTodo = () => {
  /* TodoList */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /* Todo採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /* Actions */
  /**
   * Todo新規登録処理
   *
   * @param {string} title
   * @param {string} content
   */
  const addTodo = useCallback(
    (title: string, content: string) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content
        }
      ];

      // TodoListを更新
      setOriginTodoList(newTodo);

      // 採番IDを更新
      setUniqueId(nextUniqueId);
    },
    [originTodoList, uniqueId]
  );

  /**
   * Todo更新処理
   *
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  const updateTodo = useCallback(
    (id: number, title: string, content: string) => {
      const updatedTodoList = originTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            title: title,
            content: content
          };
        }
        return todo;
      });
      setOriginTodoList(updatedTodoList);
    },
    [originTodoList]
  );

  /**
   * Todo削除処理
   *
   * @param {number} targetId
   * @param {string} targetTitle
   */
  const deleteTodo = useCallback(
    (targetId: number, targetTitle: string) => {
      if (window.confirm(`「${targetTitle}」のTodoを削除しますか？`)) {
        const newTodoList = [...originTodoList];
        const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
        newTodoList.splice(deleteIndex, 1);

        // Todoを削除したTodoListの更新
        setOriginTodoList(newTodoList);
      }
    },
    [originTodoList]
  );

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo
  };
};