import React from "react";
import styled from "styled-components";
import { MySkillsCard } from "../utils/MySkillsCard";
import { StatusCard } from "../utils/StatusCard";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(88, 62, 189);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
const SkillSet = styled.div`
  display: flex;
`;
const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 500px) {
    margin: auto 30px;
  }
`;
export const MySkills = () => {
  return (
    <Container>
      <SkillSet>
        <MySkillsCard />
      </SkillSet>

      <Statistics>
        <StatusCard /> <StatusCard /> <StatusCard /> <StatusCard />{" "}
      </Statistics>
    </Container>
  );
};
