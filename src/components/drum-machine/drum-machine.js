import React from "react";

const DrumMachine = ({sequence}) => {
  let sounds = sequence.length
  return(

    <div className="drumMachine">
     {
       sounds.map((line, i) => {
         <div className="instrument">
            
            {line.map((time, j) => {
              <div className="time">
              bye
              </div>
              })
            }
         </div>
       })

     }
    </div>

  )
}

export default DrumMachine
