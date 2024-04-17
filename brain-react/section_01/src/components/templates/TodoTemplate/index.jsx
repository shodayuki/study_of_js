import { useState } from "react";
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import { searchTodo } from "../../../utils/todoLogic";
import { TodoList } from "../../organisms/TodoList";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
    /* TodoList */
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
    /* add input title */
    const [addInputValue, setAddInputValue] = useState("");
    /* Todo採番ID */
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
    /* 検索キーワード */
    const [searchKeyword, setSearchKeyword] = useState("");
    /* 表示用TodoList */
    const [showTodoList, setShowTodoList] = useState(INIT_TODO_LIST);

    /* actions */
    /**
     * addInputValueの変更処理
     * @param {*} e
     */
    const onChangeAddInputValue = (e) => {
        setAddInputValue(e.target.value);
    };

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
     * Todo新規登録処理
     * @param {*} e
     */
    const handleAddTodo = (e) => {
        // エンターキーが押下された時にTodoを追加
        if (e.key === "Enter" && addInputValue !== "") {
            const nextUniqueId = uniqueId + 1;

            // Todo追加処理
            const newTodoList = [
                ...originTodoList,
                {
                    id: nextUniqueId,
                    title: addInputValue
                },
            ];
            setOriginTodoList(newTodoList);
            updateShowTodoList(newTodoList, "");

            // 採番IDを更新
            setUniqueId(nextUniqueId);

            // Todo追加後、入力値をリセット
            setAddInputValue("");
        }
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

            // 削除するTodoの配列番号を取り出してspliceで削除
            // const newTodoList = [...todoList];
            // const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
            // newTodoList.splice(deleteIndex, 1);

            // todoを削除したTodoListの更新
            setOriginTodoList(newTodoList);

            updateShowTodoList(newTodoList, "");
        }
    };

    /**
     * Todo検索処理
     *
     * @param {*} e
     */
    const handleSearchTodo = (e) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);

        updateShowTodoList(originTodoList, keyword);
    };

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