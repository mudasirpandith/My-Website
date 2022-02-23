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
          label="Reactjs"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Nodejs"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="MongoDb"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="C/C++"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="MERN"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="JavaScript"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Git"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Python"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Bootstrap"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="HTML"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="CSS"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarHalfSharpIcon fontSize="small" />}
          label="Flutter/Dart"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="Express.js"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarPurple500SharpIcon fontSize="small" />}
          label="OOP"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<StarHalfSharpIcon fontSize="small" />}
          label="Firebase"
        />
      </div>
    </>
  );
}
