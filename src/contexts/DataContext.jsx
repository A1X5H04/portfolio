import PropTypes from "prop-types";
import { createContext } from "react";
import {
  getAbout,
  getPinnedGHRepo,
  getAnilistData,
  getLastFMData,
  getWakaTimeData,
  getDiscordPresence,
} from "../libs/api";

const DataContext = createContext();

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

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ ...apiData }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataContext;
