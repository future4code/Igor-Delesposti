import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router"
import { tripDetails } from "../../Actions/tripDetails"

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
        return (
            <TripCards>
                <InfoBox>
                    <b>Detalhes dos candidatos da viagem</b>
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
                                    <p>{candidates.name},{candidates.age}</p>
                                </div>
                            )
                        })}
                </InfoBox>
            </TripCards>
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
        tripDetails: (id, token) => (dispatch(tripDetails(id, token)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);