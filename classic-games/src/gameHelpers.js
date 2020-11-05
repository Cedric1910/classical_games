//width and height variables based on the original Tetris stage.
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//creates the stage which will be used for the tetris stage
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

/* This is a vvery simple collision detection mode but should do the job properly for my simple game of Tetris I hope. */
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  /*with this im using a nested for loop versus something like a mapping function or forEach loop as we can break out
   *when we need to which I think will allow it to run smoother overall */

  console.log(player.tetromino);
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //firstly check that we are on a proper cell
      if (player.tetromino[y][x] !== 0) {
        //then check that we are in the designated game area. (width + bottom)
        /* Then check that we are in the designated width and height of the game area, and also that the
         * next cell isnt set to clear as this will mean we arent actually colliding with anything
         */
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][
            1 !== "clear"
          ]
        ) {
          return true;
        }
      }
    }
  }
};
