import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class ListTripsPage extends React.Component {

    render() {
        return (
            <div>
                <p>Lista das viagens</p>
                <button onClick = {this.props.goToCreateTripScreen}>Criar Viagem</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToCreateTripScreen: () => dispatch(push(routes.tripsCreate))
    }
}
  
  

export default connect(null, mapDispatchToProps)(ListTripsPage);