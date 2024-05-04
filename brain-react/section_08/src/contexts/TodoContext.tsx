/**
 * TodoContext
 *
 * @package
 */
import { FC, ReactNode, useContext, createContext } from 'react';
import { useTodo } from '../hooks/useTodo';

type Props = {
  children: ReactNode
}

/**
 * TodoContext
 */
const TodoContext = createContext({});

/**
 * TodoProvider
 *
 * @param children
 * @constructor
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
  const {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
export const useTodoContext = () => useContext(TodoContext);