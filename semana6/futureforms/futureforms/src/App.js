import React from 'react';
import './App.css';
import DadosGerais from './Components/DadosGerais/DadosGerais'
import InfoEducacional from './Components/InfoEducacional/InfoEducacional';
import InfoGeraisEnsino from './Components/InfoGeraisEnsino/InfoGeraisEnsino';
import EtapaFinal from './Components/EtapaFinal/EtapaFinal'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      etapa: 0
    }
  }
  
  somaClicks = () => {
    const proximaEtapa = this.state.etapa + 1

    this.setState({
      etapa: proximaEtapa
    })
  }

  render() {

    let etapaJsx 

    switch (this.state.etapa){
      case 0:
        etapaJsx = <DadosGerais />
      break;
      
      case 1:
        etapaJsx = <InfoEducacional />
      break;  

      case 2:
        etapaJsx = <InfoGeraisEnsino />
      break; 
      
      
    }   

    return (
      <div className="App">
        {etapaJsx}
        <br/><br/>
        { this.state.etapa < 3 ? <button onClick={this.somaClicks}>Próxima Etapa</button> 
        : <EtapaFinal /> }
      </div>
    );
  }  
}

export default App;
