import React, { Component } from 'react';

class LoginForm extends React.Component{
	state = { 
        Username:'',
        Password:'',
        
      };

    




      render(){
        
          return(
              
              <form>
                <input placeholder='Username'                   defaultValue={this.state.Username}/> <br />
                <input placeholder='Password' type='Password'   defaultValue={this.state.Password}/>
                
                 <br />
                <button onClick={e =>this.onSubmit(e)} > Submit</button>
                

              </form>


          	);



      }
  }

   export default LoginForm;