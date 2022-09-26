import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  gap: 20px;
`;
const Icon = styled.div`
  width: 5px;
  height: 5px;
  border: solid 20px ${({ theme }) => theme.bg};
  border-radius: 10px;
  background-color: yellow;
  display: flex;
`;
const Date = styled.h2`
  display: flex;
  margin: 0;
`;

const College = styled.div`
  flex-direction: column;
  display: flex;
  padding: 10px 10px;
  margin-left: 50px;
  border-radius: 10px;
  background-color: white;
`;
const CollegeName = styled.p`
  display: flex;
  margin: 0;
`;
const Details = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
`;
export const EducationCard = (props) => {
  return (
    <Container >
      <Header>
        <Icon></Icon>
        <Date>{props.date}</Date>
      </Header>
      <College>
        <CollegeName>{props.CollegeName}</CollegeName>
        <Details>{props.Details}</Details>
      </College>
    </Container>
  );
};
