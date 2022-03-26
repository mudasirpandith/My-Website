import React from "react";
import Chip from "@mui/material/Chip";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
export default function Skill() {
  return (
    <>
      <div className="skill-box">
        <h1>Skills</h1>
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          color="warning"
          label="Reactjs"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Nodejs"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="MongoDb"
          color="warning"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="C/C++"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="MERN"
          color="warning"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="JavaScript"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Git/Github"
          color="warning"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Python"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Bootstrap"
          color="warning"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="HTML"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="CSS"
          color="warning"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarHalfSharpIcon fontSize="small" />}
          label="Flutter"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Express.js"
          color="warning"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="OOP"
          color="success"
          variant="contained"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarHalfSharpIcon fontSize="small" />}
          label="Firebase"
          color="warning"
        />{" "}
        <Chip
          style={{ margin: "2px" }}
          icon={<StarHalfSharpIcon fontSize="small" />}
          label="Dart"
          color="success"
          variant="contained"
        />
      </div>
    </>
  );
}
