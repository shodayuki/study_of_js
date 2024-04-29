/* TodoList */
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* styles */
import styles from "./style.module.css";

/**
 * TodoList
 *
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  /* props */
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.far}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="lg"
              onClick={() => handleDeleteTodo(todo.id, todo.title)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};