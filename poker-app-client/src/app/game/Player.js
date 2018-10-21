import React from 'react';

function Player(props) {
    let player = props.player;
    let hand = player.hand ? player.hand.map(card => <p key={card.suit+card.value}>Suit: {card.suit}, value: {card.value}</p>) : <p>No cards</p>
    return(
        <div>
            <h2>{player.name}</h2>
            <div>
                <h3>Hand:</h3>[{hand}];
            </div>
        </div>
    );
}

export default Player;