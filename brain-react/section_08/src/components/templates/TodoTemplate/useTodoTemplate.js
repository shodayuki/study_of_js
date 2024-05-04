/**
 * useTodoTemplate
 *
 * @package hooks
 */
import { useMemo, useState, useCallback } from 'react';

/**
 * useTodoTemplate
 *
 * @param originTodoList
 */
export const useTodoTemplate = ({ originTodoList }) => {
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");

  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");

    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /**
   * 検索キーワード更新処理
   *
   * @type {function(*): void}
   * @param {*} e
   */
  const handleChangeSearchKeyword = useCallback(
    (e) => setSearchKeyword(e.target.value),[]
  );

  const states = {
    searchKeyword,
    showTodoList
  };

  const actions = {
    handleChangeSearchKeyword
  };

  return [states, actions];
};