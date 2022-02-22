import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "NIT SRINAGAR",
    description: `B.Tech Electronics and Comunication Engineering `,
  },
  {
    label: "Govt. Boys Higher Secondary School Magam",
    description: " 1th and 12th ",
  },
];

export default function Eduaction() {
  return (
    <>
      <div className="education-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <Grid xs={12} xl={6}>
              <h1>Education</h1>
              <Box>
                {steps.map((step, index) => (
                  <Stepper orientation="horizonatl">
                    <Step key={step.label}>
                      <StepLabel>
                        {" "}
                        <h2>{step.label}</h2>
                      </StepLabel>
                      <StepContent>
                        <Typography>
                          <p>{step.description} </p>
                        </Typography>
                      </StepContent>
                    </Step>
                  </Stepper>
                ))}
              </Box>
            </Grid>
            <Grid xs={12} xl={6}>
              <h1>Address</h1>
              <ul>
                <li>Kandhama Beerwah Budgam</li>
                <li>Jammu And Kashmir</li>
                <li>193411</li>
                <li>Email - mudasirpandith789@gmail.com </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
