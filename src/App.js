import React, { useState, Fragment, useRef } from 'react';
import TodoList from './components/TodoTable';
import './App.css';
import logo from './logo.svg';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
    /**
     * Implement todolist app using the ag-grid component 
     * according to instructions in the lecture material.
     * Enable the floating filter to each column in your todolist 
     * (See the ag-grid documentation).
     * Enable also row animation and see how it works when you sort or filter the grid.
     * 
    */

  const [thing, setThing] = useState({date: '', desc: '', priority: ''});
  const [todos, setTodos] = useState([]);

  // adding todos
  const AddTodo = (e) => {
      e.preventDefault();
      setTodos([...todos, thing]);
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    } else {
      alert('Select the row to be deleted first');
    }
  }

  const gridRef = useRef();

  const columns = [
    {field: 'desc', sortable: true, filter: true, floatingFilter: true, flex: 1},
    {field: 'date', sortable: true, filter: true, floatingFilter: true, flex: 1},
    {field: 'priority', sortable: true, filter: true, floatingFilter: true, flex: 1,
      cellStyle: params => params.value === 'High' ? {color: 'red'} : {color: 'black'}}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Todolist</h2>
        <form onSubmit={AddTodo} className='right'>
            <label>Date </label>
            <input 
                type='date'
                value={thing.date} 
                onChange={ e => setThing({...thing, date: e.target.value}) } 
            />
            <label> Description </label>
            <input 
                type='text'
                value={thing.desc} 
                onChange={ e => setThing({...thing, desc: e.target.value}) } 
            />
            <label> Priority </label>
            <input 
                type='text'
                value={thing.priority} 
                onChange={ e => setThing({...thing, priority: e.target.value}) } 
                // last input launches addtodo-function when Enter-key is pressed
                onKeyDown={ e => {e.key==='Enter' && AddTodo()} } 
            />
            <input type='submit' value='Add' /> 
            <button onClick={deleteTodo}>Delete</button>
        </form>
        <p></p>
        <div className="ag-theme-material" style={{height: 500, width: '100%'}}>
           <AgGridReact 
            ref={gridRef}
            onGridReady={ params => gridRef.current = params.api }
            rowSelection="single"
            rowData={todos}
            columnDefs={columns}
            animateRows={true}
           />
       </div>

      </header>
    </div>
  );
}

export default App;
