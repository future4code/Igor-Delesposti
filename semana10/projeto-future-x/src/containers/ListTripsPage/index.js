import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { getTrips, getTripId } from "../../Actions/tripDetails"
import Button from "@material-ui/core/Button";

const Options = styled.div`

width: 25%;
height: 100%;
padding: 15vw;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;
box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
background-color: white;
align-items: center;
margin: auto;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
margin-top: 50px;

`
const Background = styled.div`

background-color: #f0f1f2;

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
margin-bottom: 10px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Title = styled.h1`
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

class ListTripsPage extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem("token");

        if (token === null) {
            this.props.goToLoginScreen();
        }
        this.props.getTrips()
    }
    constructor(props) {
        super(props);
    }

    handleTripId = (id) => {
        console.log(id)

        this.props.goToTripsDetails()
        this.props.getTripId(id)



    }

    handleLogout = () => {
        localStorage.clear();
        // window.location.reload();
        this.props.goToLoginScreen();
    }
    render() {
        const isLogged = localStorage.getItem("token") !== null;
        return (
            <Background>
                <Container>
                    <Options>
                        <TripCards>
                            <Title>FutureX</Title>
                            {this.props.trips &&
                                this.props.trips.map((trips) => {
                                    return (
                                        <InfoBox>
                                            <b>{trips.name}</b> <p>{trips.description}</p>
                                            <p>
                                                <b>Planeta:</b>
                                                {trips.planet}
                                            </p>
                                            <p>
                                                <b>Duração:</b>
                                                {trips.durationInDays}
                                            </p>
                                            <p>
                                                <b>Dia da viagem:</b>
                                                {trips.date}
                                            </p>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => { this.handleTripId(trips.id) }}>Detalhes</Button>
                                        </InfoBox>
                                    )
                                })}
                            <Button
                                onClick={this.props.goToCreateTripScreen}
                                variant="contained"
                                color="primary">Criar Viagem</Button>
                            <br />
                            {isLogged && <Button
                                onClick={this.handleLogout}
                                variant="contained"
                                color="secondary"
                            >Logout</Button>}
                        </TripCards>
                    </Options>
                </Container>
            </Background>

        )
    }
}
const mapStateToProps = state => ({
    trips: state.tripDetails.trips
})
const mapDispatchToProps = dispatch => {
    return {
        getTrips: () => dispatch(getTrips()),
        goToCreateTripScreen: () => dispatch(push(routes.tripsCreate)),
        goToLoginScreen: () => dispatch(replace(routes.login)),
        goToTripsDetails: () => dispatch(push(routes.tripsDetails)),
        getTripId: (id) => dispatch(getTripId(id)),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);