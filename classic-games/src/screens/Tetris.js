import { useState } from "react";
import Cell from "../components/Cell";
import Display from "../components/Display";
import StartButton from "../components/Start_button";
import Stage from "../components/Stage";
import "../index.css";
import {
  StyledTetris,
  StyledTetrisWrapper,
} from "../components/styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { createStage, checkCollision } from "../gameHelpers";
import { useGameStatus } from "../hooks/useGameStatus";

function Tetris(props) {
  const [dropTime, setDroptime] = useState(null);
  const [gameover, setGameover] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  //console.log("re-render");
  //console.log("gameover: ", gameover);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //resets everything to create a brand new game.
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setGameover(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  //updates the current tetris object in play to drop by 1 tile/square each time while the collision is false
  const drop = () => {
    //increases level when the player clears 10 rows.
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDroptime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 0.5, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        setGameover(true);
        setDroptime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameover) {
      if (keyCode === 40) {
        setDroptime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDroptime(null);
    drop();
  };

  /* this const takes care of the player being able to move his arrow keys and control the tetris objects */
  const move = ({ keyCode }) => {
    if (!gameover) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <div className="main-styling">
      <div className="tetris-bg">
        <StyledTetrisWrapper
          role="button"
          tabIndex="0"
          onKeyDown={(e) => move(e)}
          onKeyUp={keyUp}
        >
          <StyledTetris>
            <Stage stage={stage}></Stage>
            <aside>
              {gameover ? (
                <Display gameOver={gameover} text="Game Over!"></Display>
              ) : (
                <div id="tetris-displays">
                  <Display text={`Score: ${score}`}></Display>
                  <Display text={`Rows Completed: ${rows}`}></Display>
                  <Display text={`Level: ${level}`}></Display>
                </div>
              )}
              <StartButton callback={startGame}></StartButton>
            </aside>
            <div className="instructions">
              <h2>Welcome to Tetris!</h2>
              <h3>Instructions:</h3>
              <p>
                To start the game simply press the "Start Game" button. The aim
                of the game is to line up falling blocks which fit together into
                a full vertical row. When a perfect line is created the blocks
                will vanish and the blocks above will be moved down one line.
                Each line which is cleared will provide you with a number of
                points, you can clear multiple lines which in return will
                provide an added number of points.
                <br />
                <p>
                  You can move by using your computer arrows and pressing left
                  right or down. To rotate the shape press the up arrow.
                  Pressing enter will reset your current game.
                </p>
              </p>
            </div>
          </StyledTetris>
        </StyledTetrisWrapper>
      </div>
    </div>
  );
}

export default Tetris;
