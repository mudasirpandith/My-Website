import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 170px;
  padding: 10px;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const Logo = styled.img`
  display: flex;
  height: 55px;
  width: 55px;
`;
const TextPart = styled.div`
  display: flex;

  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  display: flex;
  margin: 0 auto;
  font-size: 17px;
`;
const Details = styled.p`
  color: #aaa8a9;
  margin: 5px auto 0 auto;
  font-size: 12px;
 justify-content: center;
 line-height: 3ch;
  display: flex;
`;

export const ServiceCards = (props) => {
  return (
    <Container>
      <Logo src={props.logo} />

      <TextPart>
        <Title>{props.title}</Title>
        <Details>{props.details}</Details>
      </TextPart>
    </Container>
  );
};
