import React, {useState, useEffect} from "react";
import {
Route,
Link,
HashRouter as Router, Redirect,
} from 'react-router-dom';
import Sequencer from "./sequencer";
import SaveButton from "./save-button"
import SignOut from "./sign-out"
import ajax from '../lib/ajax'
import axios from 'axios';

const User = (props) => {

  const [user, setUser] = useState(undefined)
  // const [sequence, setSequence] = useState([])
  // console.log("token: ", window.localStorage.getItem("token"));
  // console.log('header in user', axios.defaults.headers.common['Authorization']);

  useEffect(() => {
    ajax.getUser()
      .then(user => {
        setUser(user.data)
        console.log(user.data);

      })
      .catch(err => console.warn(err))
  }, [])

  // const updateSequence = (seq) => {
  //   console.log('updating');
  //   setSequence(seq)
  //   console.log("sequence in user", sequence);
  // }

  return(

    <div className="userHome">
      {
        user !== undefined
        ?
        <div>
          <h1>{user.userName}</h1>
          <h4>{user.email}</h4>
          <div className="drumMachineContainer">
            <div className="drumMachine">
              <Sequencer />
            </div>

          </div>
        </div>
        :
        <h1>Loading . . .</h1>
      }
      <SignOut {...props} />
    </div>
  )
};

export default User
