import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import { routes } from "../Router"
import styled, { keyframes } from "styled-components";



const colors = keyframes` {
    0% {
        background-position: 0% 50%;
    }

    50%{
        background-position: 100% 50%;
    }

    100%{
        background-position: 0% 50%;
    }
}
`
const BodyGradient = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
width: 100vw;
background: linear-gradient(45deg, black, #142850, #27496d,  #00909e);
background-size: 150% 150%;
animation: ${colors} 13s ease infinite;

`

const Title = styled.h1`
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 5rem;
color: #fff;
border: 3px solid #fff;
padding: 2rem 4rem;

`
const ButtonLogin = styled.button`
color: #f7f1e3;
width: 150px;
padding: 10px 20px;
margin-top: 30px;
background: transparent;
border-radius: 30px;
box-shadow: 0 0 4px #fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;

:hover{
  cursor: pointer;
  box-shadow: 0 0 10px #18dcff;
}
`
const ButtonAdm = styled.button`
color: #f7f1e3;
width: 150px;
padding: 10px 20px;
margin-top: 30px;
background: transparent;
border-radius: 30px;
box-shadow: 0 0 4px #fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;


:hover{
  cursor: pointer;
  box-shadow: 0 0 10px red;
}
`
const Div = styled.div`
display: flex;
width: 30%;
flex-direction: row;
justify-content: space-evenly;

`

class HomePage extends React.Component {

    render() {
        return (

            <BodyGradient>
                <Title>Bem vindo ao FutureX</Title>
                <br /><br />
                <Div>
                    <ButtonLogin size="large" variant="contained" color="primary" onClick={this.props.goToFormScreen}>Inscrição</ButtonLogin>
                    <ButtonAdm size="large" variant="contained" color="secondary" onClick={this.props.goToLoginScreen}>Administrador</ButtonAdm>
                </Div>
            </BodyGradient>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToFormScreen: () => dispatch(push(routes.applicationForm)),
        goToLoginScreen: () => dispatch(push(routes.login))
    }
}
export default connect(null, mapDispatchToProps)(HomePage);


