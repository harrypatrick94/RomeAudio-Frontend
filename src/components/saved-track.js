import React, {useState, useEffect} from "react";
import ajax from '../lib/ajax';
import axios from 'axios';
import Sequencer from './sequencer';
let _ = require('lodash');
const SavedTrack = (props) => {
  const [song, setSong] = useState({})
  // console.log(props.match.params.trackName);
  const getSong = () => {
    let track = props.match.params.trackName

    ajax.findSong(track)
    .then(res => {
      console.log("data returned: ", res.data);
      let songs = res.data.beatz

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

  return(

    <div>
      {
        _.isEmpty(song)
        ?
          <div>Loading ...</div>
        :
        <div>
          <Sequencer currentSong={song}/>
        </div>
      }

    </div>
  )
};

export default SavedTrack
