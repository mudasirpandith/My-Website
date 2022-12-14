import React from "react";
import styled from "styled-components";
import { SkillRange } from "./SkillRange";
import { data } from "../utils/data";

const Container = styled.div`
  display: flex;
  margin: 8px 5px;
  background-color: #f7f7f7;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px;
  gap: 20px;
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
  color: #525050;
  flex: 4;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
  line-height: 3ch;
`;
const Skills = styled.div`
  display: flex;
  gap: 15px;
  padding-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;
  flex: 4;
`;
export const MySkillsCard = () => {
  return (
    <Container id="skills">
      <TextSide>
        <Heading>MY SKILLS</Heading>
        <LargeText>
        Professional Skills
        </LargeText>
        <SmallText>
        As a highly skilled and experienced professional, I am proficient in a range of technology-related skills and well-versed in the latest advancements in the field. I am committed to staying up-to-date with the latest trends and developments in the industry. I am confident in my ability to effectively apply my skills and knowledge to contribute to the success of any team or project.
        </SmallText>
      </TextSide>
      <Skills>
        {data[0].Skills.map((skill,index) => {
          return (
            <React.Fragment key={index}>
              <SkillRange
                key={skill.id}
                Skill={skill.Skill}
                SkillLogo={skill.SkillLogo}
              />
            </React.Fragment>
          );
        })}
      
      </Skills>
    </Container>
  );
};
