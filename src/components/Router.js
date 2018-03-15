import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import login from './login';
import App from  '.src/App';


const Router=()=>(
   <BrowserRouter>
   <Switch>
   <Route exact path="/" component={login}/>
   <Route path="/login/loginid" component={App}/>
  </Switch>
 </BrowserRouter>

	);
export default Router;