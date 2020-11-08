import React from "react";
import { StyledCell } from "./styles/StyledTetris";
import { TETROMINOS } from "../tetronomis";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
);

export default Cell;
