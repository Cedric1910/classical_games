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

export const StyledFooter = styled.div`
  width: 100%;
  height: 2rem;
  padding-top: 0.5rem;
  border: 1px orange solid;
  text-align: center;
  font-size: 12px;
`;

export const StyledBody = styled.div`
  width: 100%;
  height: 35rem;
  border: 1px green solid;
  display: flex;
  justify-content: center;
`;
