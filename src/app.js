import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/app';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from './components/pages/home';
import PostsIndex from './components/pages/posts_index';
import PostsNew from './components/pages/posts_new';
import PostsShow from './components/pages/posts_show';

import WeatherShow from './components/pages/weather_show';

import './assets/scss/app.scss';
import 'jquery';
import 'bootstrap'; 
import 'bootstrap/scss/bootstrap.scss';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/posts" component={PostsIndex} />
            <Route path="/weather" component={WeatherShow} />
            <Route exact path="/" component={HomePage} />
          </Switch> 
      </BrowserRouter>  
  </Provider>
  , document.querySelector('.container'));