import React, {useState, useEffect} from "react";
// import io from 'socket.io-client'
import Sequencer from "./sequencer";
// import SaveButton from "./save-button"
import SignOut from "./sign-out"
import UserSongs from "./user-songs"
import "../styles.css";
import ajax from '../lib/ajax'

import axios from 'axios';


const User = (props) => {

  // const socket = io('http://localhost:1337')
  const [user, setUser] = useState(undefined)
  const [pickedSong, setPickedSong] = useState(null)

  const pickSong = (picked) => {
    // console.log("song to change", picked );
    setPickedSong(picked)
    console.log("picked in state: ", pickedSong);
    props.history.push(`/user/${picked.trackName}`)
  }

  const findUser = () => {
    ajax.getUser()
      .then(user => {

        setUser(user.data)
        console.log(user.data);
        // socket.on('ping', data => {
          // console.log('PING', data);
          // get infomation here from back end deal with it and reserve booking
        // })
        // socket.emit("save song", console.log(user.data))
        // console.log;
        // this.$emit( 'song saved', res.data );
      })
      .catch(err => console.warn(err))
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
    findUser()
  }, [])


  return(

    <div className="userHome">

      {
        user !== undefined
        ?
        <div>
          <h1 className="userName">Welcome {user.userName}</h1>
          <div className="drumMachineContainer">
            <div className="drumMachine">
              <Sequencer picked={pickedSong}/>
              <div className="userSongs">
                <UserSongs songs={user.beatz} chooseSong={pickSong}/>
              </div>
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
