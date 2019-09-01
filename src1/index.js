import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase'); 
require('firebase/firebase');
 
firebase.initializeApp({
    apiKey: "AIzaSyCMs7Ekjhqvz9afQ8IQCzi5gd79PiVoi2Q",
    authDomain: "noter-ffdfa.firebaseapp.com",
    databaseURL: "https://noter-ffdfa.firebaseio.com",
    projectId: "noter-ffdfa",
    storageBucket: "noter-ffdfa.appspot.com",
    messagingSenderId: "971081571866",
    appId: "1:971081571866:web:2b7f1a4ba50352f8"
  });
  




ReactDOM.render(<App />, document.getElementById('noteapp-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
