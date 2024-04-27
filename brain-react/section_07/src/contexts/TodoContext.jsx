/**
 * TodoContext
 *
 * @package
 */
import { useContext, createContext } from "react";
import { useTodo } from "../hooks/useTodo";

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
export const TodoProvider = ({ children }) => {
    // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
    const {
        originTodoList,
        addTodo,
        deleteTodo
    } = useTodo();

    return (
        <TodoContext.Provider
            value={{
                originTodoList,
                addTodo,
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