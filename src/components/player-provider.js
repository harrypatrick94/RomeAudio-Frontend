import { useState, useEffect } from "react";
import Tone from "tone";


const PlayerProvider = () => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const player = new Tone.Players(
      {
        CP: "/sounds/909-sounds/909-clap.wav",
        CH: "/sounds/909-sounds/909-closedHat.wav",
        CR: "/sounds/909-sounds/909-crash.wav",
        BD: "/sounds/909-sounds/909-kick.wav",
        OH: "/sounds/909-sounds/909-openHat.wav",
        RD: "/sounds/909-sounds/909-ride.wav",
        RS: "/sounds/909-sounds/909-rimShot.wav",
        SN: "/sounds/909-sounds/909-snare.wav",
        TA: "/sounds/909-sounds/909-tom.wav",
        TB: "/sounds/909-sounds/909-tomOne.wav",
        TC: "/sounds/909-sounds/909-tomOne.wav"

      },
      () => {

        setPlayer(player);
      }
    ).toMaster();
  }, []);
  // send back player to sequencer to get called upon
  return (
    console.log('loaded')

  )
};

export default PlayerProvider;
