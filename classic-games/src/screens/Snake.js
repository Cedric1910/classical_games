import { useState, useEffect, useRef } from "react";
import { useInterval } from "../hooks/useInterval";
//imports all the css styling used on the Snake page.
import {
  StyledSnakeWrapper,
  StyledSnake,
} from "../components/styles/StyledSnake";
import {
  SNAKE_STAGE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "../hooks/SnakeConstants";

/* This function will hold all the code needed to run Snake since its such a simple coded game so I didnt feel the 
   Create multiple different classes like Tetris. 
 */
function Snake(props) {
  const stage_canvas = useRef();
  const [dir, setDir] = useState([0, -1]);
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {};

  const endGame = () => {};

  const moveSnake = ({ keyCode }) => {
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
  };

  useEffect(() => {
    const context = stage_canvas.current.getContext("2d"); //get the stage canvas context
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0); //transform the stage into the SCALE imported from the constants file
    context.clearRect(0, 0, window.innerHeight, window.innerWidth); //clear the rectangle
    context.fillStyle = "red"; //make the snake red
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1)); //fill the snake dot and its trialing tail with the color
    context.fillStyle = "green"; //make the food green
    context.fillRect(apple[0], apple[1], 1, 1); //actually fill the rectangle which is the 'food'.
  });
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

        <canvas
          ref={stage_canvas}
          width={`${SNAKE_STAGE[0]}px`}
          height={`${SNAKE_STAGE[1]}px`}
        />
      </StyledSnake>
    </StyledSnakeWrapper>
  );
}

export default Snake;
