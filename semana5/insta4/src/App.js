import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Ronaldinho Gaúcho'}
          fotoUsuario={'https://jornaldebrasilia.com.br/wp-content/uploads/2019/09/888-ronaldinho-gaucho.jpg'}
          fotoPost={'https://ogimg.infoglobo.com.br/in/24292253-d89-53d/FT1086A/652/FBL-PARAGUAY-BRAZIL-JUSTICE-RONALDINHO-GHP4H0O3D.1.jpg'}
        />
         <Post
          nomeUsuario={'Aquiles Priester'}
          fotoUsuario={'https://lh3.googleusercontent.com/proxy/oqD7rPR7EKfCAwrr-mR9vg8oJLUDcR-JviWuIsDg5bOLYVtQ3ZTr0HxbrBczp1lJ9TXkUjcbAH4c_5z7rxSija0fmC3DjatTWO9KVaVsoy_o3v57mivAY1t6IF10SzDM'}
          fotoPost={'https://www.revide.com.br/media/cache/26/27/26277a68ffad859315d9f284d8e197d0.jpg'}
        />
      </div>
    );
  }
}

export default App;
