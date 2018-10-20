import React from 'react';
import Player from './Player';

function PlayerList(props) {
    let playerList = props.players.map(
        player => <li key={player.id}>
                    <Player player={player} />
                </li>
    );
    return (
        <div>
            <h3>Player List</h3>
            <ul>{playerList}</ul>
            <button onClick={props.onDealCards}>Deal cards</button>
        </div>
    );
}

export default PlayerList;