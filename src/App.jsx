import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
function App() {
  const backgroundColorlight = {
    backgroundColor: "white",
    color: "black",
  };
  return (
    <>
      {" "}
      <div className="app" style={backgroundColorlight}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
