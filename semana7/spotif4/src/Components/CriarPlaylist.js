import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


const Label = styled.label`
color: white;
`
const Tituloh3 = styled.h1`
color: white;
`
const MainContainer = styled.div`
padding: 0;
margin: auto;
height: 100vh;
max-width: 900px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #2f3640;
`

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 30%;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 15px;
  background-color: black;
  
`
const Button = styled.button`
  display: flex;
  color: #f5f6fa;
  margin: 0 auto;
  justify-content: center;
  font-weight: bold;
  width: 100px;
  border-radius: 30px; 
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #4cd137;
  overflow: hidden;
  cursor: pointer;


::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
}

`


class CriarPlayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputName: "",
        }
    }

    onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }

    criandoPlaylist = () => {
        const body = {
            name: this.state.inputName
        }
        axios.post('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', body, {
            headers: {
                'Content-Type': 'application/json',
                'auth': 'igor-hamilton'
            }
        }).then(response => {
            alert(`A playlist ${this.state.inputName} foi criada com sucesso!`);
            this.setState({
                inputName: ''
            })
        }).catch(error => {
            alert("Alguma coisa está errado.")
        })
    }

    render() {
        return (

            <MainContainer>
                {this.props.children}
                        
                        <ContainerForm>
                            <Tituloh3>Criar Playlist:</Tituloh3>
                            <Label>Nome:</Label>
                            <input type="text"
                                onChange={this.onChangeInputName}
                                //Colocar o value para limpar input
                                value={this.state.inputName}
                            ></input>
                            <br/>
                            <Button onClick={this.criandoPlaylist}>Criar</Button>
                        </ContainerForm>
                       

            </MainContainer>

        )

    }
}


export default CriarPlayList;