import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 20px;
  background-color: rgb(88, 62, 189);
  color: white;

  display: flex;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
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
  padding: 20px 0;
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
const ButtonY = styled.button`
  display: flex;
  border: 1px white;
  padding: 10px 20px;
  background-color: #f6f7a9;
  cursor: pointer;
  border-radius: 10px;
`;
const Button = styled.button`
  display: flex;
  border: 1px white solid;
  padding: 10px 20px;
  background: transparent;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;
export default function Section2() {
  console.log(window.innerHeight - 150);
  return (
    <>
      <div >
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
              <ButtonY>About</ButtonY>
              <Button>Download CV</Button>
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
