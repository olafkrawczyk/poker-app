import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import NewGameService from './services/new-game-service';

class Home extends Component {

    constructor(props) {
        super(props);
        this.newGameService = new NewGameService();
        this.createNewGame = this.createNewGame.bind(this);
    }

    createNewGame() {
        console.log("click");
        this.newGameService.createNewGame()
            .then(game => this.props.history.push("/newgame/" + game.id))
            .catch(error => console.log(error.message));
    }

    render() {
        return (
        <div className="home">
            <button className="button-large" onClick={this.createNewGame}>Create new game</button>
        </div>
        );
    }
}

//() => {} 

export default withRouter(Home);