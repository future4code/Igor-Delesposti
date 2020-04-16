import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import AddMusica from './AddMusica';


const Container = styled.div`

background-color: black;
`
const Span = styled.span`
color: white;
font-size: 15px;
`
const MainContainerList = styled.div`
padding: 0;
margin: auto;
height: 100vh;
max-width: 900px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #353b48;
`
const TituloLista = styled.h2`
display: flex;
justify-content: center;
color: white;
`
const ContainerLista = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid white; 
  width: 27vw;
  margin: 0 auto;
  padding: 10px;
 
`
const Deletar = styled.span`
cursor: pointer;
font-weight: bold;
color: red;
padding-left: 100px;
`

const ButtonAdicionaMusica = styled.button`
cursor: pointer;
font-weight: bold;
font-size: 10px;
height: 25px;
color: white;
background-color: #44bd32;
border-radius: 10px;
border: none;
`

class ListarPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            musicaAdicionada: "",
            idMusica: ""
        }
    }

    componentDidMount() {
        this.buscarPlaylists()
    }

    buscarPlaylists = () => {

        axios.get('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists',
            {
                headers: {
                    'Content-Type': 'application/json',
                    "auth": "igor-hamilton"
                }
            }).then(response => {
                this.setState({ list: response.data.result.list })
            }).catch((error) => {
                alert("Erro ao carregar sua lista de playlists.")
            })

    }

    onClickComponente = (id) => {
        this.setState({
            musicaAdicionada: !this.state.musicaAdicionada,
            idMusica: id

        })
    }

    renderDados = () => {
        const playlistMapeada = this.state.list.map((playlist) => {
            return (
                <ContainerLista key={playlist.id}>
                    <Span>{playlist.name}</Span>
                    <Deletar onClick={() => this.deletarPlaylist(playlist.id, playlist.name)}>X</Deletar>
                    <ButtonAdicionaMusica onClick={() => this.onClickComponente(playlist.id)}>Adicionar Musica</ButtonAdicionaMusica>
                </ContainerLista>
            )
        })

        return playlistMapeada;

    }

    deletarPlaylist = (id, name) => {
        axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'auth': 'igor-hamilton'

                }

            }).then((response) => {
                alert("Playlist " + name + " foi deletada com sucesso!")
                this.componentDidMount()
            }).catch((error) => {
                alert("Ocorreu um erro ao deletar a playlist.")
            })
    }

    render() {
        return (
            <MainContainerList>
                {this.props.children}
                
                <Container>
                    <TituloLista>
                        <h2>Suas Playlists</h2>
                    </TituloLista>
                    {this.renderDados()}
                    {this.state.musicaAdicionada && <AddMusica minhaprop={this.state.idMusica}/>}
                </Container>
                
            </MainContainerList>
        )

    }
}

export default ListarPlaylist;
