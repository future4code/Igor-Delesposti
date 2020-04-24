import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router";
import { createNewTrip } from "../../Actions/tripDetails"

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField'


const Titulo = styled.h1`
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

const Options = styled.div`
width: 25%;
height: 70%;
padding: 1vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: white;
align-items: center;
margin: auto;
`

const MySpecialForm = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  
   
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
margin: auto;

`
const Background = styled.div`
background-color: #f0f1f2;
 `
const Text = styled(Input)`
 margin-top: 20px;
 `


const today = new Date()
const day = today.getDate()
const month = today.getMonth()
const year = today.getFullYear()

const minDate = `${year}-0${month}-${day}`

class CreateTripPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createForm: {}
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token");

        if (token === null) {
            this.props.goToLoginScreen();
        }
    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.props.createNewTrip(this.state.createForm, localStorage.getItem("token"))
        console.log(this.state.createForm)

        this.setState({ createForm: "" })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value);

        this.setState({
            createForm: { ...this.state.createForm, [name]: value }
        })
    }
    render() {


        return (
            <Background>
                <Container>
                    <Options>
                        <MySpecialForm onSubmit={this.handleFormSubmit}>
                            <Titulo>FutureX</Titulo>
                            <h2>Criar viagem</h2>

                            <Text
                                inputProps={{
                                    pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{5,}",
                                    title: "O nome deve conter no mínimo 5 letras"
                                }}
                                variant="outlined"
                                name="name"
                                label="Nome da viagem"
                                required
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.createForm.name}
                            />




                            {/* Não consegui limitar datas */}
                            <Text
                                inputProps={{
                                    min: { minDate },
                                    defaultValue: { minDate },
                                    title: "Deve ser uma data no futuro"
                                }}
                                variant="outlined"
                                name="date"
                                required
                                type="date"
                                title="Deve ser uma data no futuro"
                                onChange={this.handleInputChange}
                                value={this.state.createForm.date}

                            />

                            
                            <Text
                                inputProps={{
                                    pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{30,}",
                                    title: "O nome deve conter no mínimo 30 letras"
                                }}
                                name="description"
                                required
                                type="text"
                                variant="outlined"
                                label="Descrição da viagem"
                                onChange={this.handleInputChange}
                                value={this.state.createForm.description || ""}
                            />

                            <label>Duração em dias:</label>
                            <Text
                                inputProps={{
                                    min: 50,
                                    title: "No mínimo 50 letras"
                                }}
                                name="durationInDays"
                                required
                                type="number"
                                variant="outlined"
                                onChange={this.handleInputChange}
                                value={this.state.createForm.durationInDays}
                            />

                            <label>Planetas:</label>
                            <select
                                name="planet"
                                required
                                onChange={this.handleInputChange}
                                value={this.state.createForm.planet}


                            >
                                <option>Mercúrio</option>
                                <option>Vênus</option>
                                <option>Terra</option>
                                <option>Marte</option>
                                <option>Júpiter</option>
                                <option>Saturno</option>
                                <option>Urano</option>
                                <option>Netuno</option>
                            </select>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                            >Criar</Button>

                        </MySpecialForm>
                    </Options>
                </Container>
            </Background>


        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLoginScreen: () => dispatch(replace(routes.login)),
        createNewTrip: (form, token) => dispatch(createNewTrip(form, token))
    }
}

export default connect(null, mapDispatchToProps)(CreateTripPage);