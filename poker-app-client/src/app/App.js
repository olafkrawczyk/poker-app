import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Game from './game/Game';

class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/newgame/:id" component={Game}/>
          </div>
        </Router>
    );
  }
}

export default App;
