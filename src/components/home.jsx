import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Skill from "./skills";
import Projects from "./projects";
import About from "./about";
import Education from "./education";
export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className="profile-box"
          style={{ height: window.innerHeight }}
          container
          spacing={2}
        >
          <Grid xl={6} xs={12}>
            {" "}
            <h1>
              Hello <br />
              I'm Mudasir Pandith
            </h1>
          </Grid>
          <Grid xl={6} xs={12}>
            {" "}
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              distinctio aliquid, non tempora praesentium est saepe ut assumenda
              possimus velit qui ipsam. Ab eveniet, ipsam laborum alias deserunt
              voluptates corporis! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eaque dicta quae, vero dolore facere esse
              nesciunt praesentium voluptate dolorem aut quibusdam nostrum, nisi
              assumenda iusto ex, autem itaque ipsam amet.{" "}
            </p>
          </Grid>
        </Grid>
      </Box>
      <div className="cv-btn">
        <Button color="inherit" variant="contained">
          Download CV
        </Button>
      </div>
      <Skill />
      <Education />
      <Projects />
      <About />
    </>
  );
}
