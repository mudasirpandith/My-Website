import "./App.css";
import React, { useState } from "react";

import Home from "./components/home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Profile from "./images/full.png";
import Logo from './images/logo.png'
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
          // style={{ position: "absolute" }}
          variant="outlined"
          color="inherit"
          onClick={handletheme}
          backgroundColor="red"
        >
          {!theme ? (
            <WbSunnyIcon color="warning" />
          ) : (
            <DarkModeIcon htmlColor="#94b49f" />
          )}
        </Button>
        <div
          style={
            theme
              ? { backgroundColor: "rgb(32,33,36)", color: "white" }
              : { backgroundColor: "#FFF8F3", color: "rgb(32,33,36)" }
          }
        >
          <div style={{ display: "inline-block", float: "right" }}>
            <Stack direction="row" spacing={2}>
              <Avatar fontSize="large" alt="Mudasir Pandith" src={Logo} />
            </Stack>
          </div>
isLoading?<center>Loading.. </center>:
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
