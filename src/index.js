import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import './index.css';
import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyAwVOZte_lwlUx8PuZuJ0jinXpqWxlSi5s",
    authDomain: "booking-54031.firebaseapp.com",
    projectId: "booking-54031",
    storageBucket: "booking-54031.appspot.com",
    messagingSenderId: "704511321367",
    appId: "1:704511321367:web:e0661eae6ebb83d291c352",
    databaseURL: "https://booking-54031-default-rtdb.firebaseio.com/",
});

const theme = extendTheme({
    colors: {
        navy: "#033a80",
        steelblue: "#1f82c9",
        lightblue: "#e5ffff",
        darkred: "#df4731",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
        <App/>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);