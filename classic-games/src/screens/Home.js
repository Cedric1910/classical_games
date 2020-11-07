import React from "react";
import "../index.css";
import {
  StyledHomepageLayout,
  StyledHomepageMenu,
} from "../components/styles/StyledHomepage";

function Home(props) {
  return (
    <div className="home-bg">
      <StyledHomepageLayout>
        <div> HEADER</div>
        <div> BODY</div>
        <div> FOOTER</div>
      </StyledHomepageLayout>
    </div>
  );
}
export default Home;
