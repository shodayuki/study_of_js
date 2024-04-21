/**
 * TodoPage
 *
 * @package pages
 */
import { TodoProvider } from "../contexts/TodoContext";
import { TodoTemplate } from "../components/templates/TodoTemplate";

export const TodoPage = () => (
    <TodoProvider>
        {/* TodoProvider直下のコンポーネントでコンテキストに定義した状態、ロジックをどこでも呼び出せる */}
        <TodoTemplate />
    </TodoProvider>
);