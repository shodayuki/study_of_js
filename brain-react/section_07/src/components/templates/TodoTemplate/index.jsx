import { Navigation } from "../../organisims/Navigation";
import { TodoList } from "../../organisims/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../contexts/TodoContext";
import styles from "./style.module.css";

export const TodoTemplate = () => {
    const {
        addInputValue,
        searchKeyword,
        showTodoList,
        onChangeAddInputValue,
        handleAddTodo,
        handleDeleteTodo,
        handleSearchTodo
    } = useTodoContext();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            {/* Todo追加エリア */}
            <section className={styles.common}>
                <Navigation />
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
}