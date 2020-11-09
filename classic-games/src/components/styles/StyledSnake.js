import styled from "styled-components";
import bgImage from "../../img/snake_wallpaper.jpg";

export const StyledSnakeWrapper = styled.div`
  background-image: url(${bgImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

export const StyledSnake = styled.div`
  padding-top: 2%;
  display: flex;
  canvas {
    background: black;
    border: 4px solid #333;
    opacity: 90%;
  }

  aside {
    padding: 10px;
    max-width: 20%;
  }
  .instructions {
    width: 100%;
    max-width: 600px;
    height: 100%;
    color: #999;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    background-color: black;
  }
`;
