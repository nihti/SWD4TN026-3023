import React, { useState } from 'react';

export default function TodoList() {
    /**
     *  Create state that contains todo object: 
     *  {description: ’’, date: ’’}
     *  addTodo method: insert todo objects inside todos array
     *  // Enter-key adds input values todo-list too
     *  onKeyDown={ e => {e.key==='Enter' && AddTodo()} } 
     */
    
    const [thing, setThing] = useState({date: '', desc: ''});
    const [todos, setTodos] = useState([]);

    const AddTodo = () => {
        setTodos([...todos, thing]);
    }

    return(
        <div className='right'>
            <label>Date </label>
            <input 
                value={thing.date} 
                onChange={ e => setThing({...thing, date: e.target.value}) } 
            />
            <br/><label>Description </label>
            <input 
                value={thing.desc} 
                onChange={ e => setThing({...thing, desc: e.target.value}) } 
            /><br/>
            <button onClick={AddTodo}> Add </button>
            <table>
                <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {
                    todos.map((todo, i) =>
                    <tr key={i}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}