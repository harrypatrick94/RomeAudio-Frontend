import React, {useState, useEffect} from "react";
import ajax from '../lib/ajax';
import axios from 'axios';
import UserSongs from "./user-songs"
import SignOut from "./sign-out"
import Sequencer from './sequencer';
import "../styles.css";
let _ = require('lodash');

const SavedTrack = (props) => {
  const [song, setSong] = useState({})
  const [tracks, setTrack] = useState({})
  const [user, setUser] = useState('')
  // console.log(props.match.params.trackName);
  const getSong = () => {
    let track = props.match.params.trackName

    ajax.findSong(track)
    .then(res => {
      console.log("data returned: ", res.data);
      let songs = res.data.beatz
      let newUser = res.data.userName
      console.log(newUser);
      setTrack(songs)
      setUser(newUser)

      songs.map(t => {
        if (t.trackName === track) {
          console.log("found: ", track);
          console.log("track name: ", t.trackName);
          console.log("Song sequence: ", t.song);
          setSong(t.song)

        }
      })
    })
    .catch(err => console.warn("Song search error: ", err))
  }

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      const token = window.localStorage.getItem("token")
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      console.log('token not here');
    }
      getSong()
  },[])

  const pickSong = (picked) => {
    // setSong(picked.song)
    console.log("picked in state: ", picked.song);
    props.history.push(`/user/${picked.trackName}`)
  }

  return(

    <div>

      {
        _.isEmpty(song)
        ?
          <div>Loading ...</div>
        :
        <div>
          <h1 className="userName">Welcome {user}</h1>
          <div>
            <Sequencer currentSong={song}/>
          </div>
          <div className="userSongs">
            <UserSongs songs={tracks} chooseSong={pickSong}/>
          </div>
        </div>
      }
        <SignOut {...props} />
    </div>
  )
};

export default SavedTrack
