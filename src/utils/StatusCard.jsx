import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.img`
  display: flex;
  width: 60px;
  flex: 6;
`;

const Number = styled.h2`
  display: flex;
  flex: 1;
  font-size: 20px;
  margin: 6px 0;
`;
const Details = styled.p`
  margin: 0 auto;
  display: flex;
  color: #aaa8a9;
  flex: 1;
  font-size: 10px;
`;

export const StatusCard = (props) => {
  return (
    <Container>
      <Icon src={props.imgUrl} />
      <Number>12</Number>
      <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed
      </Details>
    </Container>
  );
};
