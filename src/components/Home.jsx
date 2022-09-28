import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";
const Container = styled.div`
  padding-top: 20px;
  background-color: ${({ theme }) => theme.bg};
  color: white;
  height: 100%;
  display: flex;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  @media (max-width: 900px) {
    padding-top: 55px;
    flex-direction: column;
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin: auto 0 auto 70px;
  @media (max-width: 450px) {
    margin: 0 20px;

    align-items: left;
  }
`;
const LargeText = styled.h1`
  display: flex;
  margin: 0;
  font-family: monospace;
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  font-family: monospace;
  text-rendering: auto;
  color: white;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
`;
const SmallText = styled.p`
  display: flex;
  padding: 15px 0;
  font-size: 18px;
  flex-wrap: wrap;
  font-family: monospace;
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  font-family: monospace;
  text-rendering: auto;
  color: white;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
`;
const ImageSide = styled.div`
  display: flex;
  flex: 5;
  margin: auto;
  padding: 40px 0;
  @media (max-width: 450px) {
    margin: 0 20px;
  }
`;
const Image = styled.img`
  height: 500px;
  border-radius: 25px;
  border: white solid 1px;

  @media (max-width: 650px) {
    height: 300px;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin: 0;
  text-align: center;
  gap: 10px;
`;

const A = styled.a`
  color: inherit;
`;

export default function Home() {
  return (
    <>
      <div>
        <Container>
          <TextSide>
            <LargeText>Hello, I'm</LargeText>
            <LargeText>
              <Typewriter
                options={{
                  strings: ["Mudasir Pandith", "Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </LargeText>
            <SmallText>
              I'm Full Stack Developer. I love to develop softwares and interact
              people with it. I develop Websites,React/Flutter Apps and Machine
              Learning Models.
            </SmallText>
            <Buttons>
              <A href="https://twitter.com/mudasirpandith7">
                {" "}
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<TwitterIcon color="white" />}
                >
                  Say Hi
                </Button>
              </A>

              <A href="https://drive.google.com/file/d/1VdFX9pmwXe3V0qMpdtTEFaiBZ-iuVtA8/view">
                <Button variant="outlined" color="inherit">
                  Download CV
                </Button>
              </A>
            </Buttons>
          </TextSide>

          <ImageSide>
            <Image
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFv0o4-1yjKag/profile-displayphoto-shrink_400_400/0/1651503799357?e=1668038400&v=beta&t=LkDHqWbTEAWH9IXMOMf9YSBsVKnahI_uJz0kIa2ZM94"
              alt=""
            />
          </ImageSide>
        </Container>
      </div>
    </>
  );
}
