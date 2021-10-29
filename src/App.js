import React, {Fragment, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {
const [value, setValue] = useState('home');

  /**
   * Create a tab menu using the Material UI. 
   * The menu has two items Home and My Todos. 
   * The Home item shows a welcome message. 
   * The My Todos item shows your todo app from the previous exercise.
   */

  const handleChange = (_, val) => {
    setValue(val);
  }

  return (
    <Fragment>
      <AppBar position="static">
        <Tabs 
          value={value} 
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
          >
          <Tab value="home" label="Home"/>
          <Tab value="todo" label="Todo-list"/>
        </Tabs>
      </AppBar>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          { value === 'home' && <h1>HOME</h1> }
          { value === 'todo' && <TodoList/>   }
        </div>
      </LocalizationProvider>
    </Fragment>
  );
}