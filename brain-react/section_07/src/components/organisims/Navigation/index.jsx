/**
 * Navigation
 *
 * @package components
 */
import { Link } from "react-router-dom";
import { NAVIGATION_LIST } from "../../../constants/navigations";
import styles from "./styles.module.css";

/**
 * Navigation
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => (
    <nav>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link to={NAVIGATION_LIST.TOP}>Top</Link>
            </li>
            <li className={styles.li}>
                <Link to={NAVIGATION_LIST.CREATE}>Create</Link>
            </li>
        </ul>
    </nav>
);