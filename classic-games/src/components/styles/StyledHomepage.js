import styled from "styled-components";

export const StyledHomepageLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 43rem;
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
  text-align: center;
  padding-top: 10px;
`;

export const StyledBody = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;

  div {
    margin: auto;
    height: 10%;
    width: 25%;
    text-align: center;
    padding-bottom: 1%;  
    box-shadow: 5px 5px 10px;
    background-color: black; opacity: 90%; 

    :hover{
        height: 90%; 
        transition-duration: 0.5s;
        }
    }
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 2rem;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 12px;
  font-family: "Helvetica Neue";
`;

export const GameButton = styled.div`
  margin: auto;
  height: 10%;
  width: 25%;
`;
