import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: #f7f7f7;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  color: black;
  padding-top: 30px;
  margin: 10px;
  width: 100%;
`;
const Heading = styled.p`
  color: #aaa8a9;
  margin: 3px 0;
  font-size: 20px;
`;
const LargeText = styled.h1`
  display: flex;
  flex: 4;
  margin: 5px 0;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
`;
const TextSide = styled.div`
  display: flex;
  margin: auto 0 auto 70px;
  flex: 3;
  flex-direction: column;
`;
const FormSide = styled.div`
  display: flex;
  flex: 5;
`;
export const GetInTouch = () => {
  return (
    <Container>
      <TextSide>
        <Heading>Contact</Heading>
        <LargeText>Get In Touch</LargeText>
        <SmallText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          voluptates iste nihil minima provident modi aut iusto necessitatibus
          asperiores blanditiis esse nisi, consectetur magnam natus, illum quos
          laboriosam reprehenderit reiciendis.
        </SmallText>
      </TextSide>
      <FormSide>
        <LargeText>Want a collaboration?</LargeText>
      </FormSide>
    </Container>
  );
};
