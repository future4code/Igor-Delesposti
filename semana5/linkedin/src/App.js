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
        <BigCard img="https://computerworld.com.br/wp-content/uploads/2018/06/desenvolvedor_movile.jpg"
        titulo="Igor Delesposti" texto="Sou estudante do curso F4 - Dev FullStack e estou cursando a graduação Sistema de Informações na Estácio de Sá"/>
        <SmallCard email="igordelesposti@gmail.com" endereco="Rio de Janeiro - RJ"/>
        <ImageButton button="Ver mais" img="https://image.flaticon.com/icons/svg/32/32195.svg" />
        
      </SessaoPagina>

      <SessaoPagina titulo="Experiências Profissionais">
        <BigCard img="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" titulo="Future4" texto="Formação em Dev FullStack. Nesta escola de programação, você só paga o curso quando tiver renda bruta de no mínimo R$ 4 mil."/>
        <BigCard img="https://lh3.googleusercontent.com/proxy/9Jwoqr0Orx-DgwebvPCTnUM70K6vLOdvaop1s2IqvVhniKGn-BJeAydmvFLbiJYCLkWo1iK_eNUfrHIXYkyGfQ7JxT-0qGCUfEYMwucj5KzpQqldcBGYprDHnMVadt89-dGMqPYYOtV9C9AUNAVf3PF1uQ" titulo="Real Madrid" texto="Artilheiro e atacante do time com longa experiência nos campos desse mundão."/>

      </SessaoPagina>

      <SessaoPagina titulo="Minha redes sociais">
        <ImageButton button="Facebook" img="https://image.flaticon.com/icons/svg/124/124010.svg"/>
      </SessaoPagina>


    </div>

  );
}

export default App;
