import styled from "styled-components";
import background_img from "../../img/home_background.png";

export const StyledHomepageLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 43rem;
  border: solid 1px red;
  color: white;
  text-align: center;

  a:link,
  a:visited {
    color: red;
  }
  display: flex;
  flex-direction: column;
  div {
    border: 1px solid green;
  }
`;

export const StyledHomepageMenu = styled.div`
  width: 100%;
`;
