/**
 * useTodoList
 *
 * @package components
 */
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';

type ActionType = {
  handleMoveDetailPage: (id: number) => void
  handleMoveEditPage: (id: number) => void
}

/**
 * useTodoList
 */
export const useTodoList = () => {
  const navigate = useNavigate();

  /**
   * 詳細ページに遷移する処理
   *
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveDetailPage = useCallback(
    (id: number) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate]
  );

  /**
   * 編集ページに遷移する処理
   *
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveEditPage = useCallback(
    (id: number) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate]
  );

  const actions: ActionType = {
    handleMoveDetailPage,
    handleMoveEditPage
  };

  return [actions] as const;
};