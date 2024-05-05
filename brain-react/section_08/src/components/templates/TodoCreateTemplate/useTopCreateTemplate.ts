/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import { EventType } from '../../../interfaces/Event';

type Param = {
  addTodo: (title: string, content: string) => void
}

type StateType = {
  inputTitle: string,
  inputContent: string
}

type ActionsType = {
  handleChangeTitle: EventType['onChangeInput'],
  handleChangeContent: EventType['onChangeTextArea'],
  handleCreateTodo: EventType['onSubmit']
}

/**
 * useTodoCreateTemplate
 *
 * @param addTodo
 */
export const useTopCreateTemplate = ({ addTodo }: Param) => {
  const navigate = useNavigate();

  /* local state */
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  /**
   * titleの変更処理
   *
   * @type {function(*): void}
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback(
    (e) => setInputTitle(e.target.value), []
  );

  /**
   * contentの変更処理
   *
   * @type {function(*): void}
   */
  const handleChangeContent: EventType['onChangeTextArea'] = useCallback(
    (e) => setInputContent(e.target.value), []
  );

  /**
   * Todo追加処理
   *
   * @type {(function(*): void)|*}
   */
  const handleCreateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  const states = {
    inputTitle,
    inputContent
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo
  };

  return [states, actions] as const;
};