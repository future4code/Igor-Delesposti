import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import { addTodo } from "../Actions/actions";
import { connect } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';

const DeleteTask = styled(CloseIcon)`
color: red;
`
const DivTask = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`

const FormInputBox = styled(TextField)`
width: 50%;
`
const FormBox = styled.div`
  display: block;
  justify-content: center;
  width:100%;
  box-shadow: 2px 4px 4px 0 rgba(0,0,0,.2), 0 25px 50px 0 rgba(0,0,0,.1);
`


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTask: ""
        }
    }

    onChangeInput = (event) => {

        this.setState({ inputTask: event.target.value })
    };

    onKeyDownEnter = (event) => {
        if (event.key === "Enter") {
            this.props.addTodo(this.state.inputTask)
            this.setState({ inputTask: "" })
        }
    }

    renderAllTasks = () => {
        const allTasks = this.props.taskList.map((task, index) => {
            return (
                <DivTask key={index}>
                    <p>{task.text}</p>
                    <DeleteTask />
                </DivTask>
            )
        })
        return allTasks;
    }

    render() {
        console.log(this.state.inputTask)
        return (
            <FormBox>
                <br/>
                <FormInputBox
                    id="outlined-basic"
                    variant="outlined"
                    label="Qual tarefa quer cadastrar ?"
                    onChange={this.onChangeInput}
                    onKeyDown={this.onKeyDownEnter}
                    value={this.state.inputTask}
                />
                <div>
                    {this.renderAllTasks()}
                </div>



                <Footer />
            </FormBox>


        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text))
    }
}

const mapStateToProps = (state) =>{
    return{
        taskList: state.task.taskList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);