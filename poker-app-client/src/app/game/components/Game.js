import React, { Component } from 'react';
import './Game.css';

class Game extends Component {

  constructor(props) {
      super(props)
      this.counter = 0;
  }


  render() {
    // let cards = [
    //   {imgSrc : require("./resources/cards/9S.png")},
    //   {imgSrc : require("./resources/cards/9S.png")},
    //   {imgSrc : require("./resources/cards/9S.png")},
    //   {imgSrc : require("./resources/cards/9S.png")}]
    // return (
    //     <div className="game">
    //         <GameTable cards={ cards } />
    //     </div>
    // );
    let playerList = this.props.game.players.map(player => <li key={player.id}>Player { player.id }</li>);

    return (
      <div>
        <h1>Players:</h1>
        <ul>{ playerList }</ul>
        <button onClick={() => this.props.onAddPlayer(this.counter++)}>Add player</button>
      </div>
    );
  }
}

export default Game;