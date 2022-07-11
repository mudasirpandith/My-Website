import "./App.css";
import React, { useState } from "react";

import Home from "./components/home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

//import Profile from "./images/full.png";
import Logo from "./images/logo.png";
function App() {
  const [onStatus, setOnStatus] = useState(true);
  setInterval(setS, 1);

  function setS() {
    setOnStatus(navigator.onLine);
  }

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
        <button
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
        </button>

        {onStatus ? (
          <></>
        ) : (
          <>
            <p
              style={{
                color: "red",
                fontWeight: "100",
                textAlign: "right",
                position: "relative",
                marginTop: "-25px",
              }}
            >
              {" "}
              You have no internet connection
            </p>
          </>
        )}
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

          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
