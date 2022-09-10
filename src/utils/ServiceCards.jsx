import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding: 10px;

  border-radius: 10px;
`;
const Logo = styled.img`
  display: flex;
  height: 30px;
  width: 60px;
  flex: 5;
`;
const TextPart = styled.div`
  display: flex;
  flex: 3;
  padding-top: 30px;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  margin: 0;
  font-size: 20px;
`;
const Details = styled.p`
  color: #aaa8a9;
  font-size: 14px;
  display: flex;
`;
export const ServiceCards = (props) => {
  return (
    <Container>
      <Logo src="https://w7.pngwing.com/pngs/288/577/png-transparent-logo-online-and-offline-graphic-designer-architecture-logo-design-web-design-company-orange.png" />

      <TextPart>
        <Title>{props.title}</Title>
        <Details>{props.details}</Details>
      </TextPart>
    </Container>
  );
};
