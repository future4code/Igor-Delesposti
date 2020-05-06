import React from 'react';
import { routes } from '../Router';
import { connect } from 'react-redux';
import { replace, push} from 'connected-react-router';
import { Button } from '@material-ui/core/Button'


class AdminScreen extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem("token");

        if (token === null) {
            this.props.goToLoginScreen();
        }
    }
    handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }


    render() {
        const isLogged = localStorage.getItem("token") !== null;
        const {goToCreateTrip, goToTripsList, goToApproveCandidates} = this.props
        return (
            <div><h4>Admin Screen</h4>
                <Button onClick={goToCreateTrip}>CRIAR VIAGEM</Button>
                <Button onClick={goToTripsList}>LISTA DE VIAGENS</Button>
                <Button onClick={goToApproveCandidates}>INSCRIÇÕES</Button>

                {isLogged && <Button
                    onClick={this.handleLogout}
                    variant="contained"
                    color="secondary"
                >Logout</Button>}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    
        goToCreateTrip: () => dispatch(push(routes.tripsCreate)),
        goToTripsList: () => dispatch(push(routes.tripsList)),
        goToApproveCandidates: () => dispatch(push(routes.approveCandidates)),
        goToLoginScreen: () => dispatch(replace(routes.login)),

    
})


export default connect(null, mapDispatchToProps)(AdminScreen);