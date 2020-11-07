import styled from "styled-components";

export const StyledHomepageLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 43rem;
  border: solid 1px red;
  color: white;

  a:link,
  a:visited {
    color: red;
  }
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px blue solid;
  text-align: center;
  padding-top: 10px;
`;

export const StyledBody = styled.div`
  width: 100%;
  height: 35rem;
  border: 1px green solid;
  display: flex;
  justify-content: center;

  button {
    margin: auto;
    height: 10%;
    width: 25%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: block;
    transition: all 0.25s ease;

    :hover {
      height: 90%;
      -webkit-transform: scale(1);
    }
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 2rem;
  padding-top: 0.5rem;
  border: 1px orange solid;
  text-align: center;
  font-size: 12px;
`;
