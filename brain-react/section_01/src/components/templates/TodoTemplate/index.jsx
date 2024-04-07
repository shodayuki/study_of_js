import {useState} from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
    // TodoList
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

    // Todo採番ID
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

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

            </section>
        </div>
    );
};