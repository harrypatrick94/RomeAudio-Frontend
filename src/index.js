import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import {
Route,
HashRouter as Router
} from 'react-router-dom';
// import PlayerProvider from "./components/player-provider";
// import DisplaySongs from "./components/display-songs";
// import SavedTrack from "./components/saved-track";
import Sequencer from "./components/sequencer";
import Register from "./components/register";
import SignIn from './components/sign-in';
import User from './components/user';

import "./styles.css";

function App() {
  // const [homeRoute, setHomeRoute] = useState('/signin')


  return (
    <div>
      <Router>
        <Route exact path='/' component={Sequencer} />

        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/user' component={User} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
