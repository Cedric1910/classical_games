const SNAKE_STAGE = [800, 800]; //sets snake stage dimensions
//sets snake starting point
const SNAKE_START = [
  [8, 7],
  [8, 8],
];

const APPLE_START = [2, 5]; //sets where the first apple will be, later will make a randomiser function for the start

const SCALE = 40;
const SPEED = 100; //Move 1 block per second

//directions based on the current key being pressed.
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

export { SNAKE_STAGE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };