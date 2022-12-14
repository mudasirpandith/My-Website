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
  flex: 4;  color: #525050;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
  line-height: 3ch;
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
          I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering. I am passionate about technology and enjoy learning about the latest developments in the field. I am excited to see where my education will take me in the future.
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
