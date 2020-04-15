import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setFilter } from '../Actions/actions'

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
font-size: 10px;
border: none;
:hover{
    text-decoration: underline;
    cursor: pointer;
}
`

const Buttons = styled.button`
border: none;
padding: 3px 7px;
background-color: white;
cursor: pointer;


:hover{
    
    border: #f7d794 0.2px solid;
    
}
:focus{
    
    border: orange 0.2px solid;
    outline: none; 
    
}
`
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ButtonActions>
                <Link>Marcar todas como completas</Link>
                <Buttons onClick={()=>this.props.setFilter("none")}>Todas</Buttons>
                <Buttons onClick={()=>this.props.setFilter("pending")}>Mostrar Pendentes</Buttons>
                <Buttons onClick={()=>this.props.setFilter("complete")}>Mostrar completas</Buttons>
            </ButtonActions>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setFilter: filter => dispatch(setFilter(filter))
    }
}
  

export default connect (null, mapDispatchToProps)(Footer);