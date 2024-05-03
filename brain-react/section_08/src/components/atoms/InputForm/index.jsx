/**
 * InputForm
 *
 * @package components
 */
import React from 'react';
import styles from "./style.module.css";

/**
 * InputForm
 *
 * @param {*} props
 * @returns
 */
export const InputForm = (props) => {
  /* props */
  const { inputValue, placeholder, onChange, onKeyDown } = props;

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}