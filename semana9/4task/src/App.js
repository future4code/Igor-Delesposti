import React from 'react';
import styled from 'styled-components';
import FormContainer from './Components/FormContainer';
import { connect } from "react-redux";
import { addTodo } from "./Actions/actions";

import Paper from '@material-ui/core/Paper'


const MainFormContainer = styled(Paper)`
width: 45.5vw;
margin: 0 auto; 
`

const Titulo = styled.h1`
    color: #B83F45;
    font-size: 65px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;

`

const DivPai = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  
 `


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    
    return (
      <DivPai>
        <Titulo>4Task</Titulo>
        <MainFormContainer>
          <FormContainer />
        </MainFormContainer>
        
      </DivPai>
    )
  }

}
const mapStateToProps = state => {
  return {
    taskText: state.task.taskList
  }

}

const mapDispatchToProps = dispatch => {
  return {
    textList: text => dispatch(addTodo(text))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);