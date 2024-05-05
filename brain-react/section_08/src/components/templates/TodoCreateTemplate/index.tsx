/**
 * TodoCreateTemplate
 *
 * @package components
 */
import { BaseLayout } from '../../organisims/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { useTodoContext } from '../../../contexts/TodoContext';
import { useTopCreateTemplate } from './useTopCreateTemplate';
// @ts-ignore
import styles from './styles.module.css';

/**
 * TodoCreateTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  // @ts-ignore
  const { addTodo } = useTodoContext();

  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo }
  ] = useTopCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
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
            title="Create Todo"
          />
        </div>
      </form>
    </BaseLayout>
  );
};