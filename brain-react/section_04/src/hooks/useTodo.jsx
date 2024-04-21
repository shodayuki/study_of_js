import { useState } from "react";
import { searchTodo } from "../utils/todoLogic";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useTodo = () => {
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
     *
     * @param {*} e
     */
    const onChangeAddInputValue = (e) => {
        setAddInputValue(e.target.value);
    };

    /**
     * 表示用Todoリスト更新処理
     *
     * @param {*} newTodoList
     * @param {*} keyword
     */
    const updateShowTodoList = (newTodoList, keyword) => {
        setShowTodoList(
            // eslint-disable-next-line
            keyword != "" ? searchTodo(newTodoList, keyword) : newTodoList
        );
    };

    /**
     * Todo新規登録処理
     *
     * @param {*} e
     */
    const handleAddTodo = (e) => {
        // エンターキーが押下された時にTodoを追加
        // eslint-disable-next-line
        if (e.key === "Enter" && addInputValue != "") {
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
            updateShowTodoList(newTodoList, searchKeyword);

            // 採番IDを更新
            setUniqueId(nextUniqueId);

            // Todo追加後、入力後リセット
            setAddInputValue("");
        }
    };

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

            updateShowTodoList(newTodoList, searchKeyword);
        }
    }

    /**
     * Todo検索処理
     *
     * @param {*} e
     */
    const handleSearchTodo = (e) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);

        updateShowTodoList(originTodoList, keyword);
    }

    return  {
        addInputValue,
        searchKeyword,
        showTodoList,
        onChangeAddInputValue,
        handleAddTodo,
        handleDeleteTodo,
        handleSearchTodo,
    };
};