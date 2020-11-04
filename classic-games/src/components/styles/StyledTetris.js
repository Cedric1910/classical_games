import styled from "styled-components";

import bgImage from "../../img/tetris_wallpaper.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgImage}), #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100px;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
