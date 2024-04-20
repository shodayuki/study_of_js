/**
 * TodoLogic
 * @package logic
 */

/**
 * 検索処理
 * 部分一致で検索する
 * @param {*} todoList
 * @param {*} keyword
 * @returns
 */
export const searchTodo = (todoList, keyword) => {
    return　todoList.filter((todo) => {
        const regexp = new RegExp("^" + keyword, "i");
        return todo.title.match(regexp);
    });
};