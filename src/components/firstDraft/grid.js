import React from "react";
import styled from "styled-components";
import Frame from "./frame";
import Cell from "./cell";
//  compose grid from frame and ceel components
const Grid = ({ sequence, toggleStep }) => (
// frame takes row and cols to generate grid format
// sequence is array of each sounds with state parsed into grid
// frame gets passed rows and columns to construct the step squares
  <Frame rows={sequence.length} columns={16}>

    {sequence.map((line, i) =>
      line.map((time, j) => (
        <Cell
          key={i + j}
          column={j + 1}
          row={i + 1}
          activated={sequence[i][j]["activated"]}
          triggered={sequence[i][j]["triggered"]}
          onClick={() => toggleStep(i, j)}
        />
      ))
    )}
  </Frame>
);

export default Grid;
