import { useEffect } from "react";
import "../index.css";
import {
  StyledHomepageLayout,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "../components/styles/StyledHomepage";
import { SocialIcon } from "react-social-icons";

function Home(props) {
  useEffect(() => {
    document.title = "Homepage";
  }, []);
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
            className="tetris_div"
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
            V1.1.0 | &nbsp;
            <SocialIcon
              url="https://github.com/Cedric1910"
              style={{ height: 25, width: 25 }}
            />
            &nbsp;
            <SocialIcon
              url="https://www.linkedin.com/in/cedric-stephani-1500261bb/"
              style={{ height: 25, width: 25 }}
            />
          </p>
        </StyledFooter>
      </StyledHomepageLayout>
    </div>
  );
}
export default Home;
