/**
 * TodoCreateTemplate
 *
 * @package components
 */
import React from 'react';
import { BaseLayout } from '../../organisims/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { useTodoContext } from '../../../contexts/TodoContext';
import { useTopCreateTemplate } from './useTopCreateTemplate';
import styles from './styles.module.css';

/**
 * TodoCreateTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();

  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo }
  ] = useTopCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onClick={handleCreateTodo}>
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
            label="Create Todo"
          />
        </div>
      </form>
    </BaseLayout>
  );
};