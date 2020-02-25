import React from "react";
import styled from "styled-components";


const getBackground = (ready, play) => {
  switch (true) {
    // darken each cell ready and trigger
    case ready && play:
      return "white";
    // is ready turn color green
    case ready && !play:
      return "red";
    // keep track step count in color
    case !ready && play:
      return "white";
    // false state (unactive and not play)
    default:
      return "rgba(130, 130, 130, 0.6)";
  }
};
const getBoxShadow = (ready, play) => {
  switch (true) {
    // darken each cell ready and trigger
    case ready && play:
      return "inset -3px 3px rgba(88, 88, 88, 0.31)"
    // is ready turn color green
    case ready && !play:
      return "inset 3px -3px 3px rgba(88, 88, 88, 0.31)"
    // keep track step count in color
    case !ready && play:
      return "inset 3px -3px rgba(88, 88, 88, 0.31)"
    // false state (unactive and not play)
    default:
      return "4px -4px 5px  rgba(10, 10, 10, 1)"
  }
};
 const getOpactiy = (ready, play) => {
   switch (true) {
     // darken each cell ready and trigger
     case ready && play:
       return 0.5;
     // is ready turn color green
     case ready && !play:
       return 1;
     // keep track step count in color
     case !ready && play:
       return 1;
     // false state (unactive and not play)
     default:
       return 1;
   }
 }
 const getBorderLeft = (ready, play) => {
    switch (true) {
      // darken each cell ready and trigger
      case ready && play:
        return "0px solid rgba(88, 88, 88, 0.31)";
      // is ready turn color green
      case ready && !play:
        return "0px solid rgba(88, 88, 88, 0.31)";
      // keep track step count in color
      case !ready && play:
        return "8px solid rgba(20, 20, 20, 0.31)";
      // false state (unactive and not play)
      default:
        return "8px solid rgba(20, 32, 32, 0.45)";
    }
  }
  const getBorderBottom = (ready, play) => {
    switch (true) {
      // darken each cell ready and trigger
      case ready && play:
        return "0px solid rgba(88, 88, 88, 0.31)";
      // is ready turn color green
      case ready && !play:
        return "0px solid rgba(88, 88, 88, 0.31)";
      // keep track step count in color
      case !ready && play:
        return "8px solid rgba(88, 88, 88, 0.31)";
      // false state (unactive and not play)
      default:
        return "8px solid rgba(88, 88, 88, 0.31)";
    }
  }
  const getBorderRight = (ready, play) => {
    switch (true) {
      // darken each cell ready and trigger
      case ready && play:
        return "8px solid rgba(20, 20, 20, 0.31)";
      // is ready turn color green
      case ready && !play:
        return "8px solid rgba(20, 20, 20, 0.31)";
      // keep track step count in color
      case !ready && play:
        return "0px solid rgba(88, 88, 88, 0.31)";
      // false state (unactive and not play)
      default:
        return "0px solid rgba(88, 88, 88, 0.31)";
    }
  }
  const getBorderTop = (ready, play) => {
    switch (true) {
      // darken each cell ready and trigger
      case ready && play:
        return "8px solid rgba(88, 88, 88, 0.31)";
      // is ready turn color green
      case ready && !play:
        return "8px solid rgba(88, 88, 88, 0.31)";
      // keep track step count in color
      case !ready && play:
        return "0px solid rgba(88, 88, 88, 0.31)";
      // false state (unactive and not play)
      default:
        return "0px solid rgba(88, 88, 88, 0.31)";
    }
  }
const Step = styled.span.attrs(({ ready, play }) => ({
// call get background on style components
  style: {
    background: getBackground(ready, play),
    opacity: getOpactiy(ready, play),
    boxShadow: getBoxShadow(ready, play),
    borderLeft: getBorderLeft(ready, play),
    borderRight: getBorderRight(ready, play),
    borderTop: getBorderTop(ready, play),
    borderBottom: getBorderBottom(ready, play)
  }
}))`
  display: inline-block;
  width: 40px;
  height: 25px;
  border-radius: 4px;
  margin: 10px;
  vertical-align: middle;
  horizontal-align: right;


`;

export default Step;
