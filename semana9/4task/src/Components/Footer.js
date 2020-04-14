import React from 'react';
import styled from 'styled-components';

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
const Link = styled.p`
font-size: 16px;
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
                <Buttons>Todas</Buttons>
                <Buttons>Mostrar Pendentes</Buttons>
                <Buttons>Mostrar completas</Buttons>
            </ButtonActions>
        );
    }
}
export default Footer;