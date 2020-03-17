import React from 'react';
import './BigCard.css';


function BigCard(props){
    return(
        <main id="bigcard-container">
            
            <section className="bigcard-container">

            <div className="descricao">


            <h3>{props.titulo}</h3>
            <img src={props.img} alt="fotoIgor"/>
            <p>{props.texto}</p>

               
            
            </div>

            </section>
        </main>

    );
}

export default BigCard;



