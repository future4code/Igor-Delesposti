import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../../Actions/tripDetails"
import Button from "@material-ui/core/Button";

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
}    
    render() {
        return (

            <TripCards>
                <p>Lista das viagens</p>
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
                                onClick={() => {this.handleTripId(trips.id)}}>Detalhes</Button>
                            </InfoBox>
                        )
                    })}
                <Button 
                onClick={this.props.goToCreateTripScreen}
                variant="contained"
                color="primary">Criar Viagem</Button>
            </TripCards>
            
        )
    }
}
const mapStateToProps = state => ({
    trips: state.tripDetails.trips
})
const mapDispatchToProps = dispatch => {
    return {
        getTrips:() => dispatch(getTrips()),
        goToCreateTripScreen: () => dispatch(push(routes.tripsCreate)),
        goToLoginScreen: () => dispatch(replace(routes.login))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);