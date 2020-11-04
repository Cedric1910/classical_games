import React from "react";
import Cell from "./Cell";
import StyledStage from "../components/styles/StyledStage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].width} height={stage.height}>
    {stage.map((row) =>
      row.map((cell, x) => <Cell key={x} type={cell[0]}></Cell>)
    )}
  </StyledStage>
);

export default Stage;
