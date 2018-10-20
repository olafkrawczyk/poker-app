import React, { Component } from 'react';
import GameService from './services/game-service';
import PlayerListContainer from './PlayerListContainer';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    let id = this.props.match.params.id;
    this.state = { gameId : id , players: [], loading : true };
    this.gameService = new GameService(id);
    this.onPlayersChanged = this.onPlayersChanged.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    this.gameService.getGameState()
      .then(gameState => this.setState({...this.state, ...gameState, loading: false}))
      .catch(err => console.log(err));
  }

  onPlayersChanged(players) {
    this.setState({
      ...this.state,
      players : players
    });
  }

  render() {
    return (
      <div>
        <PlayerListContainer gameId={this.state.gameId} players={this.state.players} onPlayersChanged={(players) => this.onPlayersChanged(players)}/>
      </div>
    );
  }
}

export default GameContainer;