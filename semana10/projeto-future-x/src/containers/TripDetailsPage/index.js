import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { replace, push } from "connected-react-router";
import { routes } from "../Router"
import { tripDetails } from "../../Actions/tripDetails";
import Button from '@material-ui/core/Button'



const Title = styled.h1`
    color: #686de0;
    font-size: 35px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;
    width: 60%;
    border-bottom: solid 0.5px #ff6f00;
    border-top: solid 0.5px #ff6f00;

`

const TripCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const InfoBox = styled.div`
width: 300px;
border: 1px solid black;
margin-top: 10px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
margin: auto;
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

const Background = styled.div`
background-color: #f0f1f2;
 `

class TripDetailsPage extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem("token");

        if (token === null) {
            this.props.goToLoginScreen();
        }
        this.props.tripDetails(this.props.tripId, localStorage.getItem("token"))

    }
    render() {
        const { detailsTrip } = this.props;
        const { goToListTripsScreen } = this.props;
        return (
            <Background>
                <Container>
                    <Options>
                        <TripCards>
                        <Title>Candidatos</Title>
                            <InfoBox>

                                <p>
                                    <b>Nome da viagem: </b>
                                    {detailsTrip.name}
                                </p>
                                <p>
                                    <b>Planeta: </b>
                                    {detailsTrip.planet}
                                </p>
                                <p>
                                    <b>Data: </b>
                                    {detailsTrip.date}
                                </p>
                                <p>
                                    <b>Candidatos:</b>
                                </p>
                                {detailsTrip.candidates &&
                                    detailsTrip.candidates.map((candidates) => {
                                        return (
                                            <div>
                                                <p>{candidates.name},{candidates.age},{candidates.country}</p>
                                            </div>
                                        )
                                    })}
                            </InfoBox>
                            <br/>
                            <Button
                            onClick={goToListTripsScreen}
                            variant="contained"
                            color="secondary">VOLTAR</Button>
                        </TripCards>
                    </Options>
                </Container>
            </Background>
        )
    }
}

const mapStateToProps = state => ({
    tripId: state.tripDetails.tripId,
    detailsTrip: state.tripDetails.tripDetails
})
const mapDispatchToProps = (dispatch) => {
    return {
        goToLoginScreen: () => dispatch(replace(routes.login)),
        goToListTripsScreen: () => dispatch(push(routes.tripsList)),
        tripDetails: (id, token) => (dispatch(tripDetails(id, token)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);