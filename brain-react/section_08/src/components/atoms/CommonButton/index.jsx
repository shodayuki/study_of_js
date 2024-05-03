/**
 * CommonButton
 *
 * @package components
 */
import React from 'react';
import styles from './styles.module.css';

export const CommonButton = ({ type, label, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);