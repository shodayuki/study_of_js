/**
 * BaseLayout
 *
 * @package components
 */
import { Navigation } from "../../molecules/Navigation";
import styles from "./styles.module.css";

/**
 * BaseLayout
 *
 * @param children
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export const BaseLayout = ({ children, title }) => (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {/* リンクエリア */}
        <section className={styles.common}>
            <Navigation/>
        </section>
        {children}
    </div>
);