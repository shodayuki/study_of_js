/**
 * useTodoTemplate
 *
 * @package hooks
 */
import { useState, useMemo, useCallback } from 'react';
import { TodoType } from '@/interfaces/Todo';
import { EventType } from '@/interfaces/Event';

type Params = {
  originTodoList: Array<TodoType>
}

type StatesType = {
  searchKeyword: string,
  showTodoList: Array<TodoType>
}

type ActionsType = {
  handleChangeSearchKeyword: EventType['onChangeInput']
}

/**
 * useTodoTemplate
 *
 * @param originTodoList
 */
export const useTodoTemplate = ({
  originTodoList
}: Params) => {
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState('');

  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp('^' + searchKeyword + 'i');

    return originTodoList?.filter((todo) => {
      // 検索キーワードに部分一致したTodoだけを一覧表示する
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /**
   * 検索キーワード更新処理
   *
   * @param {*} e
   */
  const handleChangeSearchKeyword: EventType['onChangeInput'] = useCallback(
    (e) => setSearchKeyword(e.target.value), []
  );

  const states: StatesType = {
    searchKeyword,
    showTodoList
  };

  const actions: ActionsType = {
    handleChangeSearchKeyword
  };

  return [states, actions] as const;
};