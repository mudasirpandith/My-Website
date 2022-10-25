import React from "react";
import DesktopScreen from "../ResponsiveScreens/desktop_screen";
import MobileScreen from "../ResponsiveScreens/mobile_screen";

export default function Home() {
  function getWidth() {
    console.log(window.innerWidth);
  }
  setInterval(getWidth(), 2000);
  return window.innerWidth > 800 ? (
    <React.Fragment>
      <DesktopScreen />
    </React.Fragment>
  ) : (
    <>
      <MobileScreen />
    </>
  );
}
