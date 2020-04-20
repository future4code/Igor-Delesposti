import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import { routes } from "../Router"

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <p>HomePage</p>
                <button onClick = {this.props.goToLoginScreen}>Login</button>
                <button onClick = {this.props.goToFormScreen}>Inscrição</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToFormScreen: () => dispatch(push(routes.applicationForm)),
        goToLoginScreen: () => dispatch(push(routes.login))
    }
}
export default connect(null, mapDispatchToProps)(HomePage);


