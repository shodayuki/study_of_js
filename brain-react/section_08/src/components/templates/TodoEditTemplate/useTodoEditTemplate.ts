/**
 * useTodoEditTemplate
 *
 * @package components
 */
import { useMemo, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import { TodoType } from '../../../interfaces/Todo';
import { EventType } from '../../../interfaces/Event';

type Params = {
  originTodoList: Array<TodoType>
  updateTodo: (id: number, title: string, content: string) => void;
}

type StatesType = {
  todo: TodoType | undefined
  inputTitle: string,
  inputContent: string
}

type ActionsType = {
  handleChangeTitle: EventType['onChangeInput']
  handleChangeContent: EventType['onChangeTextArea']
  handleUpdateTodo: EventType['onSubmit']
}

export const useTodoEditTemplate = ({ originTodoList, updateTodo }: Params) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [id, originTodoList]
  );

  /* local state */
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  /**
   * titleの変更処理
   *
   * @type {function(*): void}
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback(
    (e) => setInputTitle(e.target.value),[]
  );

  /**
   * contentの変更処理
   *
   * @type {function(*): void}
   */
  const handleChangeContent: EventType['onChangeTextArea'] = useCallback(
    (e) => setInputContent(e.target.value),[]
  );

  /**
   * Todo更新処理
   *
   * @type {(function(*): void)|*}
   */
  const handleUpdateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo?.id, inputTitle, inputContent, updateTodo]
  );

  const states = {
    todo,
    inputTitle,
    inputContent
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo
  };

  return [states, actions] as const;
};