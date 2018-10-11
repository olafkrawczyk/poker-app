import React, { Component } from 'react';
import "./GameTable.css";
import Card from "./Card";

class GameTable extends Component {

    render() {
        let cardList = [];
        this.props.cards.forEach(element => {
            let card = <Card imgSrc={ element.imgSrc } />;
            cardList.push(card);
        });

        return (
            <div className="game-table">
                {cardList}
            </div>
        );
    }
}

export default GameTable;