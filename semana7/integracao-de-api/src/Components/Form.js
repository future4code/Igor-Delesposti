import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;

  div {
    margin-bottom: 15px;
  }
`
const Button = styled.button`

  
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: darkblue;


::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}


`

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputName: "",
            inputEmail: ""
        }
    }


onChangeNome=(event)=>{this.setState({inputName: event.target.value})};

onChangeEmail=(event)=>{this.setState({inputEmail: event.target.value})}

onClickSave = () => {
    console.log(this.state.inputName)
    console.log(this.state.inputEmail)
}

adicionaUsuario = () =>{
    const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
    }

    axios
        .post(
            'https://us-central1-future-apis.cloudfunctions.net/api/users', 
            body,
            {
                headers:{
                    "api-token": "igor-hamilton"
                }
            }
        )
        .then(reponse => {
            alert("Dados Salvos!");
        })
        .catch(error => {
           alert("Alguma coisa está errado.");
        })
    

}
    render(){
        
        return(
            <div>
                {this.props.children}
                <ContainerForm>
                    <label>Nome: </label>
                    <input type="text" onChange={this.onChangeNome}></input><br/>
                    <label>E-mail:</label>
                    <input onChange={this.onChangeEmail}></input><br/>
                    <Button onClick={this.adicionaUsuario}>Salvar</Button>
                </ContainerForm>
                
            </div>
        )
    }
    
}

export default Form;

