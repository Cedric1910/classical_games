import { useState } from "react";
import { randomTetromino } from "../tetronomis";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collider: false,
  });

  return [player];
};
