import React from "react";

const Range = ({changeBPM}) => {

  const toggler = (e) => {


    let newBPM = e.target.value
    changeBPM(newBPM)
  }

  return (
    <div>
      <form>
        <label className="rangeLabel">BPM Range</label>
        <input type="range"
        onChange={toggler}
        className="rangeInput"
        min="60" max="180"/>
      </form>
    </div>
  )
}

export default Range
