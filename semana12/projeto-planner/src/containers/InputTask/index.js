import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createTask } from "../../actions/tasks"
import styled from "styled-components"

export const Container = styled.div`
width: 35vw;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-bottom: 28px;
border-top: solid 1px #0fbcf9;
padding: 8px;
border-bottom: solid 1px #0fbcf9;
`

export const Select = styled.select`
height: 55px;
background: transparent;
border-radius: 4px;
`
class InputPlanner extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        taskValue: {
            text:"",
            day: "",
        }
      }
    }
  
    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            taskValue: {...this.state.taskValue, [name]: value}
        })
    }
    
    handleCreateTask = (event) => {
        event.preventDefault()
        console.log(this.state.taskValue)
        this.props.createTask(this.state.taskValue)
        this.setState({
            taskValue: { text: "", day: ""}
        })

        
    }
  
  
    render() {
      return (
        <Container>
          
          <TextField
            name="text"
            type="text"
            label="Tarefa"
            variant="outlined"
            onChange={this.handleInputChange}
            value={this.state.taskValue.text}
          />
          <br/><br/>
          <Select
            placeholder="Dia da semana"
            name="day"
            onChange={this.handleInputChange}
            value={this.state.taskValue.day}
          >
            <option>Selecione um dia da semana</option>
            <option>Segunda</option>
            <option>terca-feira</option>
            <option>quarta-feira</option>
            <option>quinta-feira</option>
            <option>sexta-feira</option>
            <option>sabado</option>
            <option>domingo</option>

          </Select>
          <br/><br/>
          <Button 
          variant="contained" 
          color="secondary"
          size="large"
          onClick={this.handleCreateTask}
          >Cadastrar</Button>
        </Container>
      )
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({
    createTask: (body) => dispatch(createTask(body))
  })
  
  export default connect(null, mapDispatchToProps)(InputPlanner);