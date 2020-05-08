import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTasks } from "../../actions/tasks";
import InputTask from "../InputTask";

export const Options = styled.div`
width: 60%;
height: fit-content;
padding: 1vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: #f5f6fa;
align-items: center;
margin: auto;
`
export const Container = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
padding: 20px;

`
export const Background = styled.div`
background-color: #636e72;

`
export const TaskCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const InfoBox = styled.div`
width: 300px;
border: 1px solid black;
margin-bottom: 10px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Title = styled.h1`
color: #686de0;
font-size: 35px;
font-weight: 100;
font-family: Arial, Helvetica, sans-serif;
margin-top: 6px;
margin-bottom: 30px;
width: 125px;
border-bottom: solid 0.5px #ff6f00;
border-top: solid 0.5px #ff6f00;
`

const days = ["Segunda", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado", "domingo"]


class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getTasks()
  }



  render() {
    const{ tasks } = this.props

    const newTaskList = {}

    {tasks[0] && tasks.forEach((task)=>{
      if(newTaskList[task.day]){
        newTaskList[task.day].push(task)
      }else{
        newTaskList[task.day] = [task]
      }
    })}

    console.log(tasks[0])

    return (
      <Background>
        <Container>
          <Options>
            <TaskCards>
              <Title>Planner</Title>
              <InputTask/>
                {days.map((day)=>(
                  <InfoBox>
                  <b>{day}</b>
                  {newTaskList[day] &&
                    newTaskList[day].map((task)=>(
                      <p>{task.text}</p>
                    ))}
                </InfoBox>
                ))}
            </TaskCards>
          </Options>
        </Container>
      </Background>
    )
  }
}
const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks
})

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
