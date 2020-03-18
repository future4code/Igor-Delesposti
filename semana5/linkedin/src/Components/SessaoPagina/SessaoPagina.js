import React from 'react';
import './SessaoPagina.css';

function SessaoPagina(props){
    return(
        <main>
            <section className="section-container">
                <h2>{props.titulo}</h2>
                    {props.children}

            </section>
        </main>
    )
}

export default SessaoPagina;