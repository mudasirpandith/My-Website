import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  flex-direction: column;
`;
const Number = styled.h2`
  display: flex;
  flex: 6;
  margin: 0 auto;
`;
const Name = styled.p`
  flex: 2;
  display: flex;
  margin: 0 auto;
`;
export const SkillRange = () => {
  return (
    <Container>
      <Number>89%</Number>
      <Name>Reactjs</Name>
    </Container>
  );
};
