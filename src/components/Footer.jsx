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
  padding-bottom: 40px;
  margin: auto;
  gap: 20px;
  width: 80%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Branding = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;
const Nav = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Contact = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;
const Address = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
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
  background-color: #282828;
  align-items: center;
  display: flex;
`;
const NavItems = styled.a`
  cursor: pointer;
  color: #aaa8a9;
  font-size: 14px;
  margin: 5px 0;
`;
const Header = styled.h2`
  display: flex;
  color: #aaa8a9;
  font-size: 15px;
`;

export const Footer = () => {
  return (
    <Container>
      <Grid>
        <Branding>
          {" "}
          <Header>MP</Header>
          <SmallText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            quibusdam totam numquam suscipit laborum animi beatae, facere
          </SmallText>
        </Branding>
        <Nav>
          <Header>LINKS</Header>
          <NavItems href="/">Home</NavItems>
          <NavItems>Skills</NavItems>
          <NavItems>Projects</NavItems>
          <NavItems>Blogs</NavItems>
        </Nav>
        <Contact>
          <Header>CONTACT</Header>
          <NavItems href="tel:+916005577629">+916005577629</NavItems>
          <NavItems href="mailto:mudasirpandith789@gmail.com">
            mudasirpandith789@gmail.com
          </NavItems>
        </Contact>
        <Address>
          <Header>ADDRESS</Header>
          <NavItems>Kandhama Beerwah Budgam,193411</NavItems>
          <NavItems>Jammu And Kashmir, India</NavItems>
        </Address>
      </Grid>
      <Footerdiv>
        <FooterText>
          Developed By Mudasir Pandith © {new Date().getFullYear()}
        </FooterText>
      </Footerdiv>
    </Container>
  );
};
