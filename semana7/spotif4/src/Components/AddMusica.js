import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const P = styled.p`
color: white;

`

const AdicionandoMusica = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

class AddMusica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTitulo: "",
            inputArtista: "",
            inputUrl: ""
        }
    }

    onchangeInputTitulo = (event) => {
        this.setState({ inputTitulo: event.target.value })
    }

    onchangeInputArtista = (event) => {
        this.setState({ inputArtista: event.target.value })
    }

    onchangeInputUrl = (event) => {
        this.setState({ inputUrl: event.target.value })
    }

    adicionaMusica = () => {
        const body = {
            name: this.state.inputTitulo,
            artist: this.state.inputArtista,
            url: this.state.inputUrl
        }
        axios.post(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.minhaprop}/songs`, body, {
            headers: {
                'Content-Type': 'application/json',
                'auth': 'igor-hamilton'
            }
        }).then((response) => {
            alert(`Música ${this.state.inputTitulo} foi adicionada.`)
            this.setState({
                inputTitulo: "",
                inputArtista: "",
                inputUrl: ""

            })
        }).catch((error)=>{
            alert("Não foi possível adicionar a música.")
        })
    }

    render() {
        return (
            <AdicionandoMusica>
                <P>Título: </P>
                <input
                    type="text"
                    onChange={this.onchangeInputTitulo}
                    value={this.state.inputTitulo}>

                </input>

                <P>Artista: </P>
                <input
                    type="text"
                    onChange={this.onchangeInputArtista}
                    value={this.state.inputArtista} >

                </input>

                <P>Url: </P>
                <input
                    type="text"
                    onChange={this.onchangeInputUrl}
                    value={this.state.inputUrl} >

                </input>
                <br />
                <button onClick={this.adicionaMusica}>Adicionar</button>

            </AdicionandoMusica>
        )
    }

}

export default AddMusica;