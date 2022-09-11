import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
const Container = styled.div`
  padding-top: 20px;
  background-color: rgb(88, 62, 189);
  color: white;
  height: 100%;
  display: flex;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  @media (max-width: 450px) {
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
`;
const SmallText = styled.p`
  display: flex;
  flex-wrap: wrap;
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
  height: 550px;
  @media (max-width: 450px) {
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
            <LargeText>
              Hello, I'm <br /> Mudasir Pandith{" "}
            </LargeText>
            <SmallText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              molestiae, laborum possimus ea aperiam delectus assumenda eum
              sapiente, fugit voluptates modi dolorum magni reiciendis illum
              quos adipisci officia eaque. Sequi.
            </SmallText>
            <Buttons>
              <A href="https://twitter.com/mudasirpandith7">
                {" "}
                <Button
                  color="warning"
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
