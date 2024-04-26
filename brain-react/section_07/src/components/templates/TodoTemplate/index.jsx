import { useState } from "react";
import { TodoList } from "../../organisims/TodoList";
import { INIT_TODO_LIST } from "../../../constants/data";
import styles from "./style.module.css";

export const TodoTemplate = () => {
    /* TodoList */
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
    /* 表示用TodoList */
    const [showTodoList, setShowTodoList] = useState(INIT_TODO_LIST);

    /* actions */
    /**
     * 表示用Todoリスト更新処理
     *
     * @param {*} newTodoList
     */
    const updateShowTodoList = (newTodoList) => {
        setShowTodoList(newTodoList);
    }

    /**
     * Todo削除処理
     *
     * @param { number } targetId
     * @param { string } targetTitle
     */
    const handleDeleteTodo = (targetId, targetTitle) => {
        if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
            const newTodoList = [...originTodoList];
            const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
            newTodoList.splice(deleteIndex, 1);

            // todoを削除したTodoListの更新
            setOriginTodoList(newTodoList);

            updateShowTodoList(newTodoList);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            {/* Todo追加エリア */}
            <section className={styles.common}></section>
            {/* Todo検索フォームエリア */}
            <section className={styles.common}></section>
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