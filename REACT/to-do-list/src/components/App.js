import './App.css';
import ToDoInputs from './ToDoInputs/ToDoInputs';
import ToDoList from './ToDoList/ToDoList';
import { useEffect, useState } from 'react';
//import Header, {someString, someString2} from ...


function App() {
  const [todos, setToDos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos) {
      return [];
    }
    if (todos.length) {
      return todos;
    }
    //return localStorage.setItem('todos', JSON.stringify(todos));
  });


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
    [todos]
  );


  return (
    <>
      <div className='wrapper'>
        <header>
          <h1>To Do List</h1>
          <p>Add task:</p>
        </header>
        <ToDoInputs addToDo={todo => setToDos([...todos, todo])} />
        <ToDoList todos={todos} />
        <button
          onClick={() => setToDos(sortByPrioriry)}>SORT</button>
      </div>
    </>
  );
}

export default App;