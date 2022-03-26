import React from "react";
import { Button, Grid } from "@mui/material";
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
        <Grid container style={{ marginTop: "60px" }}>
          <Grid xs={12} md={6} xl={6}>
            <center>
              <img
                className="profile-pik"
                style={{ height: "300px", width: "auto", paddingTop: "70px" }}
                src={Profile}
                alt="profile"
              />
            </center>
          </Grid>
          <Grid xs={12} md={6} xl={6}>
            <center>
              <center>
                <h1>
                  <span className="name-dev">Mudasir </span>
                  <span className="name-dev"> Ahmad </span>{" "}
                  <span className="name-dev"> Pandith</span>
                </h1>
                <h1 style={{ display: "inline-block" }}>
                  {" "}
                  <Typewriter
                    options={{
                      strings: [
                        "I'm a Full Stack Developer ",
                        "I'm a Freelancer",
                      ],

                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </h1>
                <p style={{}}>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque quaerat commodi nam officia repellendus praesentium
                  mollitia provident? Inventore, totam! Rem totam perspiciatis
                  architecto libero impedit deleniti nostrum assumenda, eveniet
                  saepe.
                </p>{" "}
              </center>
            </center>
            <center>
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1i8clSs9x_yIq-crd4mnmShmJXeXAh5MQ/view"
              >
                <Button color="inherit" variant="contained">
                  View Resume
                </Button>
              </a>{" "}
            </center>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a className="nav-link" href="https://github.com/mudasirpandith">
                <GitHubIcon fontSize="large" />
              </a>{" "}
              <a className="nav-link" href="mailto:mudasirpandith789@gmail.com">
                <EmailIcon fontSize="large" />
              </a>{" "}
            </div>
          </Grid>
        </Grid>{" "}
      </div>

      <br />
      <Skill />

      <br />
      <Education />

      <br />
      <Projects />

      <br />
      <About />
    </>
  );
}
