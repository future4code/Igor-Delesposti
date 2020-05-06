import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTasks } from "../../actions/tasks";
import InputTask from "../InputTask";

const Options = styled.div`
width: 70%;
height: 100%;
padding: 15vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: #f5f6fa;
align-items: center;
margin: auto;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
margin-top: 50px;

`
const Background = styled.div`
background-color: #636e72;
`
const TaskCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const InfoBox = styled.div`
width: 300px;
border: 1px solid black;
margin-bottom: 10px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
color: #686de0;
font-size: 35px;
font-weight: 100;
font-family: Arial, Helvetica, sans-serif;
margin-top: 6px;
margin-bottom: 30px;
width: 130px;
border-bottom: solid 0.5px #ff6f00;
border-top: solid 0.5px #ff6f00;
`


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
    return (
      <Background>
        <Container>
          <Options>
            <TaskCards>
              <Title>Planner</Title>
              <InputTask/>
              {this.props.tasks &&
                this.props.tasks.map((tasks)=>{
                  return(
                    <InfoBox>
                      <b>{tasks.text}</b> <p>{tasks.day}</p>
                    </InfoBox>
                  )
                })}
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
