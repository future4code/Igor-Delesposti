import React from 'react';

import styled from 'styled-components'
import CriarPlaylist from './Components/CriarPlaylist'
import ListarPlaylist from './Components/ListarPlaylist'


const ButtonTrocaTela1 = styled.button`
  border-radius: 30px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #8c7ae6;


::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
  border-radius: 30px;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}
`
const ButtonTrocaTela = styled.button`
 
  border-radius: 30px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #8c7ae6;


::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
  border-radius: 30px;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center left;
  transform: scaleX(1);

`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TelaSelecionada: true
    }
  }

  trocarTela = () => {
    this.setState({ TelaSelecionada: !this.state.TelaSelecionada })
  }


  render() {
    return (
      <div className="App">
        {this.state.TelaSelecionada ?
          (<CriarPlaylist>
              <ButtonTrocaTela onClick={this.trocarTela}>Visualizar Playlists</ButtonTrocaTela>
            </CriarPlaylist>
          ) : (
          <ListarPlaylist> 
            <ButtonTrocaTela1 onClick={this.trocarTela}>Voltar</ButtonTrocaTela1>
          </ListarPlaylist>)}


      </div>
    )

  }
}

export default App;
