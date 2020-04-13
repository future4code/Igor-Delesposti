import React from 'react';
import styled from 'styled-components';



const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const DivPai = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
 ` 


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [
        
      ],
      inputValue: '',
      filter: ''
    }
  }

  // componentDidMount() {
  //   console.log("Did mount");

  //   const dadosInput = localStorage.getItem("camposInput");
  //   if (dadosInput !== null) {
  //     const dadosObjeto = JSON.parse(dadosInput);

  //     this.setState({tarefas: dadosObjeto})
      
  //   }
  // };

  // componentDidUpdate() {
  //   console.log("Did update");

  //   const objetoASerSalvo = JSON.stringify(this.state.tarefas)
    
  //   localStorage.setItem("camposInput", objetoASerSalvo)
    
  // };

  // onChangeInput = (event) => {
  //   this.setState({inputValue: event.target.value});
  // }

  // criaTarefa = () => {  
  //   const novaTarefa = {
  //     id: Date.now(),
  //     texto: this.state.inputValue,
  //     completa: false
  //   }

  //   const novasTarefas = [...this.state.tarefas, novaTarefa];

  //   this.setState ({tarefas: novasTarefas});

  // };

  // selectTarefa = (id) => {
  //   const aux = this.state.tarefas.map(tarefa => {
  //     if(tarefa.id === id){
  //       tarefa.completa = !tarefa.completa
  //     }
  //     return tarefa
  //   })

  //   this.setState({tarefas: aux})
  // }

  // onChangeFilter = (event) => {
  //   this.setState({filter: event.target.value})
  // }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <DivPai>
        <h1>4Task</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </DivPai>
    )
  }
}

export default App