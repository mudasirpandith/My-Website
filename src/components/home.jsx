import React,{useEffect} from "react";
import { Button, Grid } from "@mui/material";
import Profile from "../images/full.png";
import Skill from "./skills";
import Projects from "./projects";
import About from "./about";
import Education from "./education";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
        <Grid container style={{ marginTop: "40px" }}>
          <Grid xs={12} md={6} xl={6}>
            <center>
              <img
                className="profile-pik"
                style={{
                  height: "200px",
                  width: "auto",
                  border: "solid 0",
                  borderRadius: "50%",
                }}
                src={Profile}
                alt="profile"
              />
            </center>
          </Grid>
          <Grid xs={12} md={6} xl={6}>
            <center>
              <center>
                <h1 className="name-dev">Mudasir Ahmad Pandith</h1>
                <h1 style={{ display: "inline-block", color: "#BFA2DB" }}>
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
                <p style={{ color: "#1A5F7A" }}>
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
                <Button
                  style={{ backgroundColor: "#94b49f", color: "#FFF8F3" }}
                  variant="contained"
                >
                  View Resume
                </Button>
              </a>{" "}
            </center>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/"
              >
                <LinkedInIcon htmlColor="#94b49f" fontSize="large" />
              </a>
              <a className="nav-link" href="https://github.com/mudasirpandith">
                <GitHubIcon htmlColor="#94b49f" fontSize="large" />
              </a>{" "}
              <a className="nav-link" href="mailto:mudasirpandith789@gmail.com">
                <EmailIcon htmlColor="#94b49f" fontSize="large" />
              </a>{" "}
            </div>
          </Grid>
        </Grid>{" "}
      </div>
      <br />
      <div data-aos="fade-right">
        <Skill />
      </div>
      <br />
      <br />
      <div data-aos="fade-left">
        <Education />
      </div>

      <br />
      <br />
      <Projects />
      <br />
      <div data-aos="fade-right">
        {" "}
        <About />
      </div>
    </>
  );
}
