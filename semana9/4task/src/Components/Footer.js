import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setFilter } from '../Actions/actions'
import { deleteAllTasksComplete } from '../Actions/actions'

const ButtonActions = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    width: 100%;
    padding-left: 10px;
    font-size: 25px;
    height: 65px;
    border: none;
    background-color: white;
    box-sizing: border-box;
`
const Link = styled.button`
font-size: 12px;
border: none;
background-color: white;
:hover{
    text-decoration: underline;
    cursor: pointer;
}
`

const Buttons = styled.button`
border: #7d5fff;
border-radius: 30px;
padding: 3px 7px;
background-color: white;
cursor: pointer;


:hover{
    
    border: #7d5fff 2px solid;
    
}
:focus{
    
    border: #7d5fff 2px solid;
    outline: none; 
    
}
`
const Span = styled.span`
font-weight: bold;
color:#4b4b4b;
`
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ButtonActions>
                {/* <Link><Span>Marcar todas como completas</Span></Link> */}
                <Buttons onClick={()=>this.props.setFilter("none")}><Span>Todas</Span></Buttons>
                <Buttons onClick={()=>this.props.setFilter("pending")}><Span>Mostrar Pendentes</Span></Buttons>
                <Buttons onClick={()=>this.props.setFilter("complete")}><Span>Mostrar completas</Span></Buttons>
                <Buttons onClick={()=>this.props.deleteAllTasksComplete()}><Span>Deletar tarefas completas</Span></Buttons>
                
            </ButtonActions>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setFilter: filter => dispatch(setFilter(filter)),
        deleteAllTasksComplete: () => dispatch(deleteAllTasksComplete())
    }
}
  


export default connect (null, mapDispatchToProps)(Footer);