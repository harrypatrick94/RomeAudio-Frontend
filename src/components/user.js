import React, {useState, useEffect} from "react";
import Sequencer from "./sequencer";
// import SaveButton from "./save-button"
import SignOut from "./sign-out"
import UserSongs from "./user-songs"
import ajax from '../lib/ajax'
import axios from 'axios';

const User = (props) => {

  const [user, setUser] = useState(undefined)
  const [pickedSong, setPickedSong] = useState(null)

  const pickSong = (picked) => {
    // console.log("song to change", picked );
    setPickedSong(picked)
    console.log("picked in state: ", pickedSong);
    props.history.push(`/user/${picked.trackName}`)
  }

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
              <Sequencer picked={pickedSong}/>
            </div>

          </div>
          <div className="userSongs">
            <UserSongs songs={user.beatz} chooseSong={pickSong}/>
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
