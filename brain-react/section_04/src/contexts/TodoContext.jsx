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
 * @contructor
 */
export const TodoProvider = ({ children }) => {
    // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
    const {
        addInputValue,
        searchKeyword,
        showTodoList,
        onChangeAddInputValue,
        handleAddTodo,
        handleDeleteTodo,
        handleSearchTodo,
    } = useTodo();

    return (
        <TodoContext.Provider
            value={{
                addInputValue,
                searchKeyword,
                showTodoList,
                onChangeAddInputValue,
                handleAddTodo,
                handleDeleteTodo,
                handleSearchTodo,
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