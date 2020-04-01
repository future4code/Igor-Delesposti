import React from 'react';
import axios from 'axios';
import Form from './Components/Form'
import Users from './Components/Users'
import styled from 'styled-components'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      qualTela: true
    }
  }  

mudaTela = () =>{
  this.setState({qualTela: !this.state.qualTela})
}
  render(){
  return (
    <div className="App">
      
      {this.state.qualTela ? 
      (<Form><button onClick={this.mudaTela}>Ir para página de lista</button></Form> 
      ) : (
      <Users><button onClick={this.mudaTela}>Ir para página de registro</button></Users>)}
      
    </div>
  );
}  
}

export default App;
