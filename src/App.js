import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppForm from './components/appform';
class App extends Component {

  onSubmit=(fields)=>{
    
  };
  render() {
    return (
      <div className="App">
        <AppForm onSubmit={fields=>this.onSubmit(fields)
         }/>


      </div>
    );
  }
}

export default App;
