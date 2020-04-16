import React from 'react';
import styled from 'styled-components';
import FormContainer from './Components/FormContainer';
import { connect } from "react-redux";
import { addTodo } from "./Actions/actions";

import Paper from '@material-ui/core/Paper'


const MainFormContainer = styled(Paper)`
width: 45.5vw;
/* margin: 0 auto;  */
`

const Titulo = styled.h1`
    color: #f5f6fa;
    font-size: 65px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;
    width: 30%;
    border-bottom: solid 0.5px #ff6f00;
    border-top: solid 0.5px #ff6f00;

`

const DivPai = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  
  background-color: #2f3640;
  max-width: 1000px;
  margin: auto;
  
 `

 const Header = styled.div`
 height: 5vh;
 background:linear-gradient(208.07deg,#FF914D,#FF500F);
 `
const DivMain = styled.div`
background:linear-gradient(208.07deg,#FF914D,#FF500F);
width: 100%;
height:100%;

`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {

    return (
      <DivMain>
        <Header></Header>
        <DivPai>
          <br/><br/><br/>
          <Titulo>4-Task</Titulo>
          <MainFormContainer>
            <FormContainer />
          </MainFormContainer>

        </DivPai>
      </DivMain>

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