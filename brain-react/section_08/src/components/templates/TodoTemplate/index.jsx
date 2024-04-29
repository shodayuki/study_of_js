import React from 'react';
import styles from "./style.module.css";

export const TodoTemplate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}></section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}></section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}></section>
    </div>
  );
};