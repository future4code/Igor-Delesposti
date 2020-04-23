import React from 'react';
import styled from "styled-components";
import { CountryDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import { getTrips } from "../../Actions/tripDetails";
import { applyToTrip } from "../../Actions/tripDetails"



const Titulo = styled.h1`
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
        this.setState({form: ""})
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
                            <Titulo>FutureX</Titulo>
                            <label>Primeiro Nome:</label>
                            <input
                                name="name"
                                required
                                type="text"
                                pattern="[A-Za-z çÇãéá]{3,}"
                                title="O nome deve conter no mínimo 3 letras"
                                onChange={this.handleInputChange}
                                value={this.state.form.name || ""}
                            />
                            <label>Idade:</label>
                            <input
                                name="age"
                                required
                                type="number"
                                min="18"

                                onChange={this.handleInputChange}
                                value={this.state.form.age || ""}
                            />
                            <label>Porque você deve ser escolhido?</label>
                            <input
                                name="applicationText"
                                required
                                type="text"
                                pattern="[A-Za-z çÇãéá]{30,}"
                                title="O nome deve conter no mínimo 30 letras"
                                onChange={this.handleInputChange}
                                value={this.state.form.applicationText || ""}
                            />
                            <label>Profissão:</label>
                            <input
                                name="profession"
                                required
                                type="text"
                                pattern="[A-Za-z çÇãéá]{10,}"
                                title="O nome deve conter no mínimo 10 letras"
                                onChange={this.handleInputChange}
                                value={this.state.form.profession || ""}
                            />
                            <label>País:</label>
                            <CountryDropdown
                                required
                                onChange={(val) => this.handleSelectCountry(val)}
                                value={this.state.form.country}
                            >

                            </CountryDropdown>


                            <label>Selecione qual viagem: </label>
                            <select onChange={this.handleSelectTrip} >
                                <option value="nenhum">Nenhum</option>
                                {this.props.trips && this.props.trips.map(trip => {
                                    return (
                                        <option key={trip.id} value={trip.id}>
                                            {trip.name} - {trip.planet}
                                        </option>
                                    );
                                })}
                            </select>


                            <button type="submit">Enviar</button>



                        </MySpecialForm>
                    </Options>
                </Container>
            </Background>

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

// import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/TextField';

// const styles = theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//         width: 200,
//     },
//     dense: {
//         marginTop: 19,
//     },
//     menu: {
//         width: 200,
//     },
// });

// const Container = styled.div`
// width: 100%;
// height: 90vh;
// display: flex;
// justify-content: center;
// margin: auto;
// `

// const Options = styled.div`
// width: 25%;
// height: 70%;
// padding: 1vw;
// margin: 2vw;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// border-radius: 20px;
// box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
// background-color: white;
// align-items: center;
// `

// const Background = styled.div`
// background-color: #f0f1f2;
//  `

// const Text = styled(Input)`
// margin-top: 20px;
// `
// const Titulo = styled.h1`
//     color: #686de0;
//     font-size: 35px;
//     font-weight: 100;
//     font-family: Arial, Helvetica, sans-serif;
//     margin-top: 6px;
//     margin-bottom: 30px;
//     width: 30%;
//     border-bottom: solid 0.5px #ff6f00;
//     border-top: solid 0.5px #ff6f00;

// `

// class ApplicationForm extends React.Component{

//     render(){


//         return(
//             <Background>
//                 <br/><br/><br/><br/><br/>
//                 <Container>
//                     <Options>
//                         <Titulo>FutureX</Titulo>
//                         <Text  label="Nome" variant="outlined"  />
//                         <Text  label="Idade" type="number" variant="outlined" />
//                         <Text  label="Porque você?" type="text" variant="outlined" />
//                         <Text  label="País de origem" variant="outlined" />
//                         <Text  label="Viagem" variant="outlined" />



//                         <Button  variant="contained" color="secondary">Enviar</Button>

//                     </Options>


//                 </Container>
//             </Background>
//         )
//     }
// }

// // TextFields.PropTypes = {
// //     classes: PropTypes.object.isRequired
// // }
// export default ApplicationForm;