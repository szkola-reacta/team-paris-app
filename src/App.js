<<<<<<< HEAD
import React from "react";

import './App.css';
import {Header} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
=======
import './App.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Form from './components/Form/Form';

const theme = extendTheme({
  colors: {
    blue: {
      500: '#0071c2',
      600: '#003580',
    },
    gray: {
      200: '#dddfe2',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Form />
    </ChakraProvider>
  );
}

export default App;
>>>>>>> feature/contact-form
