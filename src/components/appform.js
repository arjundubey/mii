import React, { Component } from 'react';

class AppForm extends Component{
	state={
       Firstname:'',
        Lastname:'',
        Username:'',
        Password:'',
        email:'',

  };
  change=e=>{
         this.setState({

         [e.target.name]:e.target.value


         });
  };
  onSubmit = e=>{
    console.log(this.state)
    e.preventDefault();
    this.props.onSubmit(this.state);
    
   
  }

   render(){
      
       return(
       	<form>
         <input
         name='Firstname'
          placeholder='Firstname' 
         value={this.state.Firstname} 
         onChange={e=>this.change(e)}
         /> 
            <br />

         <input 
           name='Lastname'
          placeholder='Lastname'
          value={this.state.Lastname}
           onChange={e=>this.change(e)}
           />
         <br />
         <input 
          name='Username'
         placeholder='Username' 
         value={this.state.Username} 
          onChange={e=>this.change(e)}
         />
            <br />
         <input 
         name='Password'
         placeholder='Password' 
         value={this.state.Password} 
         type='Password' 
          onChange={e=>this.change(e)}
         />
             <br />
          <input 
         name='email'
         placeholder='email' 
         value={this.state.email} 
          onChange={e=>this.change(e)}
           />
                <br />
                <button onClick={e =>this.onSubmit(e)} > Submit</button>


       	</form>
       	);
   


   }
}

export default AppForm;