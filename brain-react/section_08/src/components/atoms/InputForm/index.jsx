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
  const { disabled = false, value, placeholder, onChange, onKeyDown } = props;

  return (
    <input
      disabled={disabled}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}