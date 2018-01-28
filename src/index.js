import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from './error'
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory} from 'react-router'

ReactDOM.render(

          <Router history={hashHistory}>

             <Route path="/" component={App} />

            <Route path='*' component={Error} />
          </Router>
  , document.getElementById('root'));
registerServiceWorker();
