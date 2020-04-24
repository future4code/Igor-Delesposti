import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../Actions/tripDetails";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;



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

      <Fragment>
        <LoginWrapper onSubmit={this.handleLogin}>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            required
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            required
          />
          <Button type="submit">Login</Button>
          <Button onClick={goToHomeScreen}>Voltar</Button>
        </LoginWrapper>
         
      </Fragment>
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
