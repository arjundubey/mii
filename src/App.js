import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppForm from './components/appform';
import LoginForm from './components/login';

class App extends Component {

  onSubmit=(fields)=>{
    console.log('app comp got:', fields);
  };
   onSubmit=(fields1)=>{
    console.log('app comp got:', fields1);
  };
  render() {
    return (
      <div className="App">

        <AppForm onSubmit={fields=>this.onSubmit(fields)
         }/>
         <LoginForm onSubmit1={fields1=>this.onSubmit(fields1)}/>

      </div>
    );
  }
}

export default App;
