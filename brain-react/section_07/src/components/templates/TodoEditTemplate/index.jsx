/**
 * TodoEditTemplate
 *
 * @package components
 */
import { useMemo, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";
import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../organisims/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import styles from "./styles.module.css";

/**
 * TodoEditTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoEditTemplate = () => {
    const navigate = useNavigate();
    const { originTodoList, updateTodo } = useTodoContext();
    const { id } = useParams();

    const todo = useMemo(
        () => originTodoList.find((todo) => String(todo.id) === id),
        [id, originTodoList]
    );

    /* local state */
    const [inputTitle, setInputTitle] = useState(todo?.title || "");
    const [inputContent, setInputContent] = useState(todo?.content || "");

    /**
     * 「title」変更処理
     *
     * @type {function(*): void}
     */
    const handleChangeTitle = useCallback(
        (e) => setInputTitle(e.target.value),
        []
    );

    /**
     * 「content」変更処理
     *
     * @type {function(*): void}
     */
    const handleChangeContent = useCallback(
        (e) => setInputContent(e.target.value),
        []
    );

    /**
     * Todo更新処理
     *
     * @type {(function(*): void)|*}
     */
    const handleUpdateTodo = useCallback(
        (e) => {
            e.preventDefault();
            if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
                updateTodo(todo.id, inputTitle, inputContent);
                navigate(NAVIGATION_PATH.TOP);
            }
        },
        [navigate, todo?.id, inputTitle, inputContent, updateTodo]
    );

    return (
        <BaseLayout title={"TodoEdit"}>
            {!!todo && (
                <form className={styles.container} onSubmit={handleUpdateTodo}>
                    <div className={styles.area}>
                        <InputForm
                            value={inputTitle}
                            placeholder={"Title"}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div className={styles.area}>
                        <TextArea
                            value={inputContent}
                            placeholder={"Content"}
                            onChange={handleChangeContent}
                        />
                    </div>
                    <div className={styles.area}>
                        <CommonButton
                            type="submit"
                            label="Edit Todo"
                        />
                    </div>
                </form>
            )}
        </BaseLayout>
    );
};