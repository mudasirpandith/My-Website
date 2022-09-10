import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #333333;
  position: relative;
  padding-top: 60px;
  margin-top: -50px;
  z-index: -1;

  color: white;
`;
const Grid = styled.div`
  display: flex;
  padding-top: 50px;
  margin: auto;
  width: 80%;
`;
const Branding = styled.div`
  display: flex;
  flex: 2;
`;
const Nav = styled.div`
  display: flex;
  flex: 2;
`;
const Contact = styled.div`
  display: flex;
  flex: 2;
`;
const Address = styled.div`
  display: flex;
  flex: 2;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
`;
const FooterText = styled.p`
  display: flex;
  color: #aaa8a9;
  margin: auto;
  padding: 20px;
`;
const Footerdiv = styled.div`
  background-color: black;
  align-items: center;
  display: flex;
`;
export const Footer = () => {
  return (
    <Container>
      <Grid>
        <h1>Working.....</h1>
        {/* <Branding>MP</Branding>
        <Nav>
          <SmallText>Home</SmallText>
        </Nav>
        <Contact>
          <SmallText>
            +916005577629 <br /> mudasirpandith789@gmail.com
          </SmallText>
        </Contact>
        <Address>
          <SmallText>Kandhama Beerwah Bugdam, 193411</SmallText>{" "}
        </Address>*/}
      </Grid>
      <Footerdiv>
        <FooterText>
          Developed By Mudasir Pandith © {new Date().getFullYear()}
        </FooterText>
      </Footerdiv>
    </Container>
  );
};
