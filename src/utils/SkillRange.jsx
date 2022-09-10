import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  flex-direction: column;
`;
const Number = styled.img`
  display: flex;

  height: 45px;
  margin: 0 auto 15px auto;
`;
const Name = styled.p`
  flex: 3;
  display: flex;
  margin: 0 auto;
`;
export const SkillRange = (props) => {
  return (
    <Container>
      <Number src={props.SkillLogo} />
      <Name>{props.Skill}</Name>
    </Container>
  );
};
