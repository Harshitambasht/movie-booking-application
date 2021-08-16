import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./screens/Home/Home"
import BookShow from './screens/bookshow/BookShow';
import Confirmation from './screens/confirmation/Confirmation';
import Details from './screens/Details/Details';

ReactDOM.render(
  <BrowserRouter>
   
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route path="/bookshow" component={BookShow} />
      <Route path="/confirm/" component={Confirmation} />
      
      
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
