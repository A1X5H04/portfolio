import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { calculateTimeElapsed } from "../../libs/utils";
import { PiMusicNote } from "react-icons/pi";
import CardError from "../CardError";
import CardLoader from "../CardLoader";

function LastFMCard({ data }) {
  const [recentTracks, setRecentTracks] = useState("");
  const [topTracks, setTopTracks] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    if (data) {
      data.lastFMRecentTracks
        .then((data) => {
          setRecentTracks(data);
        })
        .catch((err) => {
          setError({
            status: true,
            message: err.message,
          });
        });
      data.lastFMTopTracks
        .then((data) => {
          setTopTracks(data);
        })
        .catch((err) => {
          setError({
            status: true,
            message: err.message,
          });
        });
    }
  }, [data]);

  return (
    <CardSpotlightEffect>
      <CardError error={error}>
        {recentTracks ? (
          <div className="flex flex-col items-start justify-evenly w-full h-full p-5">
            <div className="flex w-full justify-between border-b border-slate-200 dark:border-gray-900">
              <div className="inline-flex items-center mb-3">
                <div className="relative w-16 h-16 overflow-hidden rounded">
                  {recentTracks?.track[0]["@attr"]?.nowplaying && (
                    <div className="absolute w-full h-full bg-black bg-opacity-60">
                      <img
                        src="audiowaveform.gif"
                        className="absolute top-2 p-2 w-full h-full"
                      />
                    </div>
                  )}
                  {recentTracks?.track[0]?.image[3] ? (
                    <img
                      className="w-16 h-16 aspect-square rounded-md"
                      src={
                        recentTracks?.track[0]?.image[3]["#text"] ||
                        "data:image/png;base64,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"
                      }
                      alt={recentTracks?.track[0]?.artist["#text"]}
                    />
                  ) : (
                    <img
                      className="w-16 h-16 aspect-square rounded-md"
                      src="data:image/png;base64,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"
                      alt="Spotify"
                    />
                  )}
                </div>
                <div className="inline-flex flex-col justify-between mx-4">
                  <h4 className="font-bold truncate lg:w-56 w-44">
                    {recentTracks?.track[0]?.name}
                  </h4>
                  <p className="text-xs pb-1 text-slate-500 dark:text-gray-500 truncate lg:w-56 w-44">
                    {recentTracks?.track[0]?.artist["#text"]}
                    {recentTracks?.track[0]?.album && (
                      <span> - {recentTracks?.track[0]?.album["#text"]}</span>
                    )}
                  </p>
                  <div>
                    <p className="text-sm">
                      {recentTracks?.track[0]["@attr"]?.nowplaying ? (
                        <span className="font-semibold text-emerald-400">
                          Now Playing
                        </span>
                      ) : (
                        <span className="font-normal text-xs text-slate-400 dark:text-gray-600">
                          Last Played{" "}
                          {calculateTimeElapsed(
                            recentTracks?.track[0]?.date.uts
                          )}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <PiMusicNote size={24} className="mx-2" />
            </div>
            {topTracks && (
              <table className="w-full text-sm table-auto border-spacing-y-2 h-28 overflow-scroll">
                <thead className="bg-slate-100 dark:bg-gray-1000">
                  <tr>
                    <th>Rank</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Play Count</th>
                  </tr>
                </thead>
                <tbody>
                  {topTracks.track.map((track, index) => {
                    return (
                      <tr
                        className="text-xs text-center text-slate-900 dark:text-gray-300 border-b border-slate-100 dark:border-gray-1000"
                        key={index}
                      >
                        <td className="text-slate-600 dark:text-gray-500">
                          {track["@attr"].rank}
                        </td>
                        <td>{track.name}</td>
                        <td>{track.artist.name}</td>
                        <td>{track.playcount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <CardLoader viewBox="0 0 481 236">
            <rect x="20" y="19" rx="6" ry="6" width="64" height="67" />
            <rect x="100" y="22" rx="5" ry="5" width="216" height="20" />
            <rect x="100" y="48" rx="3" ry="3" width="156" height="14" />
            <rect x="101" y="72" rx="3" ry="3" width="114" height="11" />
            <rect x="72" y="107" rx="0" ry="0" width="70" height="18" />
            <rect x="20" y="106" rx="0" ry="0" width="15" height="21" />
            <rect x="180" y="102" rx="0" ry="0" width="80" height="23" />
            <rect x="302" y="108" rx="0" ry="0" width="54" height="18" />
            <rect x="432" y="107" rx="0" ry="0" width="29" height="23" />
            <rect x="20" y="99" rx="0" ry="0" width="441" height="10" />
            <rect x="20" y="124" rx="0" ry="0" width="441" height="10" />
            <rect x="21" y="159" rx="0" ry="0" width="439" height="1" />
            <rect x="21" y="186" rx="0" ry="0" width="439" height="1" />
            <rect x="20" y="213" rx="0" ry="0" width="439" height="1" />
            <rect x="45" y="139" rx="3" ry="3" width="14" height="17" />
            <rect x="45" y="165" rx="3" ry="3" width="14" height="17" />
            <rect x="45" y="191" rx="3" ry="3" width="14" height="17" />
            <rect x="131" y="139" rx="3" ry="3" width="64" height="15" />
            <rect x="249" y="139" rx="3" ry="3" width="64" height="15" />
            <rect x="385" y="139" rx="3" ry="3" width="17" height="15" />
            <rect x="130" y="165" rx="3" ry="3" width="64" height="15" />
            <rect x="129" y="191" rx="3" ry="3" width="68" height="15" />
            <rect x="249" y="166" rx="3" ry="3" width="64" height="15" />
            <rect x="249" y="192" rx="3" ry="3" width="64" height="15" />
            <rect x="385" y="165" rx="3" ry="3" width="17" height="15" />
            <rect x="385" y="193" rx="3" ry="3" width="17" height="15" />
          </CardLoader>
        )}
      </CardError>
    </CardSpotlightEffect>
  );
}

export default LastFMCard;

LastFMCard.propTypes = {
  data: PropTypes.object,
};
