/**
 * TextArea
 *
 * @package components
 */
import styles from "./styles.module.css";

export const TextArea = ({ value, placeholder, onChange }) => (
    <textarea
        className={styles.text}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);