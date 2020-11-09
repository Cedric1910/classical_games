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
  FRUIT_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "../hooks/SnakeConstants";

import Display from "../components/TetrisDisplay";
import StartButton from "../components/Start_button";

/* This function will hold all the code needed to run Snake since its such a simple coded game so I didnt feel the 
   Create multiple different classes like Tetris. 
 */
function Snake(props) {
  const stage_canvas = useRef();
  const [dir, setDir] = useState([0, -1]);
  const [snake, setSnake] = useState(SNAKE_START);
  const [fruit, setFruit] = useState(FRUIT_START);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [total_eaten, setTotal_eaten] = useState(0);
  const [current_fruit, setCurrentFruit] = useState("red");

  useInterval(() => gameLoop(), speed);

  const startGame = () => {
    setSnake(SNAKE_START);
    setFruit(FRUIT_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const createFruit = () =>
    fruit.map((_a, i) => Math.floor(Math.random() * (SNAKE_STAGE[i] / SCALE)));

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

  //creates a random color from a pre-defined array to display which color the next fruit will be
  const randomFruit = () => {
    const fruit_colors = ["red", "orange", "blue", "purple", "gold"];
    const next = fruit_colors[Math.floor(Math.random() * fruit_colors.length)];
    setCurrentFruit(next);
  };

  //checks to see if the current snake heads new move has collided with the fruit object of the game.
  const checkFruitCollision = (newSnake) => {
    if (newSnake[0][0] === fruit[0] && newSnake[0][1] === fruit[1]) {
      //window.alert("inside the check fruit if loop");

      //if loop to see which colour the fruit was and what points to update by.
      if (current_fruit === "red") {
        setScore((prev) => prev + 10);
      } else if (current_fruit === "orange") {
        setScore((prev) => prev + 15);
      } else if (current_fruit === "blue") {
        setScore((prev) => prev + 20);
      } else if (current_fruit === "purple") {
        setScore((prev) => prev + 50);
      } else if (current_fruit === "gold") {
        setScore((prev) => prev + 100);
      }

      setTotal_eaten((prev) => prev + 1); // updates the total eaten display

      let newFruit = createFruit();
      while (checkCollision(newFruit, newSnake)) {
        newFruit = createFruit();
      }
      setFruit(newFruit); //sets the new fruit
      randomFruit(); //sets a random colour for the new fruit
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    //console.log(snakeCopy);
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    //console.log(newSnakeHead);
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkFruitCollision(snakeCopy)) snakeCopy.pop();
    //snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = stage_canvas.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    context.fillStyle = "green";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = current_fruit;
    context.fillRect(fruit[0], fruit[1], 1, 1);
  }, [snake, fruit, gameOver]);

  return (
    <StyledSnakeWrapper>
      <StyledSnake role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
        <div>
          <canvas
            ref={stage_canvas}
            width={`${SNAKE_STAGE[0]}px`}
            height={`${SNAKE_STAGE[1]}px`}
          />
        </div>
        <aside>
          {gameOver ? (
            <div className="gameOver-displays">
              <Display text={"Game Over!"}></Display>
              <Display text={`Score: ${score}`}></Display>
              <Display text={`Fruit: ${total_eaten}`}></Display>
              <StartButton callback={startGame}>Start Game</StartButton>
            </div>
          ) : (
            <div id="snake-displays">
              <Display text={`Score: ${score}`}></Display>
              <Display text={`Fruit: ${total_eaten}`}></Display>
              <StartButton callback={startGame}>Start Game</StartButton>
            </div>
          )}
        </aside>
        <div className="instructions">
          <h2> Welcome to Snake!</h2>
          <p>
            This is a very basic implementation of the well known game Snake!
          </p>
          <h3>Instructions:</h3>
          <p>
            To start the game simply press the "start button" the aim of the
            game is to grow your "snake" as long as possible by eating the green
            food source on the screen. The game is over when your snake collides
            the edge of the playing field or itself.
          </p>
          <p>
            You can move in the direction you want by pressing the arrow keys.
            If you wish to restart your current game simply press enter.
          </p>
          <p>
            If you wish to play other games you can go back to the{" "}
            <a href="/homepage">homepage</a>.
          </p>
        </div>
      </StyledSnake>
    </StyledSnakeWrapper>
  );
}

export default Snake;
