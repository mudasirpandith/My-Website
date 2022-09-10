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
  gap: 20px;
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
        <StatusCard imgUrl="https://www.itij.com/sites/default/files/styles/full_size_view/public/2020-11/allianz-partners-award.jpg?h=b7858df9&itok=IGRJDtJb" />{" "}
        <StatusCard imgUrl="https://t3.ftcdn.net/jpg/03/37/67/30/360_F_337673028_wZqTUA4lx1NuzIQZtfTVPbRnFcygY0hL.jpg" />{" "}
        <StatusCard imgUrl="https://t3.ftcdn.net/jpg/03/37/67/30/360_F_337673028_wZqTUA4lx1NuzIQZtfTVPbRnFcygY0hL.jpg" />{" "}
        <StatusCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQeEJGfa0IIOlMolXqZDv0g80GAs5CNms5Q&usqp=CAU" />{" "}
      </Statistics>
    </Container>
  );
};
