import React, { useState }  from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export default function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <TodoList/>
      </div>
    </LocalizationProvider>
  );
}