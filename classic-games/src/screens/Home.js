import React from "react";
import "../index.css";

function Home(props) {
  return (
    <div className="home-bg">
      <div className="main-styling">
        <h1>This will be the homepage of the app :)</h1>
        <p>
          the first game I will be implementing is{" "}
          <a href="./games/tetris">tetris</a>
        </p>
      </div>
    </div>
  );
}
export default Home;
