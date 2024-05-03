/**
 * TextArea
 *
 * @package components
 */
import React from 'react';
import styles from './styles.module.css';

export const TextArea = ({ value, placeholder, onChange }) => (
  <textarea
    className={styles.text}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);