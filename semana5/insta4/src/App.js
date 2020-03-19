import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

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
      ]
    }
  }

  render() {
    return(
      this.state.arrayDePosts.map((post, index) => {
        return(
          <div className={'app-container'}>
            <Post 
              nomeUsuario = {post.nomeUsuario}
              fotoUsuario = {post.fotoUsuario}
              fotoPost = {post.fotoPost}
              key={index}
            />
          </div>
        )
      })
    );
  }
}

export default App;
  

