import React, {Fragment, useState} from 'react';
import './App.css';
import Carlist from './components/Carlist';

export default function App() {
const [value, setValue] = useState('home');

  const handleChange = (_, val) => {
    setValue(val);
  }

  return (
    <Fragment>
      <Carlist />
    </Fragment>
  );
}