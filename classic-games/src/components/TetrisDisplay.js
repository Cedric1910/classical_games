import React from "react";
import { StyledDisplay } from "./styles/StyledTetris";

const Display = ({ GameOver, text }) => (
  <StyledDisplay gameOver={GameOver}>{text}</StyledDisplay>
);

export default Display;
