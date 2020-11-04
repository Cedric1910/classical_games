import React from "react";
import "../index.css";

function Home(props) {
  return (
    <div className="home-bg">
      <div className="main-styling">
        <h1>This will be the homepage of the app :)</h1>
        <p>
          the first game I will be implementing is my visualisation of the game{" "}
          <a href="./games/tetris">Tetris</a>. <br></br>The homepage is on my
          to-do list of giving a full visual upgrade with a more responsive and
          clean looking design. Check back for updates.
        </p>
      </div>
    </div>
  );
}
export default Home;
