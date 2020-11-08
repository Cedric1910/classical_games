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

  useInterval(() => gameLoop(), speed);

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const createApple = () => {
    apple.map((_a, i) => Math.floor(Math.random() * (SNAKE_STAGE[i] / SCALE)));
  };

  const moveSnake = ({ keyCode }) => {
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
  };

  //collision method to see if the snake has collided with any of the stage borders or another part of itself
  const checkCollision = (piece, snk = snake) => {
    // check to see if a collision has occured with the border
    if (
      piece[0] * SCALE >= SNAKE_STAGE[0] ||
      piece[1] * SCALE >= SNAKE_STAGE[1] ||
      piece[0] < 0 ||
      piece[1] < 0
    ) {
      return true;
    }
    //check to see if a collision has occured with another part of the snake
    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    //no collisions have occured and we can continue with the game.
    return false;
  };

  //checks to see if the current snake heads new move has collided with the apple object of the game.
  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple(); //create a new apple
      while (checkCollision(newApple, newSnake)) {
        //checks to see if the new apple object is within the current snale
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = stage_canvas.current.getContext("2d"); //get the stage canvas context
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0); //transform the stage into the SCALE imported from the constants file
    context.clearRect(0, 0, window.innerHeight, window.innerWidth); //clear the rectangle
    context.fillStyle = "red"; //make the snake red
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1)); //fill the snake dot and its trialing tail with the color
    context.fillStyle = "green"; //make the food green
    context.fillRect(apple[0], apple[1], 1, 1); //actually fill the rectangle which is the 'food'.
  }, [snake, apple, gameOver]);
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
        <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
          <canvas
            ref={stage_canvas}
            width={`${SNAKE_STAGE[0]}px`}
            height={`${SNAKE_STAGE[1]}px`}
          />
          {gameOver && <div>GAME OVER!</div>}
          <button onClick={startGame}>Start Game</button>
        </div>
      </StyledSnake>
    </StyledSnakeWrapper>
  );
}

export default Snake;
