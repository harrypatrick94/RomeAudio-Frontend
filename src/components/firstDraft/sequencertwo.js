import React, { useState, useEffect } from "react";
import PlayerProvider from "./player-provider";
import DrumMachine from "./drum-machine/drum-machine"
const steps = 16;
const initialCellState = { triggered: false, activated: false };
// list of sounds in player
const drumMachine = ["CP", "CH", "CR", "BD", "OH", "RD", "RS", "SN", "TA", "TB", "TC"];
// create array for each sound fill each state with initial state
const initialState = [
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState),
  new Array(16).fill(initialCellState)
];

const Sequencer = ({ player }) => {
// array destructuring
// sequnce is the state of each Array
// setState is the click handler to change sequence state

  const [sequence, setSequence] = useState(initialState);
  const [playing, setPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, setBPM] = useState(120)
  // when a step is clicked on its state will be altered
  const toggleStep = (line, step) => {
    // create copy of sequence using spread operator
    const sequenceCopy = [...sequence];
    // find the sqaure to be altered with is line and step
    const { triggered, activated } = sequenceCopy[line][step];
     //  toggle the value of the activated key
    sequenceCopy[line][step] = { triggered, activated: !activated };
    console.log("toggled");
    // call setSequence to update sequence state with new sequence
    setSequence(sequenceCopy);
  };
  // count through each set
  const nextStep = time => {
    // loop through sequence step
    for (let i = 0; i < sequence.length; i++) {
    // each step of the sequence(sound)
      for (let j = 0; j < sequence[i].length; j++) {
      // get the current value of triggered and activated for that
        const { triggered, activated } = sequence[i][j];
      // at position sequence[i][j] triggered === true
        sequence[i][j] = { activated, triggered: j === time };
      // if triggered and activated true play sound from player
        if (triggered && activated) {
      // player is imported from player provider
          player.get(drumMachine[i]).start();
        }
      }
    }
    // call setSequence to update sequence state with new sequence
    setSequence(sequence);
  };

  const changeBPM  = (e) => {
    console.log(e);
    const bpm = 0
  }

  useEffect(() => {
    // sets bpm
    const timer = setTimeout(() => {
      if (playing) {
        setCurrentStep((currentStep + 1) % steps);
        nextStep(currentStep);
      }
    }, bpm);
    return () => {
      clearTimeout(timer);
    };
  }, [currentStep, playing]);

  return (
    <div>

      <h1>Sequencer</h1>
      <DrumMachine sequence={sequence} />

    </div>
  );
};

export default Sequencer;
