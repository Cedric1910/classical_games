import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TERMINOS, TETRONOMIS } from "../tetronomis";

const Cell = ({ type }) => (
  <StyledCell type={"L"} color={TETRONOMIS["L"].color}></StyledCell>
);

export default Cell;
