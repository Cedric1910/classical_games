import React from "react";
import Tetris from "./screens/Tetris";
import Snake from "./screens/Snake";
import Home from "./screens/Home";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-styling">
        <Route path="/games/tetris" component={Tetris} />
        <Route path="/games/snake" component={Snake} />
        <Route path="/homepage" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
