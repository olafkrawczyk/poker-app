import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './home/containers/HomeContainer';
import GameContainer from './game/containers/GameContainer';

class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/newgame/:id" component={GameContainer}/>
          </div>
        </Router>
    );
  }
}

export default App;
