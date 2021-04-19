import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';

import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
    apiKey: "AIzaSyAwVOZte_lwlUx8PuZuJ0jinXpqWxlSi5s",
    authDomain: "booking-54031.firebaseapp.com",
    projectId: "booking-54031",
    storageBucket: "booking-54031.appspot.com",
    messagingSenderId: "704511321367",
    appId: "1:704511321367:web:e0661eae6ebb83d291c352",
    databaseURL: "https://booking-54031-default-rtdb.firebaseio.com/",
});

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
