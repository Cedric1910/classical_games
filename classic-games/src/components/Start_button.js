import React from "react";
import Stage from "./Stage";
import { StartButton } from "./styles/StyledStartButton";

const Start_button = ({ callback }) => (
  <StartButton onClick={callback}> Start game </StartButton>
);

export default Start_button;
