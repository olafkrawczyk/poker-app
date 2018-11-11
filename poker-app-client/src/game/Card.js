import React from 'react';
import './Card.less';

function Card(props) {
    return(
        <div className="card">
            <img src={props.imgSrc}/>
        </div>
    );
}

export default Card;