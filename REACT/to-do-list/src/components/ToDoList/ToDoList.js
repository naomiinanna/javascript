import './ToDoList.css';
import React, { useState } from "react";
import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList(props) {

    const [todos, setTodos] = props;

    return (
        <ul className='toDo__list'>
            {props.todos.map((todo, i) => (
                <ToDoItem key={i} todo={todo} deleteItem={(todo => {
                    todos.spice(todos.indexOf(todo), 1);
                    setTodos();
                })}
            )

            }
        </ul>
        
    )
}

export default ToDoList;