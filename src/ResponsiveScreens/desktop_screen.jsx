import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import Mudasir from '../images/mudasir.png'
const Container = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bg};
  color: white;
  height: 100%;
  display: flex;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin: auto 0 auto 70px;
`;
const LargeText = styled.h1`
  display: flex;
  margin: 0;
  font-size: 40px;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  color: pink;
`;
const SmallText = styled.p`
  display: flex;
  padding: 15px 0;
  font-size: 16px;
  flex-wrap: wrap;
 line-height: 3ch;

  color: white;
`;
const ImageSide = styled.div`
  display: flex;
  flex: 5;
  margin: auto;
  padding: 40px 0;
`;
const Image = styled.img`
  height: 360px;
  border-radius: 25px;
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

export default function DesktopScreen() {
  AOS.init();
  return (
    <>
      <div style={{ height: window.innerHeight }} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <Container id="home">
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
            Welcome to my website! I am a web developer with a passion for creating beautiful, functional websites that help businesses and individuals establish a professional online presence. I have been working in the industry for several years and have a wealth of experience in website design and development. I am dedicated to providing high-quality services and strive to ensure that every project I work on is a success. Thank you for visiting my site and I look forward to working with you on your next web project.
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

              <A href="https://drive.google.com/file/d/1i092uCjiGcS6zJI-IAYMDIlS5UleC-nH/view?usp=share_link">
                <Button variant="outlined" color="inherit">
                  Download CV
                </Button>
              </A>
            </Buttons>
          </TextSide>

          <ImageSide>
            <Image
             src={Mudasir}
             alt="Mudasir Pandith"
            />
          </ImageSide>
        </Container>
      </div>
    </>
  );
}
