import React from "react";

const PlayButton = (playing) => {

  const toggler = () => {
    playing.togglePlay()
    console.log(playing.playing);
  }
  return (
    <div onClick={() => toggler()}>
      {playing.playing ? "Stop" : "Play"}
    </div>
  )
}

export default PlayButton
