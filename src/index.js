import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {
Route,
Link,
HashRouter as Router, Redirect
} from 'react-router-dom';
import PlayerProvider from "./components/player-provider";
import DisplaySongs from "./components/display-songs";
import SavedTrack from "./components/saved-track";
import Sequencer from "./components/sequencer";
import Register from "./components/register";
import SignIn from './components/sign-in';
import User from './components/user';
import "./styles.css";

function App(props) {
  // const [homeRoute, setHomeRoute] = useState('/signin')
  useEffect(() => {
    // let history = useHistory()
    if (window.localStorage.getItem("token")) {
      console.log("token here");
      
    } else {
      console.log('token not here');
      // props.history.push("/user");
    }
    //check for token if there got to user
    // if not there go to sign up
  }, []);

  return (
    <div>
      <Router>
        <Route exact path='/' component={Sequencer} />
        <Route exact path='/drum-machine/:trackName' component={SavedTrack} />
        <Route exact path='/songs' component={DisplaySongs} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/user' component={User} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
