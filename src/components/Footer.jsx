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
  flex-wrap: wrap;
  margin: auto;
  gap: 20px;
  width:95%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Branding = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
`;
const Nav = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Contact = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Address = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const SmallText = styled.p`
  display: flex;
  color: #aaa8a9;
  font-size: 12px;
  line-height: 3ch;
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
          My name is Mudasir Pandith and I am a full stack MERN developer with a passion for creating innovative and user-friendly web and mobile applications. I have been working in the field of web and mobile development for many years, and I am skilled in using the latest technologies and frameworks to create high-quality products.

I have expertise in using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to develop dynamic and scalable web applications. I also have experience in implementing machine learning techniques to create intelligent and predictive applications. In addition, I am skilled in using the Flutter framework to develop cross-platform mobile applications for both Android and iOS.If you have an idea for a web or mobile application and are looking for a skilled and experienced developer to bring it to life, please don't hesitate to contact me. I would be happy to discuss your project in more detail and provide you with a personalized quote. 
          </SmallText>
        </Branding>
        <Nav>
          <Header>LINKS</Header>
        
          <NavItems href="/">Home</NavItems>
          <NavItems href="#skils">Skills</NavItems>
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
          Developed By Mudasir Pandith © 2022-{new Date().getFullYear()}
        </FooterText>
      </Footerdiv>
    </Container>
  );
};
