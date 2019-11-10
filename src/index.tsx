import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import './assets/styles/_varialble/color.scss'
import './assets/styles/global.scss'
import Layout from './layouts/pc/Layout'
ReactDOM.render( 
     <Layout/>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
