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
import { createStage, checkCollision } from "../gameHelpers";

function Tetris(props) {
  const [dropTime, setDroptime] = useState(null);
  const [gameover, setGameover] = useState(false);
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");
  console.log("gameover: ", gameover);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //resets everything to create a brand new game.
    setStage(createStage());
    resetPlayer();
    setGameover(false);
  };

  //updates the current tetris object in play to drop by 1 tile/square each time while the collision is false
  const drop = () => {
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

  const dropPlayer = () => {
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
      }
    }
  };
  return (
    <div className="main-styling">
      <div className="tetris-bg">
        <StyledTetrisWrapper
          role="button"
          tabIndex="0"
          onKeyDown={(e) => move(e)}
        >
          <StyledTetris>
            <Stage stage={stage}></Stage>
            <aside>
              {gameover ? (
                <Display gameOver={gameover} text="Game Over!"></Display>
              ) : (
                <div id="tetris-displays">
                  <Display text="Score:"></Display>
                  <Display text="Rows completed:"></Display>
                  <Display text="Current Level:"></Display>
                </div>
              )}
              <StartButton callback={startGame}></StartButton>
            </aside>
          </StyledTetris>
        </StyledTetrisWrapper>
      </div>
    </div>
  );
}

export default Tetris;
