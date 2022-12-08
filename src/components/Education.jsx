import React from "react";
import styled from "styled-components";
import { EducationCard } from "../utils/EducationCard";
import { data } from "../utils/data";

import AOS from 'aos'
const Container = styled.div`
  display: flex;
  background-color: #f7f7f7;
  padding: 30px;

  flex-direction: column;
`;
const Heading = styled.p`
  color: #aaa8a9;
  font-size: 20px;
`;
const Grid = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
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
const List = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Education = () => {
  AOS.init()
  return (
    <Container 
   
    >
      <Heading>MY EDUCATION</Heading>
      <Grid>
        <LargeText>Education</LargeText>
        <SmallText>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quae sapiente nesciunt nemo officiis repellat soluta quas similique
          neque eius maxime aliquid fugit debitis, odio, beatae in veritatis
          cum! Quas.{" "}
        </SmallText>
      </Grid>
      <List>
        {data[1].Colleges.map((college, index1) => {
          return (
            <React.Fragment key={`1${index1}`}>
              <EducationCard
                date={college.Date}
                CollegeName={college.CollegeName}
                Details={college.Details}
              />
            </React.Fragment>
          );
        })}
      </List>
    </Container>
  );
};
