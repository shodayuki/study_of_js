/**
 * NavigationLink
 *
 * @package components
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

/**
 * NavigationLink
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigationLink = ({ title, linkPath }) => (
  <li className={styles.li}>
    <Link to={linkPath}>{title}</Link>
  </li>
);