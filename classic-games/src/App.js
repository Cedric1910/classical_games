import React from "react";
import Tetris from "./screens/Tetris";
import Home from "./screens/Home";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-styling">
        <Route path="/games/tetris" component={Tetris} />
        <Route path="/homepage" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
