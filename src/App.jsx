import React from "react";
import Section2 from "./components/section2";
import { Header } from "./components/header";
import styled from "styled-components";
import { ExpertiseSection } from "./components/expertiseSection";
import { MySkills } from "./components/MySkills";
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
        <Section2 />
        <ExpertiseSection />
        <MySkills />
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
