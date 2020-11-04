import React from "react";
import { StyledDisplay } from "./styles/StyleDisplay";

const Display = ({ GameOver, text }) => (
  <StyledDisplay gameOver={GameOver}>{text}</StyledDisplay>
);

export default Display;
