import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import {
  StyledHomepageLayout,
  StyledHeader,
  StyledBody,
  StyledFooter,
  GameButton,
} from "../components/styles/StyledHomepage";
import tetris_btn_img from "../img/tetris_btn_img.png";

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
          <div
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "games/tetris";
            }}
          >
            <h1>Tetris</h1>
          </div>
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
