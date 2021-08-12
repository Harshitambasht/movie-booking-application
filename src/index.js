import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from "./common/Details/Details";
import Home from "./screens/Home/Home"

ReactDOM.render(
  <BrowserRouter>
    
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
      
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
