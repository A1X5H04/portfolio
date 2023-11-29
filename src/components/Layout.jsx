import React from "react";
import { Outlet } from "react-router-dom";
import {
  getAbout,
  getPinnedGHRepo,
  getAnilistData,
  getLastFMData,
  getWakaTimeData,
  getDiscordPresence,
} from "../libs/api";
import Header from "./Header";

const apiData = {
  aboutData: getAbout(),
  projectData: getPinnedGHRepo(),
  discordPresence: getDiscordPresence(),
  animeData: getAnilistData(),
  lastFMRecentTracks: getLastFMData.recentTracks(),
  lastFMTopTracks: getLastFMData.topTracks(),
  wakaDurations: getWakaTimeData.durations(),
  wakaCodingActivity: getWakaTimeData.activity(),
  wakaStats: getWakaTimeData.stats(),
  wakaInsights: getWakaTimeData.insights(),
  wakaAllTime: getWakaTimeData.allTime(),
};

function Layout() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [dark, setDark] = React.useState(prefersDark.matches);
  const [themeIcon, setThemeIcon] = React.useState("dark");
  const htmlElm = document.querySelector("html");

  React.useEffect(() => {
    if (dark) {
      htmlElm.classList.add("dark");
      setThemeIcon("dark");
    } else {
      htmlElm.classList.remove("dark");
      setThemeIcon("light");
    }
  }, [dark, htmlElm]);

  prefersDark.addEventListener("change", (e) => {
    setDark(e.matches);
  });

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };
  return (
    <>
      <Header toggleTheme={toggleTheme} themeIcon={themeIcon} />
      <Outlet context={{ theme: dark, ...apiData }} />
    </>
  );
}

export default Layout;
