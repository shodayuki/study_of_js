/**
 * TodoPage
 *
 * @package pages
 */
import { TodoProvider } from "../contexts/TodoContext";
import { TodoTemplate } from "../components/templates/TodoTemplate";


export const TodoPage = () => (
    <TodoProvider>
        <TodoTemplate />
    </TodoProvider>
);