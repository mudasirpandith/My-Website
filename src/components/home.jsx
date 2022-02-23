import React from "react";
import { Button } from "@mui/material";
import Profile from "../images/profile.jpg";
import Skill from "./skills";
import Projects from "./projects";
import About from "./about";
import Education from "./education";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
export default function Home() {
  const pad = {
    paddingTop: window.innerHeight / 3,
  };
  if (window.innerWidth < 400) {
    pad.paddingTop = "0";
  }

  return (
    <>
      <div
        className="profile-box"
        style={{ height: window.innerHeight }}
        container
        spacing={2}
      >
        {" "}
        <center>
          <img
            className="profile-pik"
            style={{ height: "300px", width: "auto", paddingTop: "70px" }}
            src={Profile}
            alt="profile"
          />
          <center>
            <h1 style={{ display: "inline-block" }}>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    " I'm Mudasir Pandith",
                    "I'm a Full Stack Developer ",
                    "I'm a Freelancer",
                  ],

                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h1>
            <p> Loading...</p>
            <a href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/mudasirpandith">
              <GitHubIcon />
            </a>
            <a href="mailto:mudasirpandith789@gmail.com">
              <EmailIcon />
            </a>{" "}
            <br />
            <a href="https://drive.google.com/file/d/1i8clSs9x_yIq-crd4mnmShmJXeXAh5MQ/view">
              <Button color="inherit" variant="contained">
                View Resume
              </Button>
            </a>{" "}
          </center>
        </center>
      </div>
      <br />
      <br />
      <Skill />
      <br />
      <br />
      <Education />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <About />
    </>
  );
}
