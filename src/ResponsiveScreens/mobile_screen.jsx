import React,{useState} from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import Mudasir from '../images/mudasir.png'
const Container = styled.div`
  padding-top: 20px;
  background-color: ${({ theme }) => theme.bg};
  color: white;
  height: 100%;
  display: flex;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  flex-direction: column;
 
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  margin: auto 20px;
  align-items: left;
`;
const LargeText = styled.h1`
  display: flex;
  margin: 0;
  color: #e3e38c;
  text-rendering: auto;

  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
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
  margin: auto;
  flex: 3;
`;
const Image = styled.img`
  border-radius: 25px;
  height:200px;
  width: 100%;
`;
const Buttons = styled.div`
  display: flex;
  margin: 0;
  gap: 10px;
`;

const A = styled.a`
  color: inherit;
`;

export default function MobileScreen() {
 
  AOS.init();
  return (
    <div
      style={{ height: window.innerHeight - 60 }}
    
    >
      <Container id="home">
        <ImageSide>
          <Image
          src={Mudasir}
            alt="Mudasir Pandith"
          />
        </ImageSide>
        <TextSide>
          <LargeText>Hi, I'm</LargeText>
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
          Welcome to my website! I am a web developer with a passion for creating beautiful, functional websites that help businesses and individuals establish a professional online presence. 
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
      </Container>
    </div>
  );
}
