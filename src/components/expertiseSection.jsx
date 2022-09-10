import React from "react";
import styled from "styled-components";
import { ServiceCards } from "../utils/ServiceCards";
const Container = styled.div`
  display: flex;
  margin: 30px auto;
  width: 80%;
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
const Services = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const ExpertiseSection = () => {
  return (
    <Container>
      <Heading>MY EXPERTISE</Heading>
      <Grid>
        <LargeText>
          Innovative <br /> Solutions
        </LargeText>
        <SmallText>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quae sapiente nesciunt nemo officiis repellat soluta quas similique
          neque eius maxime aliquid fugit debitis, odio, beatae in veritatis
          cum! Quas.{" "}
        </SmallText>
      </Grid>
      <Services>
        <ServiceCards
          title="Web Designer"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />{" "}
        <ServiceCards
          title="Data Analytics"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />{" "}
        <ServiceCards
          title="Machine Learning"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
      </Services>
    </Container>
  );
};
