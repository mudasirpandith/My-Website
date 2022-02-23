import React from "react";
import { Grid } from "@mui/material";
export default function About() {
  return (
    <>
      <div className="about-box">
        <Grid container rowSpacing={1}>
          <Grid xs={12} xl={6}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit praesentium, iste nemo voluptatibus tenetur a vitae
              libero aspernatur repudiandae, incidunt quo asperiores
              dignissimos. Placeat libero, neque iste facere ducimus illo! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Enim
              reprehenderit neque eaque, tempore voluptates voluptatibus nisi
              delectus natus debitis corporis officia impedit ducimus! Placeat
              aut maiores officiis dicta suscipit quia?
            </p>
          </Grid>

          <Grid xs={12} md={6} xl={3}>
            <h1>Certifications</h1>
            <ul>
              <li>- Full Stack Web Development by Udemy</li>
              <li>- Flutter Development by Udemy</li>
              <li>- Hultz Prize 2020 NIT Srinagar</li>
            </ul>
          </Grid>
          <Grid xs={12} md={6} xl={3}>
            <h1>Languages I can Speak</h1>
            <ul>
              <li>- Kashmiri ,Mother tongue</li>
              <li>- English </li>
              <li>- Urdu</li>
              <li>- Hindi</li>
            </ul>
          </Grid>
        </Grid>

        <footer>
          <center>
            <p>
              Developed by Mudasir Ahmad Pandith @{new Date().getFullYear()}
            </p>
          </center>
        </footer>
      </div>
    </>
  );
}
