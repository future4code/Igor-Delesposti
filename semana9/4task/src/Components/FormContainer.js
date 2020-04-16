import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import { addTodo } from "../Actions/actions";
import { connect } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import { deleteTask,  fetchTasks, toggleTask, deleteTodo } from '../Actions/actions';

import Checkbox from '@material-ui/core/Checkbox';

const DeleteTask = styled(CloseIcon)`
color: red;
cursor: pointer;
`
const DivTask = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
background-color: #f5f6fa;

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
const TextTask = styled.p`
color: #596275;
`


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTask: ""
        }
    }
   
    componentDidMount(){
        this.props.fetchTasks()
    }

    showFilter = ()=>{
        switch(this.props.filter){
            case "none":
                return this.renderAllTasks(this.props.taskList)

            case "pending":
                const pendingTaskList = this.props.taskList.filter((task)=>{
                    return (task.complete === false)
                })
                return this.renderAllTasks(pendingTaskList)

            case "complete":
                const completedTaskList = this.props.taskList.filter((task)=>{
                    return (task.complete === true)
                })
                return this.renderAllTasks(completedTaskList);
            default:
                return     
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
    
    
    

    renderAllTasks = (array) => {
        const allTasks = array.map((task, index) => {
            return (
                <DivTask key={index}>
                    <Checkbox 
                        
                        onChange={()=>this.props.toggleTask(task.id)}
                        color="primary"
                    />
                    <TextTask>{task.text}</TextTask>
                    <DeleteTask onClick={()=>this.props.deleteTodo(task.id)} />
                    
                </DivTask>
            )
        })
        return allTasks;
    }

    // deleteTask=(id)=>{
    //     this.props.deleteTask(id)
    // }

    render() {

        console.log(this.props.filter)
        return (
            <FormBox>
                <br />
                <FormInputBox
                    id="outlined-basic"
                    // variant="outlined"
                    label="Qual tarefa quer cadastrar ?"
                    onChange={this.onChangeInput}
                    onKeyDown={this.onKeyDownEnter}
                    value={this.state.inputTask}
                />
                <div>
                    {this.showFilter()}
                </div>



                <Footer />
            </FormBox>


        );
    }
}

//Mapear o estado do redux para as props dos componentes
// ela recebe o estado global do redux e retorna um objeto
//São injetadas como props ex: this.props.taskList
const mapStateToProps = (state) => {
    return {
        taskList: state.task.taskList,
        filter: state.task.filter

    }
}

//mapear ações que usam dispatch
//fazer alterações no estado do redux
//disparar uma ação/pedido de mudança pro estado global do redux
//São injetadas como props ex: this.props.addTodo
const mapDispatchToProps = (dispatch) => {
    return {

        addTodo: text => dispatch(addTodo(text)),
        deleteTask: id => dispatch(deleteTask(id)), 
        fetchTasks: ()=> dispatch(fetchTasks()),
        toggleTask: id => dispatch(toggleTask(id)),
        deleteTodo: id => dispatch(deleteTodo(id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);