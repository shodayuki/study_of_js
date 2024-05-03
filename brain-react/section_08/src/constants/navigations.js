/**
 * navigation
 *
 * @package constants
 */

/**
 * ベースPATH
 *
 * @type {string}
 */
export const BASE_URL = "";

/**
 * リンク先一覧
 *
 * @type {{TOP: string, CREATE: string, EDIT: string, DETAIL: string}}
 */
export const NAVIGATION_LIST = {
  TOP: `${BASE_URL}/`,
  DETAIL: `${BASE_URL}/detail/:id`,
  CREATE: `${BASE_URL}/create`,
  EDIT: `${BASE_URL}/edit/:id`,
};