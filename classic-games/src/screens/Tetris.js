import React from "react";
import Cell from "../components/Cell";
import Display from "../components/Display";
import Start_button from "../components/Start_button";
import Stage from "../components/Stage";
import { createStage } from "../gameHelpers";

function Tetris(props) {
  return (
    <div id="main-styling">
      <div>
        <Stage stage={createStage()}></Stage>
        <aside>
          <div id="tetris-displays">
            <Display text="Score:"></Display>
            <Display text="Rows completed:"></Display>
            <Display text="Current Level:"></Display>
          </div>
          <Start_button></Start_button>
        </aside>
      </div>
    </div>
  );
}

export default Tetris;
