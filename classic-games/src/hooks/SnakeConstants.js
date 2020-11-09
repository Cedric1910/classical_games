const SNAKE_STAGE = [560, 560]; //sets snake stage dimensions
//sets snake starting point
const SNAKE_START = [
  [14, 13],
  [14, 14],
];

const APPLE_START = [14, 5]; //sets where the first apple will be, later will make a randomiser function for the start

const SCALE = 20;
const SPEED = 90;

//directions based on the current key being pressed.
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

export { SNAKE_STAGE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };
