import React, { Component } from 'react';
import LoginForm from './components/login';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import App from './App';


const Router=()=>(
   <BrowserRouter>
  
    <Switch>
<Route exact path="/"  component={LoginForm}/>
<Route path="/login" component={LoginForm}/>
     </Switch>


   </BrowserRouter>
	);

export default Router;