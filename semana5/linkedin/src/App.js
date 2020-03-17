import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigCard from './Components/BigCard/BigCard';
import ImageButton from './Components/ImageButton/ImageButton';
import SmallCard from './Components/SmallCard/SmallCard';
import TituloSecao from './Components/TituloSecao/TituloSecao';
import SessaoPagina from './Components/SessaoPagina/SessaoPagina';

function App() {
  return (
    <div className="App">
      
      <SessaoPagina titulo="Dados Pessoais">
        <BigCard img="https://mudominhacasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adesivo-de-parede-escudo-do-botafogo.jpg"
        titulo="Igor Delesposti" texto="Sou estudante do curso F4 - Dev Full-Stack e estou cursando a graduação Sistema de Informações na Estácio de Sá"/>
        

      </SessaoPagina>


    </div>

  );
}

export default App;
