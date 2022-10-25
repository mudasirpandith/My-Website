import React from "react";
import styled from "styled-components";
import { GetInTouch } from "../utils/GetInTouch";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  flex-direction: column;
  margin-top: 30px;
  padding-top: 40px;
  color: white;
`;
const Heading = styled.p`
  margin: auto 0 auto 70px;
  color: #aaa8a9;
  font-size: 20px;
  @media (max-width: 500px) {
    margin: 20px;
  }
`;
const Grid = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 10px 10px;
  }
`;
const LargeText = styled.h1`
  margin: auto 0 auto 70px;
  display: flex;
  flex: 4;
  @media (max-width: 500px) {
    margin: 20px 10px;
  }
`;

const Icon = styled.h1`
  margin: auto 0 auto 70px;
  display: flex;
  flex: 4;

  @media (max-width: 500px) {
    margin: 20px 10px;
  }
`;
const SocialHeader = styled.h1`
  margin: auto 0 auto 70px;
  display: flex;
  flex: 4;
  @media (max-width: 500px) {
    margin: 5px 10px;
  }
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  flex: 4;
  @media (max-width: 500px) {
    margin: 4px 10px;
  }
`;
const GetIn = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Socials = styled.div`
  display: flex;
  margin: 30px auto;
  gap: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const A = styled.a`
  color: inherit;
  padding: 4px;
  height: 35px;
  width: 35px;
  margin: 20px;
  text-align: center;
  border: 1px solid white;
  border-radius: 50%;
  &:hover {
    color: red;
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.bg};
  }
  .title {
    color: red;
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
      <Socials>
        <SocialHeader>Social Media</SocialHeader>
        <Icon>
          {" "}
          <A
            href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/"
            title="LinkedIn Profile"
          >
            <LinkedIn />
          </A>
          <A href="https://github.com/mudasirpandith" title="Github Profile">
            <GitHub />
          </A>
          <A href="mailto:mudasirpandith789@gmail.com" title="Mail me">
            <Email />
          </A>
          <A
            href="https://www.instagram.com/mudasirpandith_/"
            title="Instagram Profile"
          >
            <InstagramIcon />
          </A>
        </Icon>
      </Socials>
    </Container>
  );
};
