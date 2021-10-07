import React, { useState, Fragment } from 'react';
import TodoList from './components/TodoTable';
import './App.css';
import logo from './logo.svg';

function App() {
    /**
   * Split your todo list application to separate components: App and TodoTable. 
   * The App component contains button and input elements. 
   */

  const [thing, setThing] = useState({date: '', desc: ''});
  const [todos, setTodos] = useState([]);

  // adding todos
  const AddTodo = (e) => {
      e.preventDefault();
      setTodos([...todos, thing]);
  }

  // deleteRow function is going to be passed as a prop to TodoTable
  const deleteRow = (index) => { 
    setTodos(
        // only index-argument is needed (empty first argument _)
        // indexes are being compared 
        // todos-list is filtered by items that are NOT the index passed as an argument from the button onClick
        todos.filter((_, i) => i !== index)
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Simple Todolist</h2>
        <form onSubmit={AddTodo} className='right'>
            <label>Date </label>
            <input 
                type='date'
                value={thing.date} 
                onChange={ e => setThing({...thing, date: e.target.value}) } 
            />
            <br/>
            <label>Description </label>
            <input 
                type='text'
                value={thing.desc} 
                onChange={ e => setThing({...thing, desc: e.target.value}) } 
                // last input launches addtodo-function when Enter-key is pressed
                onKeyDown={ e => {e.key==='Enter' && AddTodo()} } 
            />
            <br/>
            <input type='submit' value='Add' /> 
        </form>
        <TodoList todos={todos} delete={deleteRow}/>
      </header>
    </div>
  );
}

export default App;
