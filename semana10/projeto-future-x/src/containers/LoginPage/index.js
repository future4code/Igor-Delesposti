import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import styled from "styled-components";
import { login } from "../../Actions/tripDetails";
import BannerImg from "../../image/foto13.jpg"



const Tittle = styled.h1`
color: #ffb142;
font-size: 40px;
font-weight: 100;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Helvetica, sans-serif;
margin-top: 6px;
margin-bottom: 30px;
width: 100%;
border-bottom: solid 0.5px #f7f1e3;
border-top: solid 0.5px #f7f1e3;
letter-spacing: 1px;

`

const Body = styled.div`
padding: 0;
margin: 0;

`

const Banner = styled.img`
position:fixed;
z-index: -1;
right: 0;
bottom: 0; 
width: 100vw;
height: 100vh;
`

const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`

const LoginWrapper = styled.form`
height: 500px;
width: 400px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
background: rgba(0, 0, 0, 0.4);
box-shadow: 0 0 10px rgba(0,0,0,1);
color: #fff;
padding-top: 60px;
`


const InputField = styled.input`
color: white;
width: 250px;
height: 40px;
margin-top: 20px;
background: rgba(0, 0, 0, 0.4);
outline: none;
padding: 10px;
font-size: 13px;
border-radius: 30px;
box-shadow: 0 0 4px #fff;
transition: box-shadow 0.5s ease;

::placeholder{
  color: whitesmoke
}
::placeholder:focus{
  color: #fff;

}

:focus{
  box-shadow: 0 0 10px greenyellow;
}
`

const ButtonLogin = styled.button`
color: #f7f1e3;
width: 150px;
padding: 10px 20px;
margin-top: 30px;
background: rgba(0, 0, 0, 0.4);
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
const ButtonBack = styled.button`
color: #f7f1e3;
width: 150px;
padding: 10px 20px;
margin-top: 30px;
background: rgba(0, 0, 0, 0.4);
border-radius: 30px;
box-shadow: 0 0 4px #fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;

:hover{
  cursor: pointer;
  box-shadow: 0 0 10px #ff5252;
}
`


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = event => {
    event.preventDefault();

    this.props.login(this.state.email, this.state.password)
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogout = () => {
    localStorage.clear();
  }

  render() {
    const { email, password } = this.state;
    const { goToHomeScreen } = this.props;

    return (
      <Body>
        <Container>
          <LoginWrapper onSubmit={this.handleLogin}>
            <div>
              <Tittle>FutureX</Tittle>
            </div>
            <InputField
              onChange={this.handleFieldChange}
              placeholder="Usuário"
              name="email"
              type="email"
              value={email}
              required

            />

            <InputField
              onChange={this.handleFieldChange}
              placeholder="Senha"
              name="password"
              type="password"
              value={password}
              required
            />

            <ButtonLogin type="submit">Entrar</ButtonLogin>
            <ButtonBack onClick={goToHomeScreen}>Voltar</ButtonBack>
          </LoginWrapper>
        </Container>
        <Banner src={BannerImg} />
      </Body>

    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    goToHomeScreen: () => dispatch(push(routes.root))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
