import React from "react";
import "../index.css";

function Home(props) {
  return (
    <div className="home-bg">
      <div className="main-styling">
        <h1>Cedric's old school arcade.</h1>
        <h3>
          This is just a fun solo project im doing in my spare time with some of
          my favourite simple games<br></br>
          from back in the day. If you have any idea which one I should
          implement next let me know!
        </h3>
        <p>
          Current Games: <br></br>
          <a href="./games/tetris">Tetris</a>. <br></br>
          <br></br>
          Yes this homepage looks very unfinished. As you can see down the
          bottom right hand corner we are in the early versions of this<br></br>
          application. In version 2 I will be re-designing the Homepage to give
          it a more modern and responsive look, but first I wanted to get at
          least 1 game working.
        </p>
      </div>
    </div>
  );
}
export default Home;
