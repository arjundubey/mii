import React, { Component } from 'react';

class LoginForm extends React.Component{
	state = { 
        username:'',
        password:'',
        };

    
 onSubmit=(e)=>{
   e.preventDefault();
   
   console.log(this.state);

 };



      render(){
        
          return(
              
              <form>
                <input placeholder='username'                
                   defaultValue={this.state.username}
                 onChange={e=>this.setState({username:e.target.value})}/> <br />

                <input placeholder='password' type='password'  
                 defaultValue={this.state.password} 
                 onChange={e=>this.setState({password:e.target.value})}/>
               
                 <br />
                <button onClick={e=>this.onSubmit(e)}>Submit</button>
               

              </form>


          	);



      }
  }

   export default LoginForm;