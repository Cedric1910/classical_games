import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import {
  StyledHomepageLayout,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "../components/styles/StyledHomepage";

function Home(props) {
  return (
    <div className="home-bg">
      <StyledHomepageLayout>
        <StyledHeader>
          {" "}
          <h1>Cedric's Arcade</h1>
        </StyledHeader>
        <StyledBody>
          <button onClick={() => props.history.push("/games/tetris")}>
            Tetris
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
