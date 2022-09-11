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
const Container = styled.div`
  font-family: "Roboto", sans-serif;

  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

function App() {
  console.log(window.scrollY);
  const [len, setLen] = useState(0);
  function get(e) {
    setLen(window.screenY);
    console.log(len);
  }
  return (
    <>
      <Container onScroll={get}>
        <Header />
        <Home />
        <ExpertiseSection />
        <MySkills />
        <Education />
        <Testimonials />
        <BlogAndTouchIn />
        <Footer />
      </Container>
    </>
  );
}

export default App;
