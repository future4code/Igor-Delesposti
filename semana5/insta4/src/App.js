import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const CssDoContainer = styled.div`
display: flex;
width: 50%;
margin: auto;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
`
const CriarPost = styled.div`
display: flex;
width: 50%;
margin: auto;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: yellow;
border: solid 3px purple;
`

class App extends React.Component {
  constructor(props){
    super(props)

    // Inicializa o estado
    this.state = {
      // Lista de posts
      arrayDePosts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Ronaldinho Gaúcho",
        fotoUsuario: "https://jornaldebrasilia.com.br/wp-content/uploads/2019/09/888-ronaldinho-gaucho.jpg",
        fotoPost: "https://ogimg.infoglobo.com.br/in/24292253-d89-53d/FT1086A/652/FBL-PARAGUAY-BRAZIL-JUSTICE-RONALDINHO-GHP4H0O3D.1.jpg"
      },
      {
        nomeUsuario: "Aquiles Priester",
        fotoUsuario: "https://cdn.ocp.news/2018/08/AquilesPriester.jpg",
        fotoPost: "https://www.revide.com.br/media/cache/26/27/26277a68ffad859315d9f284d8e197d0.jpg"
      }
      ],
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }
  }


  adicionaNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [novoPost, ...this.state.arrayDePosts]

    this.setState({ arrayDePosts: novoPosts, 
      valorInputNomeUsuario:"",
      valorInputFotoUsuario:"",
      valorInputFotoPost:""
    });
  }

  onChangeInputNomeUsuario = event => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  

  render () {
    
    const containerDePosts = this.state.arrayDePosts.map((post, index) => {
      return(
        <div className={'app-container'}>
          <Post 
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost= {post.fotoPost}
          key={index}
          />

        </div>
      )
    })

    return(
      <CssDoContainer>
        <CriarPost>
          <h3>Criar Post</h3>
          <input 
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome de Usuário"}
            />

          <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Link foto do Usuário"}
          />

          <input 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"LInk foto do Post"}
          />  
        
        <button onClick={this.adicionaNovoPost}>Postar</button>
        
        </CriarPost>
        <div>{containerDePosts}</div>
      </CssDoContainer>
    )

  }

}

export default App;
  

