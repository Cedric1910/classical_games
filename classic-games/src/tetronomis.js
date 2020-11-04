//This export holds the different shapes allowed inthe Tetris minigame.
export const TETRONOMIS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "0,255,255",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "255, 51, 153",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "255, 153, 0",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "204, 0, 153",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "255, 255, 0",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "255, 51, 0",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "0, 255, 0",
  },
};

//creates a random order of all tetris shapes in the app.
export const randomTetromino = () => {
  const tetrominos = "ZSOTLJI";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETRONOMIS[randomTetromino];
};
