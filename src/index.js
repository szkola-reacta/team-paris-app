import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

import './index.css';
import App from './App';

const Link = {
    baseStyle: {
        borderRadius: 0,
        border: "1px solid",
        borderColor: "blue.500",
        cursor: "pointer",
        fontWeight: 400,
        _hover: {bgColor: "blue.400", textDecoration: "none"}
    },
    sizes: {
        sm: {
            height: "36px",
            fontSize: "md",
            lineHeight: "36px",
            padding: "0 15px",
            marginLeft: "10px",
        },
    },
    variants: {
        login: {
            backgroundColor: "white",
            color: "blue.500",
        }
    },
    defaultProps: {
        size: "sm",
        variant: "login",
    },
};

const theme = extendTheme({
    colors: {
        blue: {
            400: "#BAD4F7",
            500: "#0071C2",
            600: "#003580",
            700: "#00224F",
        },
        gray: {
            100: "#BDBDBD",
            150: "#6B6B6B",
            200: "#DDDFE2",
        },
    },
    components: {
        Link
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> feature/contact-form
