import React, {useState, useEffect} from "react";
import ajax from '../lib/ajax';
import Sequencer from './sequencer';
let _ = require('lodash');
const SavedTrack = (props) => {
  const [song, setSong] = useState({})
  // console.log(props.match.params.trackName);
  const getSong = () => {

    console.log(props.match.params.trackName);
    ajax.findSong(props.match.params.trackName)
    .then(res => {
      console.log("data returned: ", res.data);
      setSong(res.data)
    })
    .catch(err => console.warn("Song search error: ", err))
  }

  useEffect(() => {
  getSong()

  },
  []
  )
  return(

    <div>
      {
        _.isEmpty(song)
        ?
          <div>Loading ...</div>
        :
        <div>
          Your Track is here <h1>RIGHT HERE</h1>
          <Sequencer currentSong={song.sequence}/>
        </div>
      }

    </div>
  )
};

export default SavedTrack
