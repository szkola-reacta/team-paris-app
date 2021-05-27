import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CustomDatePicker />
      </div>
    </ChakraProvider>
  );
}

export default App;
