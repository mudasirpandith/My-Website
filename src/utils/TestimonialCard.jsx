import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  width: 250px;
  padding: 20px;
  border-radius: 10px;
`;
const Comma = styled.img`
  height: 20px;
`;
const Details = styled.p`
  display: flex;
  color: #aaa8a9;
`;
const User = styled.div`
  display: flex;
  gap: 10px;
`;
const UserIcon = styled.img`
  flex: 1;
  display: flex;
  height: 60px;
  border-radius: 50%;
`;
const UserName = styled.h1`
  flex: 7;
  display: flex;
  font-size: 20px;
`;

export const TestimonialCard = (props) => {
  return (
    <Container>
      <Comma src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52savCAZLY6S3fgKK_2cuDmfih59KZLXmrydRA1k1SMJByY_VBKmcdthDTNXfpkDQk2Y&usqp=CAU" />
      <Details> {props.Details}</Details>
      <User>
        <UserIcon src={props.imgUrl} />
        <UserName>{props.User}</UserName>
      </User>
    </Container>
  );
};
