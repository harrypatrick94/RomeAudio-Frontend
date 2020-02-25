import React, {useState, useEffect} from "react";
import Sequencer from "./sequencer";
// import SaveButton from "./save-button"
import SignOut from "./sign-out"
import UserSongs from "./user-songs"
import ajax from '../lib/ajax'
import axios from 'axios';

const User = (props) => {

  const [user, setUser] = useState(undefined)
  // const [sequence, setSequence] = useState([])
  // console.log("token: ", window.localStorage.getItem("token"));
  // console.log('header in user', axios.defaults.headers.common['Authorization']);

  useEffect(() => {

    if (window.localStorage.getItem("token")) {
      const token = window.localStorage.getItem("token")
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      console.log('token not here');

      // props.history.push("/user");
    }
    console.log("hook runnning");
    ajax.getUser()
      .then(user => {
        setUser(user.data)
        console.log(user.data);
      })
      .catch(err => console.warn(err))
  }, [])


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
          <div className="userSongs">
            <UserSongs songs={user.beatz} />
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
