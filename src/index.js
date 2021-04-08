import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Link = {
    baseStyle: {
        borderRadius: 0,
        border: "1px solid",
        borderColor: "steelblue",
        cursor: "pointer",
        fontWeight: 400,
        _hover: {bgColor: "lightblue", textDecoration: "none"}
    },
    hover: {backgroundColor: "orange"},
    sizes: {
        sm: {
            height: "36px",
            fontSize: "14px",
            lineHeight: "36px",
            padding: "0 15px",
            marginLeft: "10px",
        },
    },
    variants: {
        login: {
            backgroundColor: "white",
            color: "steelblue",
        }
    },
    defaultProps: {
        size: "sm",
        variant: "login",
    },
};

const theme = extendTheme({
    colors: {
        navy: "#033a80",
        steelblue: "#1f82c9",
        lightblue: "#e5ffff"
    },
    container: {
        width: "90%",
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
