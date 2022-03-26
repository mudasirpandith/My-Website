import "./App.css";
import React, { useState } from "react";

import Home from "./components/home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { Button } from "@mui/material";
function App() {
  var the = localStorage.getItem("theme");
  const [theme, setTheme] = useState(the);

  const handletheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {" "}
      <div>
        <Button
          style={{ position: "absolute" }}
          variant="outlined"
          color="inherit"
          onClick={handletheme}
          backgroundColor="red"
        >
          {!theme ? (
            <WbSunnyIcon color="warning" />
          ) : (
            <DarkModeIcon htmlColor="white" />
          )}
        </Button>
        <div
          style={
            theme
              ? { backgroundColor: "rgb(32,33,36)", color: "white" }
              : { backgroundColor: "white", color: "rgb(32,33,36)" }
          }
        >
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
