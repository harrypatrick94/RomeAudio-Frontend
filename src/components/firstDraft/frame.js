'import React from "react";
import styled from "styled-components";
// use css grid to style machine
// pass number of 'steps' into props and assign each

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  width: 60vw;
  height: 60vh;
`;

export default Frame;
