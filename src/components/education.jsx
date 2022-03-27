import React from "react";
import { Grid } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Address from "../images/address.png";
import Education from "../images/education.png";
export default function Eduaction() {
  return (
    <>
      {" "}
      <div className="education-box">
        <Grid container>
          <Grid xs={12} md={6} xl={12}>
            <h1>Education</h1>
            <center>
              <img
                src={Education}
                alt="d"
                style={{
                  height: "200px",
                  width: "auto",
                }}
              />
            </center>
          </Grid>
        </Grid>

        <Grid container>
          <Grid xs={12} md={12} xl={4}>
            <h1 style={{ color: "#A8774E" }}>Address</h1>
            <center>
              <img
                src={Address}
                alt="d"
                style={{
                  height: "200px",
                  width: "auto",
                  paddingTop: "30px",
                }}
              />
            </center>
          </Grid>
          <Grid xs={12} md={8} xl={8}>
            <div className="address-box">
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
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
