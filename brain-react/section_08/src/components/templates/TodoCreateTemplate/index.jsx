/**
 * TodoCreateTemplate
 *
 * @package components
 */
import React from 'react';
import { BaseLayout } from '../../organisims/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import styles from './styles.module.css';

/**
 * TodoCreateTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  return (
    <BaseLayout title={"Create Todo"}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm placeholder={"Title"} />
        </div>
        <div className={styles.area}>
          <TextArea placeholder={"Content"} />
        </div>
      </div>
    </BaseLayout>
  );
};