import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: #686de0;
    font-size: 35px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;
    width: 73%;
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
class CreateTripPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createForm: {}
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.createForm);

        this.setState({ createForm: {} })
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
                        <label>Nome da viagem:</label>
                        <input
                            name="name"
                            required
                            type="text"
                            pattern="[A-Za-z çÇãéá]{5,}"
                            title="O nome da viagem deve conter no mínimo 5 letras"
                            onChange={this.handleInputChange}
                            value={this.state.createForm.name}
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

                        <label>Data:</label>
                        <input
                            name="date"
                            required
                            type="date"
                            title="Deve ser uma data no futuro"
                            onChange={this.handleInputChange}
                            value={this.state.createForm.date}
                            min="22-04-2020"
                            max="22-04-2021"
                        />

                        <label>Descrição da viagem</label>
                        <input
                            name="description"
                            required
                            type="text"
                            pattern="[A-Za-z çÇãéá]{30,}"
                            title="O nome deve conter no mínimo 30 letras"
                            onChange={this.handleInputChange}
                            value={this.state.createForm.description || ""}
                        />

                        <label>Duração em dias:</label>
                        <input
                            name="durationInDays"
                            required
                            type="number"
                            min="50"
                            onChange={this.handleInputChange}
                            value={this.state.createForm.durationInDays}
                        />


                        <button type="submit">Criar</button>
                    </MySpecialForm>
                    </Options>
                </Container>
            </Background>


        )
    }
}


export default CreateTripPage;