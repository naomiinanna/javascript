import { useState } from 'react';
import './Searchbar.css';

function Searchbar() {

    [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='Searchbar'>
        <form onSubmit={onSubmit}>
            <input type='text' onInput={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder='search for...'></input>
            <input type='submit' value='Search'></input>
        </form>

        </div>
    )
}

export default Searchbar;
