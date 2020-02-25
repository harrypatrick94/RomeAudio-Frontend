import React, { useState, useEffect } from "react";
import Tone from "tone";
// use hooks to use state without writing a class
// import PlayerProvider from "./player-provider";
import DrumMachine from "./drum-machine"
import PlayButton from "./play-button"
import SaveButton from "./save-button"
import Range from "./range"

import "../styles.css";
// let _ = require('lodash');
const steps = 16

// firstly initialise state of false (do nothing)
// ready refers to the 'step' being enabled for playback
// play refers to the state when the step is being played back by the sequencer
const initialCellState = { play: false, ready: false };
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

const Sequencer = (props) => {
  const [player, setPlayer] = useState('sounds');

  // state for sequence, playing, step, bpm
  // declare variable then how to act on variable
  const [sequence, setSequence] = useState(initialState);
  const [playing, setPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, setBPM] = useState(120)


  // when a step is clicked on its state will be altered
  const toggleSound = (sound, step) => {
    // get row postion of toggle sound
    let row = drumMachine.indexOf(sound)
    // console.log(row);
    // console.log(step);
    // create copy of sequence using spread operator
    const sequenceCopy = [...sequence];
    // find the sqaure to be altered with is line and step
    const { play, ready } = sequenceCopy[row][step];
     //  toggle the value of the ready key
    sequenceCopy[row][step] = { play, ready: !ready };
    // console.log("toggled");
    // call setSequence to update sequence state with new sequence
    setSequence(sequenceCopy);
    // console.log("sequence: ",sequence);
    // updateSequence(sequenceCopy)
    console.log("herererererererererere");
  }; // toggle sound
  // start stop
  const togglePlay = () => {
    setPlaying(!playing)
  }
  // count each step
  const playStep = step => {
    // console.log("step: ", step);

    // loop through sequencer
    for (let i = 0; i < sequence.length; i++) {
      // console.log("length: ", sequence.length);
      // console.log("i: ", i);
        // through each step of each sound
        for (let j = 0; j < sequence[i].length; j++) {
          // console.log("j: ", j);
        // get current playing status
        const {ready, play} = sequence[i][j]
        // when play steps of step if 'ready' to play true
        // check play if true
        sequence[i][j] = {ready, play: j === step}
        // if both true the make sound
        // console.log("ready", ready);
        // console.log("play", play);
        // console.log("player", player);
        if (ready && play) {
          player.get(drumMachine[i]).start();
        }
      } // each sound loop
    } // sequence loop
    setSequence(sequence);


  } // playStep
  const changeBPM = (current) => {
    setBPM(current)
    console.log("changing: ", bpm);
  }
  //  set up player
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
    setSequence(initialState)
  }, []);
  // step up stepper
  useEffect(() => {

    // if (!(_.isEmpty(props.currentSong))) {
    //   setSequence(props.currentSong)
    // }
    // start drum machine
    const timer = setTimeout(() => {
      if (playing) {
        setCurrentStep((currentStep + 1) % steps);
        // console.log("this",(currentStep + 1) % steps);
        // console.log(currentStep);
        playStep(currentStep);
      }
    }, bpm);
    return () => {
      clearTimeout(timer);
    };
  }, [currentStep, playing]);
  return(
    <div>
      <div className="drumMachingBoard">
        <DrumMachine sequence={sequence} drumMachine={drumMachine} toggleSound={toggleSound} />
      </div>
      <div className="gearBox">
        <div className="playButton">
          <PlayButton playing={playing} togglePlay={togglePlay} />
        </div>
        {
          window.localStorage.getItem("token")
          ?
          <div className="saveComponent">
              <SaveButton sequence={sequence} />
          </div>
          :
          <span></span>
        }


        <div className="bpmRange" >
          <Range changeBPM={changeBPM} />
        </div>
      </div>
    </div>
  )

}; // sequence

export default Sequencer
