import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Header from './Header/header'
import Famous from './FamousPerson/famous'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />,document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('textbody'));
ReactDOM.render(<Famous />, document.getElementById('famousPeople'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
