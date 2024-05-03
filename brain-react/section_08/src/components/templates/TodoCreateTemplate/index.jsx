/**
 * TodoCreateTemplate
 *
 * @package components
 */
import React, { useState, useCallback } from 'react';
import { BaseLayout } from '../../organisims/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import styles from './styles.module.css';

/**
 * TodoCreateTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  /* local state */
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  /**
   * titleの変更処理
   *
   * @type {function(*): void}
   */
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.title),
    []
  );

  /**
   * contentの変更処理
   *
   * @type {function(*): void}
   */
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.content),
    []
  );

  const handleCreateTodo = useCallback((e) => {
    e.preventDefault();
    console.log("Hello");
  }, []);

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