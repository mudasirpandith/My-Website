import React from "react";
import styled from "styled-components";
import { TestimonialCard } from "../utils/TestimonialCard";
import { data } from "../utils/data";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h1`
  display: flex;
  margin: 0;
  font-size: 24px;
  gap: 20px;
`;

const Details = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
`;
const Title = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cards = styled.div`
  display: flex;
  margin: auto auto;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Testimonials = () => {
  return (
    <Container>
      <Title>
        <Details>TESTIMONIALS</Details>
        <Header> What Happy Clients Say</Header>
      </Title>

      <Cards>
        {data[2].TestMon.map((Test) => {
          return (
            <>
              <TestimonialCard
                Details={Test.Details}
                imgUrl={Test.imgUrl}
                User={Test.User}
              />
            </>
          );
        })}
      </Cards>
    </Container>
  );
};
