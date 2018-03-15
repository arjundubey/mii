import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

render(<LoginForm>, document.querySelector("#main")); 