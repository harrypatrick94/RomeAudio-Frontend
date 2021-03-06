import React, { useState, useEffect } from "react";
import Tone from "tone";
// import sounds
import cp from "../sounds/909-sounds/909-clap.wav"
import ch from "../sounds/909-sounds/909-closedHat.wav"
import cr from "../sounds/909-sounds/909-crash.wav"
import bd from "../sounds/909-sounds/909-kick.wav"
import oh from "../sounds/909-sounds/909-openHat.wav"
import rd from "../sounds/909-sounds/909-ride.wav"
import rs from "../sounds/909-sounds/909-rimShot.wav"
import sn from "../sounds/909-sounds/909-snare.wav"
import ta from "../sounds/909-sounds/909-tom.wav"
import tb from "../sounds/909-sounds/909-tomOne.wav"
import tc from "../sounds/909-sounds/909-tomTwo.wav"

// use hooks to use state without writing a class
// import PlayerProvider from "./player-provider";
import DrumMachine from "./drum-machine"
import PlayButton from "./play-button"
import SaveButton from "./save-button"
import Range from "./range"
import {Link} from "react-router-dom"
import "../styles.css";
let _ = require('lodash');
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
    console.log("here");
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
        CP: cp,
        CH: ch,
        CR: cr,
        BD: bd,
        OH: oh,
        RD: rd,
        RS: rs,
        SN: sn,
        TA: ta,
        TB: tb,
        TC: tc

      },
      () => {

        setPlayer(player);
      }
    ).toMaster();
    if (props.picked !== null) {
      // console.log(props.picked);
      // console.log("propsss: ", props);
    } else {
      // console.log("NULLLLLLL");
    }

    // setSequence(initialState)
  }, []);
  // step up stepper
  useEffect(() => {

    if (!(_.isEmpty(props.currentSong))) {
      setSequence(props.currentSong)
    }
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
    // watch for these states to update then update state
  }, [currentStep, playing, props.currentSong]);
  return(
    <span>
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
            <div>
              <div className="saveComponent">
                  <SaveButton sequence={sequence} />
              </div>
              <div className="bpmRange" >
                <Range changeBPM={changeBPM} />
              </div>
            </div>
            :
            <div><Link to="/register">Sign up to save tracks</Link></div>
          }

      </div>
    </span>
  )

}; // sequence

export default Sequencer
