import {useState} from "react";
import { searchTodo } from "../../../utils/todoLogic";
import { TodoList } from "../../organisms/TodoList";
import { INIT_TODO_LIST } from "../../../constants/data";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
    /* TodoList */
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
    /* Todo採番ID */
    //const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
    /* 表示用TodoList */
    const [showTodoList, setShowTodoList] = useState(INIT_TODO_LIST);

    /* actions */
    /**
     * 表示用Todoリスト更新処理
     * @param {*} newTodoList
     * @param {*} keyword
     */
    const updateShowTodoList = (newTodoList, keyword) => {
        setShowTodoList(
            keyword !== "" ? searchTodo(newTodoList, keyword) : newTodoList
        );
    };

    /**
     * Todo削除処理
     * @param { number } targetId
     * @param { string } targetTitle
     */
    const handleDeleteTodo = (targetId, targetTitle) => {
        if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
            // 削除するid以外のtodoを再編集
            // filterを用いた方法
            const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

            console.log(newTodoList);

            // todoを削除したTodoListの更新
            setOriginTodoList(newTodoList);

            updateShowTodoList(newTodoList, "");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>
            {/* Todo追加エリア */}
            <section className={styles.common}>

            </section>
            {/* Todo検索フォームエリア */}
            <section className={styles.common}>

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