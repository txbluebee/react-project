import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/app';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from './components/pages/home';
import './assets/scss/app.scss';
import 'jquery';
import 'bootstrap'; 
import 'bootstrap/scss/bootstrap.scss';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch> 
      </BrowserRouter>  
  </Provider>
  , document.querySelector('.container'));