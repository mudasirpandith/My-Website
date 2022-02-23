import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
export default function Eduaction() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="education-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid xs={12} xl={6}>
              <h1>Education</h1>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ color: "text.secondary" }}>
                    <h4>
                      {" "}
                      <div
                        style={{
                          display: "inline-block",
                          paddingRight: "10px",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        <SchoolSharpIcon />
                      </div>
                      NIT SRINAGAR
                    </h4>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Bachelor Of Technology, Electronics And Communication
                    Engineering
                    <br />
                    2020-2024 <br /> CGPA:8.00
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ color: "text.secondary" }}>
                    <h4>
                      <div
                        style={{
                          display: "inline-block",
                          paddingRight: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <AccountBalanceIcon />
                      </div>{" "}
                      Govt Boys Higher Secondary School Magam
                    </h4>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    11th and 12th <br />
                    2017-2018 <br />
                    Percenatge:95
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid xs={12} xl={6}>
              <h1>Address</h1>
              <ul>
                <li>
                  {" "}
                  <div
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <LocationOnIcon fontSize="small" />
                  </div>{" "}
                  Kandhama Beerwah Budgam
                </li>
                <li>
                  <div
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <LocationOnIcon fontSize="small" />
                  </div>{" "}
                  Jammu And Kashmir
                </li>
                <li>
                  <div
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <LocationOnIcon fontSize="small" />
                  </div>
                  193411
                </li>
                <li>
                  <div
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <MailOutlineIcon fontSize="small" />
                  </div>
                  mudasirpandith789@gmail.com{" "}
                </li>
                <li>
                  {" "}
                  <div
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <LocalPhoneIcon fontSize="small" />
                  </div>
                  +916005577629
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
