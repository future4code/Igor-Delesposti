import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router"

class TripDetailsPage extends React.Component{
    componentDidMount(){
        const token = localStorage.getItem("token");

        if (token === null) {
            this.props.goToLoginScreen();
        }
    }
    render(){
        return(
            <div>Detalhes dos candidatos da viagem</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToLoginScreen: () => dispatch(replace(routes.login))
    }
}
export default connect(null, mapDispatchToProps)(TripDetailsPage);