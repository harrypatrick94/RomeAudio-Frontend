import React from "react";
import Step from './step.js';

const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


const DrumMachine = ({sequence, drumMachine, toggleSound}) => {



  const toggler = (row, column) => {


    toggleSound(row, column);
    // toggleCSS(row, column)

  }
  return(
    <div>
      {drumMachine.map(i => (
          <div className={i}>{i}
            {
              steps.map(j => {
                return(

                    <span className="step"  onClick={() => toggler(i, j)}>
                      <Step
                      ready={sequence[drumMachine.indexOf(i)][j]["ready"]}
                      play={sequence[drumMachine.indexOf(i)][j]["play"]}
                      />
                    </span>

                )
              })
            }
        </div>
      ))}
    </div>
  ) // return
};

export default DrumMachine
