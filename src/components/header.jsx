import React from "react";
import styled from "styled-components";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 40px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
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
const Button = styled.button`
  color: inherit;
  padding: 4px;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  text-align: center;
  border: 0;
`;
export const Header = (props) => {
  const [modeIcon, SetModeIcon] = useState(localStorage.getItem("theme"));
  function getIcon() {
    SetModeIcon(localStorage.getItem("theme"));
  }
  setInterval(getIcon, 100);
  return (
    <Container>
      <Heading>MP</Heading>

      <Icons>
        <Button type="button" onClick={props.handleClick}>
          {modeIcon % 2 === 1 ? <DarkModeOutlined /> : <LightModeOutlined />}
        </Button>
      </Icons>
    </Container>
  );
};
