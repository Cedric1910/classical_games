import { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";
import {
  StyledSnakeWrapper,
  StyledSnake,
} from "../components/styles/StyledSnake";

function Snake(props) {
  return (
    <StyledSnakeWrapper>
      <StyledSnake>
        <div className="temp_body">
          <h1 align="center">Snake Game</h1>
          <p align="center">
            If you wish to play other games you can go back to the{" "}
            <a href="/homepage">homepage</a>.
          </p>
        </div>
      </StyledSnake>
    </StyledSnakeWrapper>
  );
}

export default Snake;
