import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                {this.props.children}
                Aqui é a lista de users
            </div>
        )
    }
    
}

export default User;