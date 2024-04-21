import { TodoList } from "../../organisms/TodoList";
import { AddTodo } from "../../organisms/AddTodo";
import {InputForm} from "../../atoms/InputForm";
import styles from "./styles.module.css";
import {useTodo} from "../../../hooks/useTodo";

export const TodoTemplate = () => {
    const [
        { addInputValue, searchKeyword, showTodoList },
        {
            onChangeAddInputValue,
            handleAddTodo,
            handleDeleteTodo,
            handleSearchTodo,
        },
    ] = useTodo();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            {/* Todo追加エリア */}
            <section className={styles.common}>
                <AddTodo
                    addInputValue={addInputValue}
                    onChangeTodo={onChangeAddInputValue}
                    handleAddTodo={handleAddTodo}
                />
            </section>
            {/* Todo検索フォームエリア */}
            <section className={styles.common}>
                <InputForm
                    inputValue={searchKeyword}
                    placeholder={"Search Keyword"}
                    handleChangeValue={handleSearchTodo}
                />
            </section>
            {/* Todoリスト一覧表示 */}
            <section className={styles.common}>
                {showTodoList.length > 0 && (
                    <TodoList
                        todoList={showTodoList}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                )}
            </section>
        </div>
    );
};