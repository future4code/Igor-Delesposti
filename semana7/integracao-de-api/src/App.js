import React from 'react';
import axios from 'axios';
import Form from './Components/Form'
import Users from './Components/Users'
import styled from 'styled-components'

const ButtonTrocaTela = styled.button`


  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: black;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: whitesmoke;
  overflow: hidden;
  transition: color 0.4s ease-in-out;


::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

:hover {
  cursor: pointer;
  color: #161616;
}

:hover::before {
  transform: translate3d(100%, 100%, 0) scale3d(30, 30, 30);
}


`

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
      (<Form><ButtonTrocaTela onClick={this.mudaTela}>Ir para página de lista</ButtonTrocaTela></Form> 
      ) : (
      <Users><ButtonTrocaTela onClick={this.mudaTela}>Ir para página de registro</ButtonTrocaTela></Users>)}
      
    </div>
  );
}  
}

export default App;
