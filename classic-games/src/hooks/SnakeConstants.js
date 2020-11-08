const SNAKE_STAGE = [600, 600]; //sets snake stage dimensions
//sets snake starting point
const SNAKE_START = [
  [15, 14],
  [15, 15],
];

const APPLE_START = [1, 3]; //sets where the first apple will be, later will make a randomiser function for the start

const SCALE = 20;
const SPEED = 75; //Move 1 block per second

//directions based on the current key being pressed.
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

export { SNAKE_STAGE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };
