import React, {useState, useEffect} from "react";
import {
Link,
HashRouter as Router, Redirect,
} from 'react-router-dom';
import ajax from '../lib/ajax'

const DisplaySongs = () => {

  const [allSongs, setAllSongs] = useState([])
  const getSongs = () => {
    ajax.findSongs(window.localStorage.getItem("userId"))
    .then( res => {
      console.log("data returned: ", res.data);
      setAllSongs(res.data)
      console.log("Songs in state: ", allSongs);
    })
    .catch(err => console.warn("Song search error: ", err))
  }

  useEffect(() => {
    getSongs()

  },
  []
  )
  console.log(allSongs)
  return (

    <div>
      {
        allSongs.length > 0
        ?
        <div>
          <ul>
          {allSongs.map(s =>
            <li>
              <Link to={`/drum-machine/${s.trackName}`}>{s.trackName}</Link>
            </li>
            )}
          </ul>

        </div>
        :
        <div>Loading . . .</div>
      }
    </div>
  )
};
export default DisplaySongs
