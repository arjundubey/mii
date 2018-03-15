import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router=()=>(
   <BrowserRouter>
  
    <Switch>
<Route exact path="/"  component={login}/>
<Route path="/login/:loginid" component={App}/>
<Route path="/login/:loginid" component={Not Found}/>
    </Switch>


   </BrowserRouter>
	)