import React from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { calculateTimeElapsed } from "../../libs/utils";
import CardError from "../CardError";
import CardLoader from "../CardLoader";

function AnimeDataCard({ data }) {
  const [animeData, setAnimeData] = React.useState("");
  const [error, setError] = React.useState({
    status: false,
    message: "",
  });

  React.useEffect(() => {
    data
      .then((data) => {
        setAnimeData(data);
      })
      .catch((err) => {
        setError({
          status: true,
          message: err.message,
        });
      });
  }, [data]);

  return (
    <CardSpotlightEffect>
      <CardError error={error}>
        {animeData ? (
          <div className="flex p-5 justify-between">
            <div className="inline-flex flex-col justify-between my-2">
              <div>
                <h4 className="font-bold truncate w-48 sm:w-full md:w-60 lg:w-72">
                  {animeData.media?.title.english}
                  &nbsp;(
                  {animeData.media?.title.native})
                </h4>
                <p className="text-sm text-gray-500">
                  {animeData.media?.seasonYear}
                </p>
              </div>
              <div>
                <p className="text-sm">
                  Episode{" "}
                  <span className="font-semibold">
                    {animeData.progress} / {animeData.media?.episodes}
                  </span>
                </p>
                <p className="text-xs text-gray-600">
                  Watched {calculateTimeElapsed(animeData.updatedAt)}
                </p>
              </div>
            </div>
            <img
              className="w-24 h-36 rounded-md"
              src={animeData.media?.coverImage.large}
              alt={animeData.media?.title.english}
            />
          </div>
        ) : (
          <CardLoader viewBox="0 0 481 184">
            <rect x="18" y="27" rx="5" ry="5" width="152" height="25" />
            <rect x="19" y="58" rx="3" ry="3" width="41" height="14" />
            <rect x="20" y="119" rx="3" ry="3" width="117" height="19" />
            <rect x="20" y="144" rx="4" ry="4" width="93" height="11" />
            <rect x="363" y="16" rx="15" ry="15" width="102" height="151" />
          </CardLoader>
        )}
      </CardError>
    </CardSpotlightEffect>
  );
}

AnimeDataCard.propTypes = {
  data: PropTypes.array,
};

export default AnimeDataCard;
