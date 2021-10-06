import React, { useState } from 'react';

export default function TodoList() {
    /**
        Create a new function that is called when delete button is pressed 
        and pass row index to this function.
        Use filter() method to delete one item 
        from the array todos.filter((todo, i) => i !== index)
     */
    
    const [thing, setThing] = useState({date: '', desc: ''});
    const [todos, setTodos] = useState([]);

    // adding todos
    const AddTodo = () => {
        setTodos([...todos, {
            date: thing.date,
            desc: thing.desc
        }]);
    }

    // index is passed as an argument of button onClick-function
    const deleteRow = (index) => { 
        setTodos(
            // only index-argument is needed (empty first argument _)
            // indexes are being compared 
            // todos-list is filtered by items that are NOT the index passed as an argument from the button onClick
            todos.filter((_, i) => i !== index)
        );
    }

    return(
        <div className='right'>
            <label>Date </label>
            <input 
                type='date'
                value={thing.date} 
                onChange={ e => setThing({...thing, date: e.target.value}) } 
            />
            <br/><label>Description </label>
            <input 
                type='text'
                value={thing.desc} 
                onChange={ e => setThing({...thing, desc: e.target.value}) } 
                // last input launches addtodo-function when Enter-key is pressed
                onKeyDown={ e => {e.key==='Enter' && AddTodo()} } 
            /><br/>
            <button onClick={AddTodo}> Add </button>
            <table>
                <tbody>    
                {
                    todos.map((todo, i) =>
                    <tr key={i} >
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => deleteRow(i)}>Delete</button></td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}