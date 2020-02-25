import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const getBackground = (activated, triggered) => {
  switch (true) {
    // darken each cell activated and trigger
    case activated && triggered:
      return "lavender";
    // is activated turn color green
    case activated && !triggered:
      return "darkgoldenrod";
    // keep track step count in color
    case !activated && triggered:
      return "beige";
    // false state (unactive and not triggered)
    default:
      return "#f9f9f9";
  }
};

const Cell = styled.div.attrs(({ activated, triggered }) => ({
// call get background on style components
  style: {
    background: getBackground(activated, triggered)
  }
}))`
  border-radius: 4px;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin: 2px;
`;

export default Cell;
