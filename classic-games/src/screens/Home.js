import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import {
  StyledHomepageLayout,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "../components/styles/StyledHomepage";
import tetris_btn_img from "../img/tetris_btn_img.jpg";

function Home(props) {
  //console.log(logo);
  return (
    <div className="home-bg">
      <StyledHomepageLayout>
        <StyledHeader>
          {" "}
          <h1>Cedric's Old School Arcade</h1>
        </StyledHeader>
        <StyledBody>
          <button onClick={() => props.history.push("/games/tetris")}>
            <img src={tetris_btn_img} alt="Tetris"></img>
          </button>
          <button onClick={() => props.history.push("/games/tetris")}>
            Game 2
          </button>
          <button onClick={() => props.history.push("/games/tetris")}>
            Game 3
          </button>
        </StyledBody>
        <StyledFooter>
          {" "}
          <p>
            {" "}
            All rights reserved. | Created and designed by Cedric Stephani |
            V1.0.0
          </p>
        </StyledFooter>
      </StyledHomepageLayout>
    </div>
  );
}
export default Home;
