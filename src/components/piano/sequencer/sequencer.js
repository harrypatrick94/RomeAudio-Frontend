import React, { useState, useEffect } from "react";
// use tone
import Tone from "tone";
// take the sounds saved in player
import PlayerProvider from '../player-provider/player-provider'
// html set

// 4 bars
const STEPS = 16
// sounds from drumMachine

const Sequence = ({player}) => {
  let column = React.createRef()
  let transport = React.createRef()
  console.log(column);
  const drumMachine = ["BD", "CP", "CH", "OH", "OP", "TOM"];
  const loop = new Tone.Sequence(function(time, col){
    column.forEach(function(val, i){
      if (val){
        //slightly randomized velocities
        let vel = Math.random() * 0.5 + 0.5;
        player.get(drumMachine[i]).start(time, 0, "32n", 0, vel);
        console.log(player);
      }
    });
    //set the column on the correct draw frame
    Tone.Draw.schedule(function(){
      column.setAttribute("highlight", col);
    }, time);
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n").start(0);


  // transport.bind(Tone.transport)
  Tone.Transport.on("stop", () => {
    setTimeout(() => {
      column.setAttribute("highlight", "-1");
    }, 100);
  });

  const logTest = () => {
    console.log(column);
  }
  return (
    <div>
      
    </div>
  )
// loop
} //  sequence

export default Sequence
