import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 16fr);
  grid-gap 1px; 
  border: solid 2px #333; 
  width: 100px; 
  max-width: 25vw; 
  background: #111; 
`;
