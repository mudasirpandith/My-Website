import React from "react";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";

export default function Skill() {
  return (
    <>
      <div className="skill-box">
        <h1>Skills</h1>

        <Chip style={{ margin: "2px" }} icon={<FaceIcon />} label="Reactjs" />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="Nodejs"
          variant="outlined"
        />
        <Chip style={{ margin: "2px" }} icon={<FaceIcon />} label="MongoDb" />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="C/C++"
          variant="outlined"
        />
        <Chip style={{ margin: "2px" }} icon={<FaceIcon />} label="MERN" />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="JavaScript"
          variant="outlined"
        />
        <Chip style={{ margin: "2px" }} icon={<FaceIcon />} label="Git" />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="Python"
          variant="outlined"
        />
        <Chip style={{ margin: "2px" }} icon={<FaceIcon />} label="Bootstrap" />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="HTML"
          variant="outlined"
        />
        <Chip style={{ margin: "2px" }} icon={<FaceIcon />} label="CSS" />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="Flutter/Dart"
          variant="outlined"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="Express.js"
        />
        <Chip
          style={{ margin: "2px" }}
          icon={<FaceIcon />}
          label="Flutter/Dart"
          variant="outlined"
        />
      </div>
    </>
  );
}
