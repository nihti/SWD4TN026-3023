import React, { Fragment, useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import format from 'date-fns/format';

export default function TodoList() {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]); 
    const [theDate, setTheDate] = useState(new Date());
    
    console.log(todo.date);

    const setDate = (d) => {
        setTheDate(d);
        setTodo({...todo, date: format(d, 'dd/MM/yyyy')});
    }
  
    const setDesc = (e) => {
      setTodo({...todo, desc: e.target.value});
    } 

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([ ...todos, {...todo} ]);
    }
  
    return (
      <Fragment>
        <DatePicker 
            type="date" 
            name="date" 
            value={theDate} 
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