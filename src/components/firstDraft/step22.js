import React, {useState} from "react";
// import styled from "styled-components";
import "../steps.css"


const Step = ({toggler, activated, triggered }) => {
  const [stepClassName, setStepClassName] = useState('step')

  console.log(activated, triggered);
  const toggleCSS = () => {
    let clickState;
    switch (true) {
      // darken each cell activated and trigger
      case activated && triggered:
        clickState = 'active'
        console.log("here");
        setStepClassName(clickState)
      // is activated turn color green
      case activated && !triggered:
      console.log("incase", activated);
        clickState = 'clicked'

        console.log(clickState);
        setStepClassName(clickState)
      // keep track step count in color
      case !activated && triggered:
        clickState = 'step'
        console.log("bottom");
        setStepClassName(clickState)
      // false state (unactive and not triggered)
      default:
        return console.log("thrne");
    }
  }
  return(
    <div className={stepClassName} onClick={toggleCSS()}></div>
  )
}

export default Step
