import React from "react";
import Chip from "@mui/material/Chip";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import { Grid } from "@mui/material";
import Profile from "../images/education.png";
export default function Skill() {
  return (
    <>
      <div>
        <h1 className="skill-box">Skills</h1>
        <Grid container>
          <Grid xs={12} md={6} xl={3}>
            <center>
              <img
                src={Profile}
                alt="d"
                style={{
                  height: "100px",
                  width: "auto",
                }}
              />
            </center>
          </Grid>
          <Grid xs={12} md={6} xl={9}>
            <div
              style={{
                backgroundColor: "#AD8B73",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="Reactjs"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#CEAB93",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="Nodejs"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#E3CAA5",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="MongoDb"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#AD8B73",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="C/C++"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#CEAB93",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="MERN"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#E3CAA5",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="JavaScript"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#AD8B73",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="Git/Github"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#CEAB93",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="Python"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#E3CAA5",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="Bootstrap"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#AD8B73",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="HTML"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#CEAB93",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="CSS"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#E3CAA5",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarHalfSharpIcon fontSize="medium" />}
                label="Flutter"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#AD8B73",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="Express.js"
              />
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#CEAB93",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarPurple500SharpIcon fontSize="medium" />}
                label="OOP"
                variant="contained"
              />
            </div>

            <div
              style={{
                color: "white",
                backgroundColor: "#E3CAA5",
                display: "inline-block",
                margin: "5px",
                borderRadius: "40px",
              }}
            >
              {" "}
              <Chip
                style={{ margin: "2px" }}
                icon={<StarHalfSharpIcon fontSize="medium" />}
                label="Firebase"
              />{" "}
            </div>
           
          </Grid>
        </Grid>
      </div>
    </>
  );
}
