import React from "react";
import styled from "styled-components";
import { ServiceCards } from "../utils/ServiceCards";

const Container = styled.div`
  display: flex;
  margin: 20px auto;
  flex-wrap: wrap;
  width: 80%;
  flex-direction: column;
`;
const Heading = styled.p`
  color: #aaa8a9;
  font-size: 20px;
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const LargeText = styled.h1`
  display: flex;
  flex: 4;
  color: #525050;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
  line-height: 3ch;
`;
const Services = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const ExpertiseSection = () => {
 
  return (
    <Container
    
    >
      <Heading>Services Offered</Heading>
      <Grid>
        <LargeText>
        Solutions We Provide.
        </LargeText>
        <SmallText>
          {" "}
          I offer personalized website design and development services to help individuals and businesses establish a professional online presence.
With a focus on user experience and accessibility, I can create custom websites that are tailored to meet your specific needs and goals.
        </SmallText>
      </Grid>
      <Services>
        <ServiceCards
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqajy5jFVLh3az4GF6IXENdHNkLDECpYiYg&usqp=CAU"
          title="Web Development"
          details="Build robust, scalable web and mobile applications with our full-stack development services."
        />{" "}
        <ServiceCards
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0qcY07VwMA45KlZ6pDfbYveClHEu9d2NOg&usqp=CAU"
          title="Data Analysis"
          details="Unlock the insights hidden in your data with our expert data analysis services."
        />{" "}
        <ServiceCards
          logo="https://www.kindpng.com/picc/m/255-2554071_beltech-2018-icons-webside-schedule-machine-learning-machine.png"
          title="Machine Learning"
          details="Unleash the power of ML on your data to drive business success with our expert services."
        />
      </Services>
    </Container>
  );
};
