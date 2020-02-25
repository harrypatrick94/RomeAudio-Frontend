import React, { useState, useEffect } from "react";
import Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const player = new Tone.Players(
      {
        BD: "/sounds/909-sounds/909-kick.wav",
        CP: "/sounds/909-sounds/909-clap.wav",
        OH: "/sounds/909-sounds/909-snare.wav",
        CH: "/sounds/909-sounds/909-closedHat.wav",
        OP: "/sounds/909-sounds/909-openHat.wav",
        TOM: "/sounds/909-sounds/909-tom.wav"
      },
      () => {
        console.log("buffers loaded");
        setPlayer(player);
      }
    ).toMaster();
  }, []);
  // send back player to sequencer to get called upon
  return children({ player });
};

export default PlayerProvider;
