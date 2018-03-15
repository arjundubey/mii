import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import NotFound from '.component/NotFound';

const Router=()=>(
   <BrowserRouter>
  
    <Switch>
<Route exact path="/"  component={login}/>
<Route path="/login/:loginid" component={App}/>
<Route path="/login/:loginid" component={Not Found}/>
    </Switch>


   </BrowserRouter>
	)

export default LoginForm;