import * as React from "react";
import './Search.css';
import { useState } from "react";

const Search = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');

    // エンターキーを押下することによって、formのonSubmitイベントが発火したら実行される関数
    const onFormSubmit = (event) => {
        // event処理をキャンセル
        event.preventDefault();

        // Propsで受け取ったonSearchSubmit関数にStateであるtermを渡して実行
        onSearchSubmit(term);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                className='Search'
                value={term}
                placeholder="検索"
                onChange={e => setTerm(e.target.value)}
            />
        </form>
    );
};

export default Search;