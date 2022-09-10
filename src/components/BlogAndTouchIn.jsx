import React from "react";
import styled from "styled-components";
import { GetInTouch } from "../utils/GetInTouch";

const Container = styled.div`
  display: flex;
  background-color: rgb(88, 62, 189);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  flex-direction: column;
  padding-top: 40px;
  color: white;
`;
const Heading = styled.p`
  margin: auto 0 auto 70px;
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
  margin: auto 0 auto 70px;
  display: flex;
  flex: 4;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
`;
const GetIn = styled.div`
  display: flex;
  gap: 20px;
 
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const BlogAndTouchIn = () => {
  return (
    <Container>
      <Heading>STORIES</Heading>
      <Grid>
        <LargeText>Blog Update</LargeText>
        <SmallText>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quae sapiente nesciunt nemo officiis repellat soluta quas similique
          neque eius maxime aliquid fugit debitis, odio, beatae in veritatis
          cum! Quas.{" "}
        </SmallText>
      </Grid>
      <Heading>Nothing yet</Heading>
      <GetIn>
        <GetInTouch />
      </GetIn>
    </Container>
  );
};
