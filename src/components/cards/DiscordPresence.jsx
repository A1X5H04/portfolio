import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { calculateTimeElapsed } from "../../libs/utils";
import ContentLoader from "react-content-loader";
function DiscordPresence({ data, theme }) {
  const [discord, setDiscord] = useState("");

  useEffect(() => {
    data.then((res) => {
      setDiscord(res);
    });
  }, [data]);

  let discordColor;
  let discordStatus;

  if (discord) {
    switch (discord.data.discord_status) {
      case "online":
        discordColor = "bg-green-500";
        discordStatus = "Online";
        break;
      case "idle":
        discordColor = "bg-yellow-500";
        discordStatus = "Idle";
        break;
      case "dnd":
        discordColor = "bg-red-500";
        discordStatus = "Do Not Disturb";
        break;
      case "offline":
        discordColor = "bg-gray-500";
        discordStatus = "Offline";
        break;
      default:
        discordColor = "bg-gray-200 dark:bg-gray-800";
        discordStatus = "Not Available";
    }
  }

  return (
    <CardSpotlightEffect>
      {discord ? (
        <div className="p-5">
          <div className="flex justify-between border-b pb-2 border-slate-200 dark:border-gray-1000 ">
            <div className="inline-flex">
              <img
                className="w-10 h-10 rounded-full border-2 border-slate-400 dark:border-gray-800"
                src={`https://cdn.discordapp.com/avatars/${discord.data.discord_user.id}/${discord.data.discord_user.avatar}`}
                alt={discord.data.discord_user.username}
              />
              <div className="ml-2">
                <h1 className="font-semibold text-sm">
                  {discord.data.discord_user.global_name}
                </h1>
                <p className="text-xs text-slate-400 dark:text-gray-600 leading-4">
                  {discord.data.discord_user.username}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${discordColor} mr-1.5`}
              ></div>
              <p className="text-xs font-semibold">{discordStatus}</p>
            </div>
          </div>
          {discord.data.activities.length !== 0 ? (
            <div>
              {discord.data.activities.slice(0, 2).map((activity) => (
                <div
                  key={activity.id}
                  className="flex justify-between items-center mt-3"
                >
                  <div className="flex">
                    <img
                      src={
                        `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity?.assets?.large_image}.png` ||
                        "https://img.icons8.com/?size=24&id=8ySYAfKvuEw9&format=png"
                      }
                      alt="Activity Icon"
                      className="w-9 h-9 rounded"
                    />
                    <div className="ml-3 flex flex-col">
                      <h6 className="text-sm font-semibold">{activity.name}</h6>
                      <p className="text-xs text-slate-500 dark:text-gray-500">
                        Playing
                      </p>
                    </div>
                  </div>
                  <p className="text-xs">
                    {calculateTimeElapsed(activity.created_at / 1000)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid place-items-center h-24">
              <p className="text-slate-500 dark:text-gray-400 font-semibold">
                No Activities To Show
              </p>
            </div>
          )}
        </div>
      ) : (
        <ContentLoader
          speed={2}
          width="100%"
          height="100%"
          viewBox="0 0 476 185"
          backgroundColor={theme ? "#1e1e1e" : "#f6f5f4"}
          foregroundColor={theme ? "#9a9996" : "#deddda"}
        >
          <circle cx="39" cy="40" r="22" />
          <rect x="66" y="22" rx="3" ry="3" width="69" height="15" />
          <rect x="67" y="44" rx="3" ry="3" width="50" height="11" />
          <rect x="415" y="33" rx="3" ry="3" width="50" height="12" />
          <rect x="30" y="85" rx="5" ry="5" width="421" height="78" />
        </ContentLoader>
      )}
    </CardSpotlightEffect>
  );
}

export default DiscordPresence;

DiscordPresence.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.bool,
};
