/**
 * navigation
 *
 * @package constants
 */

/**
 * ベースPATH
 * @type {string}
 */
export const BASE_PATH = "/react-output-router";

/**
 * リンク先一覧
 *
 * @type {{TOP: string, DETAIL: string, CREATE: string, EDIT: string}}
 */
export const NAVIGATION_LIST = {
    TOP: `${BASE_PATH}/`,
    DETAIL: `${BASE_PATH}/detail/:id`,
    CREATE: `${BASE_PATH}/create`,
    EDIT: `${BASE_PATH}/edit/:id`,
};