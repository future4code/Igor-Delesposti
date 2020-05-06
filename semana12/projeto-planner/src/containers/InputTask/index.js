import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createTask } from "../../actions/tasks"
import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 5px;


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
    
    handleCreatePost = (event) => {
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
          <select
            placeholder="Dia da semana"
            name="day"
            onChange={this.handleInputChange}
            value={this.state.taskValue.day}
          >
            <option>segunda-feira</option>
            <option>terca-feira</option>
            <option>quarta-feira</option>
            <option>quinta-feira</option>
            <option>sexta-feira</option>
            <option>sabado</option>
            <option>domingo</option>

          </select>
          <br/><br/>
          <Button 
          variant="contained" 
          color="primary"
          onClick={this.handleCreatePost}
          >Cadastrar</Button>
        </Container>
      )
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({
    createTask: (body) => dispatch(createTask(body))
  })
  
  export default connect(null, mapDispatchToProps)(InputPlanner);