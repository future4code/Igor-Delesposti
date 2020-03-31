import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputName: "",
            inputEmail: ""
        }
    }


onChangeNome=(event)=>{}
onChangeEmail=(event)=>{}
    

adicionaUsuario = () =>{
    const body = {
        name: "Pagodao",
        email: "pagodao@hotmail.com"
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
        .then(resposta => {
            console.log("Sucesso");
        })
        .catch(error => {
            console.log("Deu ruim");
        })
    

}
    render(){
        this.adicionaUsuario()
        return(
            <div>
                {this.props.children}
                <div>
                    <label>Nome: </label>
                    <input></input><br/>
                    <label>E-mail:</label>
                    <input></input><br/>
                    <button>Salvar</button>
                </div>
                
            </div>
        )
    }
    
}

export default Form;

