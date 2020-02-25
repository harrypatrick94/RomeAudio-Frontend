import React from "react";

const SetBPM = (props) => {
  console.log(props)
  return (
    <div>
      <form>
        <input className="" type="range" id="points" name="points" min="60" max="150" onChange={props.bpm}/>
      </form>
    </div>
  )
}
export default SetBPM
