import React from "react";
import { Header } from "./components/header";
import styled from "styled-components";
import { ExpertiseSection } from "./components/expertiseSection";
import { MySkills } from "./components/MySkills";
import { Education } from "./components/Education";
import Home from "./components/Home";
import { Testimonials } from "./components/Testimonials";
const Container = styled.div`
  font-family: "Roboto", sans-serif;

  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <Home />
        <ExpertiseSection />
        <MySkills />
        <Education />
        <Testimonials />
        <footer>
          <p style={{ textAlign: "center" }} className="section-1">
            Mudasir Ahmad Pandith © {new Date().getFullYear()}
          </p>
        </footer>
      </Container>
    </>
  );
}

export default App;
