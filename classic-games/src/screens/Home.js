import React from "react";
import "../index.css";
import { StyledHomepageLayout } from "../components/styles/StyledHomepage";

function Home(props) {
  return (
    <div className="home-bg">
      <StyledHomepageLayout></StyledHomepageLayout>
    </div>
  );
}
export default Home;
