/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.css';

type Props = {
  title: string,
  linkPath: string
}

/**
 * NavigationLink
 *
 * @param title
 * @param linkPath
 * @constructor
 */
export const NavigationLink: FC<Props> = ({ title, linkPath }) => (
  <li className={styles.li}>
    <Link to={linkPath}>{title}</Link>
  </li>
);