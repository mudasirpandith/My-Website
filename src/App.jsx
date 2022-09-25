import React from "react";
import { Header } from "./components/header";
import styled from "styled-components";
import { ExpertiseSection } from "./components/expertiseSection";
import { MySkills } from "./components/MySkills";
import { Education } from "./components/Education";
import Home from "./components/Home";
import { Testimonials } from "./components/Testimonials";
import { BlogAndTouchIn } from "./components/BlogAndTouchIn";
import { Footer } from "./components/Footer";
import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darktheme, lighttheme } from "./utils/theme";
const Container = styled.div`
  font-family: "Roboto", sans-serif;

  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : 0
  );

  function handleClick() {
    localStorage.setItem("theme", Number(localStorage.getItem("theme")) + 1);
    setMode(localStorage.getItem("theme"));
  }

  return (
    <>
      <Container>
        <ThemeProvider theme={mode % 2 === 1 ? lighttheme : darktheme}>
          <Header handleClick={handleClick} />

          <Home />
          <ExpertiseSection />
          <MySkills />
          <Education />
          <Testimonials />
          <BlogAndTouchIn />
          <Footer />
        </ThemeProvider>
      </Container>
    </>
  );
}

export default App;
