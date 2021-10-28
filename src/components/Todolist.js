import React, { Fragment, useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import { format } from 'date-fns'

export default function TodoList() {
    const [todo, setTodo] = useState({desc: '', date: new Date()});
    const [todos, setTodos] = useState([]);
    
    const setDate = (e) => {
        setTodo({ ...todo, date: format(e, 'dd/MM/yyyy') });
    }
  
    const setDesc = (e) => {
      setTodo({...todo, desc: e.target.value});
    } 

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
    }
  
    return (
      <Fragment>
        <DatePicker 
            type="date" 
            name="date" 
            value={todo.date} 
            onChange={date => setDate(date)}
            renderInput={(params) => <TextField {...params} />}
            />
        <TextField 
            type="text" 
            name="desc" 
            value={todo.desc} 
            onChange={setDesc}/>
        <Button onClick={addTodo}>Add</Button>
        <table><tbody>
        {
        todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
          </tr>)
        }
        </tbody></table>
      </Fragment>
    );
}