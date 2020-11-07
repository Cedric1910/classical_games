import React from "react";
import "../index.css";
import {
  StyledHomepageLayout,
  StyledHomepageMenu,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "../components/styles/StyledHomepage";

function Home(props) {
  return (
    <div className="home-bg">
      <StyledHomepageLayout>
        <StyledHeader> HEADER</StyledHeader>
        <StyledBody> BODY</StyledBody>
        <StyledFooter> FOOTER</StyledFooter>
      </StyledHomepageLayout>
    </div>
  );
}
export default Home;
