/**
 * TodoEditTemplate
 *
 * @package components
 */
import React from 'react';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import { useTodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisims/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import styles from "./styles.module.css";

/**
 * TodoEditTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo }
  ] = useTodoEditTemplate({ originTodoList, updateTodo })

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