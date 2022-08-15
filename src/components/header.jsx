import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 40px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: white;
  flex: 1;
  margin: 0 0 2px 0;
  padding: 10px 20px;
`;
const Heading = styled.h1`
  display: flex;
  margin: 0;
  color: #112b3c;
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
  display: flex;
  color: inherit;
`;
export const Header = () => {
  return (
    <Container>
      <A href="/">
        <Heading>MP</Heading>
      </A>

      <Icons>
        <A href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/">
          <LinkedIn fontSize="large" />
        </A>
        <A href="https://github.com/mudasirpandith">
          <GitHub fontSize="large" />
        </A>
        <A href="mailto:mudasirpandith789@gmail.com">
          <Email fontSize="large" />
        </A>
        <LightModeIcon fontSize="large" />
      </Icons>
    </Container>
  );
};
