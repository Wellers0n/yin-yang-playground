import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './App.css'

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);