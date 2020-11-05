import { useState } from "react";
import Cell from "../components/Cell";
import Display from "../components/Display";
import Start_button from "../components/Start_button";
import Stage from "../components/Stage";
import "../index.css";
import {
  StyledTetris,
  StyledTetrisWrapper,
} from "../components/styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { createStage } from "../gameHelpers";

function Tetris(props) {
  const [dropTime, setDroptime] = useState(null);
  const [gameover, setGameover] = useState(false);
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    //resets everything to create a brand new game.
    setStage(createStage());
    resetPlayer();
  };

  //updates the current tetris object in play to drop by 1 tile/square each time while the collision is false
  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {};

  /* this const takes care of the player being able to move his arrow keys and control the tetris objects */
  const move = ({ keycode }) => {
    if (!gameover) {
      if (keycode === 37) {
        moveplayer(-1);
      } else if (keycode === 39) {
        moveplayer(1);
      } else if (keycode === 40) {
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
              <Start_button onClick={startGame}></Start_button>
            </aside>
          </StyledTetris>
        </StyledTetrisWrapper>
      </div>
    </div>
  );
}

export default Tetris;
