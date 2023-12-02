import ThemeContext from "../contexts/ThemeContext";
import GridPattern from "../components/GridPattern";
import { cn } from "../libs/utils";
import { Fade } from "react-awesome-reveal";
import {
  AboutMeCard,
  LastFMCard,
  AnimeDataCard,
  WakaTimeActivity,
  WakaTimeDuration,
  WakaTimeInsights,
  WakaTimeStats,
  WakaTimeTotalHours,
} from "../components/cards/index";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import DiscordPresence from "../components/cards/DiscordPresence";
import DataContext from "../contexts/DataContext";

function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const {
    aboutData,
    animeData,
    discordPresence,
    lastFMRecentTracks,
    lastFMTopTracks,
    wakaAllTime,
    wakaCodingActivity,
    wakaDurations,
    wakaInsights,
    wakaStats,
  } = useContext(DataContext);

  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      <div className="pt-10 mb-5 text-center">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
          )}
        />
        <Fade direction="up" triggerOnce cascade damping={0.2}>
          <h3 className="text-3xl font-extrabold my-1 py-1">
            {t("dashboard.title")}
          </h3>
          <p className="text-gray-500 pb-2">{t("dashboard.description")}</p>
        </Fade>
      </div>
      <div className="my-10 mx-5 md:grid md:grid-cols-2 flex flex-col gap-4">
        <AboutMeCard data={aboutData} />
        <WakaTimeTotalHours data={wakaAllTime} />
        <WakaTimeStats data={wakaStats} />
        <LastFMCard data={{ lastFMRecentTracks, lastFMTopTracks }} />
        <AnimeDataCard data={animeData} />
        <DiscordPresence data={discordPresence} />
        <WakaTimeDuration data={wakaDurations} />
        <WakaTimeActivity data={wakaCodingActivity} />
        <WakaTimeInsights data={wakaInsights} />
      </div>
    </div>
  );
}

export default Dashboard;
