import React from 'react';
import styled from "styled-components";
import { CountryDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import { getTrips } from "../../Actions/tripDetails";
import { applyToTrip } from "../../Actions/tripDetails"
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';


const Title = styled.h1`
    color: #686de0;
    font-size: 35px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;
    width: 40%;
    border-bottom: solid 0.5px #ff6f00;
    border-top: solid 0.5px #ff6f00;

`


const Options = styled.div`
width: 25%;
height: 70%;
padding: 1vw;
margin: 2vw;
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
  
select{
    width: 225px;
    height: 50px;
    border-radius: 5px;
    border: solid 1px #c5c5c5;
    padding: 10px;

}
  
   
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




class ApplicationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: { country: "" },
            trip: "",
        }

    }

    componentDidMount() {
        this.props.getTrips()

    }


    handleSelectCountry(val) {
        this.setState({
            form: { ...this.state.form, country: val }
        })
    }

    handleSelectTrip = (event) => {
        this.setState({
            trip: event.target.value

        })
        console.log(event.target.value)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.applyToTrip(this.state.trip, this.state.form)
        this.setState({ form: "" })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        // console.log(name, value);

        this.setState({
            form: { ...this.state.form, [name]: value }
        })
    }

    render() {
        return (
            <Background>

                <Container>

                    <Options>

                        <MySpecialForm onSubmit={this.handleFormSubmit}>
                            <Title>FutureX</Title>
                            <h2>Formulário de inscrição</h2>

                            <Text
                                inputProps={{
                                    pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}",
                                    title: "O nome deve conter no mínimo 3 letras"
                                }}
                                variant="outlined"
                                label="Nome"
                                name="name"
                                required
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.form.name || ""}
                            />

                            <Text
                                inputProps={{ min: 18, max: 100 }}
                                name="age"
                                required
                                type="number"
                                label="Idade"
                                onChange={this.handleInputChange}
                                value={this.state.form.age || ""}
                                variant="outlined"
                            />

                            <Text
                                inputProps={{
                                    pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ.,!?:]{30,}",
                                    title: "O text deve conter no mínimo 30 letras"
                                }}

                                name="applicationText"
                                required
                                type="text"
                                label="Sua descrição"
                                onChange={this.handleInputChange}
                                value={this.state.form.applicationText || ""}
                                variant="outlined"
                            />

                            <Text
                                inputProps={{
                                    pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ.,!?:]{10,}",
                                    title: "O text deve conter no mínimo 10 letras"
                                }}
                                name="profession"
                                required
                                type="text"
                                label="Profissão"
                                onChange={this.handleInputChange}
                                value={this.state.form.profession || ""}
                                variant="outlined"
                            />

                            <CountryDropdown
                                required
                                onChange={(val) => this.handleSelectCountry(val)}
                                value={this.state.form.country}
                            >

                            </CountryDropdown>


                            <label>Selecione qual viagem: </label>
                            <select
                                required
                                value={this.state.trip}
                                onChange={this.handleSelectTrip}
                            >
                                <option value="nenhum">Nenhum</option>
                                {this.props.trips && this.props.trips.map(trip => {
                                    return (
                                        <option key={trip.id} value={trip.id}>
                                            {trip.name} - {trip.planet}
                                        </option>
                                    );
                                })}
                            </select>


                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"

                            >Enviar</Button>



                        </MySpecialForm>
                    </Options>
                </Container >
            </Background >

        )
    }
}

const mapStateToProps = state => ({
    trips: state.tripDetails.trips

})
const mapDispatchToProps = (dispatch) => ({
    getTrips: () => dispatch(getTrips()),
    applyToTrip: (id, form) => dispatch(applyToTrip(id, form))

});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);

