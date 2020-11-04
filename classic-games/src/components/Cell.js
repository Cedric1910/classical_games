import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TERMINOS, TETRONOMIS } from "../tetronomis";

const Cell = ({ type }) => (
  <StyledCell type={"L"} color={TETRONOMIS["L"].color}>
    cell
  </StyledCell>
);

export default Cell;
