import './ToDoInputs.css';
import React, { useState } from "react";


function ToDoInputs(props) {
    const [title, setTitle] = useState('');

    function handleChange(e) {
        console.log(e + 'i was clicked')
        console.log(title)
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addToDo(title);
        setTitle('');
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                value={title}
                type="text" 
                className='todo__text__input' 
                placeholder="Item title.."  
                onSubmit={e => setTitle(e.target.value)}>
            </input>
            <select>
                <option value={1}>High</option>
                <option value={2}>Normal</option>
                <option value={3}>Low</option>
            </select>
            <input
                type={'date'}>
            </input>
            <input type="submit" value='Add'></input>
        </form>

    )
}

export default ToDoInputs;