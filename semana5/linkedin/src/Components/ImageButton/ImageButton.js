import React from 'react';
import './ImageButton.css';

function ImageButton(props){
    return(
        <div className="nameButton">
            <button>
            <img src={props.img} alt="arrowimage"/>
             {props.button} </button>
        </div>
    );
}

export default ImageButton;