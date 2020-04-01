import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const TituloLista = styled.h3`
display: flex;
justify-content: center;
`
const ContainerLista = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 10px;
 
`
const Deletar = styled.span`
cursor: pointer;
font-weight: bold;
color: red;
padding-left: 100px;

`

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            usuarios:[]
        }
    }



componentDidMount(){
    this.pegaDadoServidor()
}

pegaDadoServidor=()=>{
    axios.get('https://us-central1-future-apis.cloudfunctions.net/api/users',
    {
        headers:{
        "api-token": "igor-hamilton"
    }
    }
    )
        .then(response=>{
            this.setState({usuarios: response.data.result})
            
    })
        .catch(error=>{
            alert("Algo deu errado")
    })
    }

renderizaDados=()=>{
    const auxiliar=this.state.usuarios.map((elemento)=>{
        return (<ContainerLista 
                    key={elemento.id}>
                    <span>{elemento.name}</span>
                    <Deletar onClick={() => this.deleteUsuario(elemento.id, elemento.name)}>X</Deletar>
                </ContainerLista>)
    })


    return auxiliar;
}

deleteUsuario = (id, name) => {
    axios.delete(
        `https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`, {
            headers: {
                "api-token": "igor-hamilton"
            }
        }
    ).then(()=> {
        alert(name + " foi deletado!")
    }).catch(()=> {
        alert("Não foi possível deletar!")
    })

    
}
    
      
    
    

    render(){
        

        return(
            <div>
                {this.props.children}
                <TituloLista>
                    Usuarios Cadastrados:
                </TituloLista>    
                {this.renderizaDados()}
            </div>
        )
    }
    
}

export default User;