import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TERMINOS, TETRONOMIS } from "../tetronomis";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETRONOMIS[type].color}></StyledCell>
);

export default Cell;
