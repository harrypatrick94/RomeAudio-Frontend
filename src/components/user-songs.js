import React, {useState} from "react";

const UserSongs = (props) => {

  // const [song , setSong] = useState('')
// console.log(props.chooseSong);
  const showSong = (song) => {
    props.chooseSong(song)
    console.log("songgggg: ", song.trackName);
    // console.log("pick song: ", chooseSong);
    // console.log(song);

  }

  return (
    <div>
      <div className="indivdualSongs">
        <h1 className="yourTrakz">Your trakz</h1>
        {
          props !== 0
          ?
          props.songs.map(song => {
            return(

              <h1 onClick={() => showSong(song)}>{song.trackName}</h1>
            )
          })
          :
          <h4>Loading</h4>
        }

      </div>

    </div>
  )
}

export default UserSongs
