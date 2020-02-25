import React from "react";

const UserSongs = (songs) => {
  console.log(songs);
  return (
    <div className="userSongs">
      {
        songs !== 0
        ?
        songs.songs.map(song => {
          return(
            <h1>{song.trackName}</h1>
          )
        })
        :
        <h4>Loading</h4>
      }
    </div>
  )
}

export default UserSongs
