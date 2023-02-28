import { useEffect, useState } from 'react';
import './ArticleList.css';

function Searchbar(props) {

    [articles, setArticles] = useState('');

    useEffect

    return (
        <div className='ArticleList'>
            <ul className='article__items'>
                { props.articles.map( (article, i) => <li key={i}>
                    {article.title}
                </li>)}
            </ul>
        </div>
    )
}

export default Searchbar;
