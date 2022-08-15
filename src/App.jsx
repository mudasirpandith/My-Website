import React from "react";
import Section2 from "./components/section2";
import { Header } from "./components/header";
import styled from "styled-components";
const Container = styled.div`
  background-color: rgb(223, 223, 216);
  width: 80%;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <Section2 />
        <center>...more to come ...</center>

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
