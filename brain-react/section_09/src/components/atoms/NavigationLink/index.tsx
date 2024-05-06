/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

type Props = {
  title: string,
  linkPath: string
}

export const NavigationLink: FC<Props> = ({ title, linkPath }) => (
  <li className={styles.li}>
    <Link href={linkPath}>{title}</Link>
  </li>
);