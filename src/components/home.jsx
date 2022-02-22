import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const pad = {
    paddingTop: window.innerHeight / 3,
  };
  if (window.innerWidth < 400) {
    pad.paddingTop = "0";
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className="profile-box"
          style={{ height: window.innerHeight }}
          container
          spacing={2}
        >
          <Grid xl={12} xs={12}>
            {" "}
            <center>
              <img
                className="profile-pik"
                style={{ height: "400px" }}
                src={Profile}
                alt="profile"
              />
              <center>
                <h1 style={{ display: "inline-block" }}>
                  {" "}
                  <Typewriter
                    options={{
                      strings: [" I'm Mudasir Pandith", "I'm Web Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </h1>
                <p>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  distinctio aliquid, non tempora praesentium est saepe ut
                  assumenda possimus velit qui ipsam. Ab eveniet, ipsam laborum
                  alias deserunt voluptates corporis! Lorem ipsum dolor sit amet
                  consectetur,
                </p>
                <a href="/">
                  <LinkedInIcon />
                </a>
                <a href="/">
                  <GitHubIcon />
                </a>
                <a href="/">
                  <EmailIcon />
                </a>{" "}
                <br />
                <Button color="inherit" variant="contained">
                  Download CV
                </Button>
              </center>
            </center>
          </Grid>
          {/* <Grid xl={6} xs={12}>
            {" "}
            <center>
              {/* <img style={{ height: "400px" }} src={Profile} alt="profile" /> }
            </center>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              distinctio aliquid, non tempora praesentium est saepe ut assumenda
              possimus velit qui ipsam. Ab eveniet, ipsam laborum alias deserunt
              voluptates corporis! Lorem ipsum dolor sit amet consectetur,
            </p>
            <br />
            <a href="/">
              <LinkedInIcon />
            </a>
            <a href="/">
              <GitHubIcon />
            </a>
            <a href="/">
              <EmailIcon />
            </a>
            <Button color="inherit" variant="contained">
              Download CV
            </Button>
            <br />
          </Grid> */}
        </Grid>
      </Box>

      <Skill />
      <Education />
      <Projects />
      <About />
    </>
  );
}
