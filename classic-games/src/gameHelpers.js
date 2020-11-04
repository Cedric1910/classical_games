//width and height variables based on the original Tetris stage.
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//creates the stage which will be used for the tetris stage
export const createStage = () =>
  Array.form(
    Array(STAGE_HEIGHT),
    () => new Array(STAGE_WIDTH.fill([0, "clear"]))
  );
