import React, { Component } from 'react';
import GameService from './services/game-service';
import PlayerList from './PlayerList';
import PlayerForm from './PlayerForm';

class PlayerListContainer extends Component {

    constructor(props) {
        super(props);
        this.gameService = new GameService(this.props.gameId);
        this.onPlayersChanged = this.props.onPlayersChanged;
        this.addPlayer = this.addPlayer.bind(this);
        this.dealCards = this.dealCards.bind(this);
    }

    addPlayer(player) {
        this.gameService.addPlayer(player)
            .then(players => this.onPlayersChanged(players))
            .catch(err => console.log(err));
    }

    dealCards() {
        this.gameService.dealCards()
            .then(players => this.onPlayersChanged(players))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <PlayerList players={this.props.players} onDealCards={this.dealCards}/>
                <PlayerForm onAddPlayer={(player) => this.addPlayer(player)} />
            </div>
        );
    }
}

export default PlayerListContainer;