/**
 * TextArea
 *
 * @package components
 */
import React from 'react';
import styles from './styles.module.css';

export const TextArea = ({ disabled = false, value, placeholder, onChange }) => (
  <textarea
    disabled={disabled}
    className={styles.text}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);