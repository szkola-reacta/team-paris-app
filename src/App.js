import React from 'react';

import { Header } from 'components';
import './App.css';
import Form from 'components/Form/Form';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <CustomDatePicker />
    </div>
  );
}

export default App;
