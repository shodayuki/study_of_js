/**
 * Navigation
 *
 * @package components
 */
import React from 'react';
import { NavigationLink } from '../../atoms/NavigationLink';
import { NAVIGATION_LIST } from '../../../constants/navigations';
import styles from './styles.module.css';

/**
 * Navigation
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => (
  <nav>
    <ul className={styles.ul}>
      <NavigationLink title={"Top"} linkPath={NAVIGATION_LIST.TOP} />
      <NavigationLink title={"Create"} linkPath={NAVIGATION_LIST.CREATE} />
    </ul>
  </nav>
);