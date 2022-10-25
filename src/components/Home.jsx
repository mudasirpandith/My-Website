import React from "react";
import DesktopScreen from "../ResponsiveScreens/desktop_screen";
import MobileScreen from "../ResponsiveScreens/mobile_screen";

export default function Home() {
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
