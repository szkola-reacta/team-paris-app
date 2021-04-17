import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Footer from './components/Footer';

const theme = extendTheme({
  colors: {
    blue: {
      400: '#bad4f7',
      500: '#0071c2',
      600: '#003580',
      700: '#00224f',
    },
    gray: {
      100: '#bdbdbd',
      150: '#6b6b6b',
      200: '#dddfe2',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
