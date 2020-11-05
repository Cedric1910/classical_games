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
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {};

  const startGame = () => {};

  const drop = () => {};

  const dropPlayer = () => {};

  const move = ({ keycode }) => {};
  return (
    <div className="main-styling">
      <div className="tetris-bg">
        <StyledTetrisWrapper>
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
              <Start_button></Start_button>
            </aside>
          </StyledTetris>
        </StyledTetrisWrapper>
      </div>
    </div>
  );
}

export default Tetris;
