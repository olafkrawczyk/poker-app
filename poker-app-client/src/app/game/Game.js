import React, { Component } from 'react';
import './Game.css';
import GameTable from './GameTable';

class Game extends Component {

  render() {
    let cards = [
      {imgSrc : require("./resources/cards/9S.png")},
      {imgSrc : require("./resources/cards/9S.png")},
      {imgSrc : require("./resources/cards/9S.png")},
      {imgSrc : require("./resources/cards/9S.png")}]
    return (
        <div className="game">
            <GameTable cards={ cards } />
        </div>
    );
  }
}

export default Game;