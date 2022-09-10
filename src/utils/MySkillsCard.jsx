import React from "react";
import styled from "styled-components";
import { SkillRange } from "./SkillRange";
import { data } from "../utils/data";
const Container = styled.div`
  display: flex;
  margin: 8px 5px;
  background-color: #f7f7f7;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 10px;
  flex: 1;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const TextSide = styled.div`
  display: flex;
  margin: auto 0 auto 70px;
  flex-direction: column;
  flex: 4;
  @media (max-width: 500px) {
    margin: 0 20px;

    align-items: left;
  }
`;

const Heading = styled.p`
  color: #aaa8a9;
  font-size: 20px;
`;
const LargeText = styled.h1`
  display: flex;
  flex: 4;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
`;
const Skills = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex: 4;
`;
export const MySkillsCard = () => {
  console.table(data);
  return (
    <Container>
      <TextSide>
        <Heading>MY SKILLS</Heading>
        <LargeText>
          Beautiful <br /> and unique digital <br /> experience
        </LargeText>
        <SmallText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          officiis veritatis quis ducimus ab quisquam reprehenderit tempore
          eaque et dicta quas, fugiat maiores dignissimos provident neque minus
          deserunt maxime explicabo.
        </SmallText>
      </TextSide>
      <Skills>
        {data[0].Skills.map((skill) => {
          return (
            <>
              <SkillRange Skill={skill.Skill} SkillLogo={skill.SkillLogo} />
            </>
          );
        })}
      </Skills>
    </Container>
  );
};
