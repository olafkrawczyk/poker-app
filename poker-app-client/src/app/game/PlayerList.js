import React from 'react';

function PlayerList(props) {
    let playerList = props.players.map(player => <li key={player.id}>Player {player.id}, {player.name}</li>);
    return (
        <div>
            <h3>Player List</h3>
            <ul>{playerList}</ul>
        </div>
    );
}

export default PlayerList;