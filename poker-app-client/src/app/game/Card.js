import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
    // TODO maybe implement shouldComponentUpdate to always return false
    render() {
        return (
            <div className="card">
                <img src={this.props.imgSrc}/>
            </div>
        );
    }
}

export default Card;