import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 40px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: rgb(88, 62, 189);
  color: white;
  flex: 1;
  margin: 0 0 0 0;
  padding: 10px 20px;
`;
const Heading = styled.h1`
  display: flex;
  margin: 0;

  flex: 1;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: right;
  flex: 1;
  gap: 20px;
`;
const A = styled.a`
  color: inherit;
  padding: 4px;
  height: 25px;
  width: 25px;
  text-align: center;
  border: 1px solid white;
  border-radius: 50%;
`;
export const Header = () => {
  return (
    <Container>
      <Heading>MP</Heading>

      <Icons>
        <A href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/">
          <LinkedIn />
        </A>
        <A href="https://github.com/mudasirpandith">
          <GitHub />
        </A>
        <A href="mailto:mudasirpandith789@gmail.com">
          <Email />
        </A>
        <A href="https://www.instagram.com/mudasirpandith_/">
          <InstagramIcon />
        </A>
      </Icons>
    </Container>
  );
};
