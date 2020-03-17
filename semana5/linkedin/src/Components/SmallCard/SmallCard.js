import React from 'react';
import './SmallCard.css';

function SmallCard(props){
    return(
        <main id="smallcard-container">
            <div className="container-email">
                <img alt="email" src="https://image.flaticon.com/icons/png/512/46/46951.png"/>
                <p><strong>Email:</strong> {props.email} </p>
            </div>

            <div className="container-endereco">
                <img alt="endereco" src="https://image.flaticon.com/icons/svg/25/25694.svg"/>
                <p><strong>Endereço:</strong></p>
            </div>
        </main>
    );
}

export default SmallCard;