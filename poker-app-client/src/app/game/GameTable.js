import React, { Component } from 'react';
import "./GameTable.css";
import Card from "./Card";

function GameTable(props) {
    // props.cards.forEach(element => {
    //     let card = <Card imgSrc={ element.imgSrc } />;
    //     cardList.push(card);
    // });
    let cardList = props.cards.map(card => <p key={card.suit+card.value}>[Suit: {card.suit}, value: {card.value}]</p>);

    return(
        <div className="game-table">
            {cardList}
        </div> 
    );
}

export default GameTable;