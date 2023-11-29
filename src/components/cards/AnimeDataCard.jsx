import React from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { calculateTimeElapsed } from "../../libs/utils";
import LoadingSpinner from "../LoadingSpinner";

function AnimeDataCard({ data }) {
  const [animeData, setAnimeData] = React.useState("");

  React.useEffect(() => {
    data.then((data) => {
      setAnimeData(data);
    });
  }, [data]);

  return (
    <CardSpotlightEffect>
      {animeData ? (
        <div className="flex p-5 justify-between">
          <div className="inline-flex flex-col justify-between my-2">
            <div>
              <h4 className="font-bold">
                {animeData.media?.title.english} (
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
        <LoadingSpinner svgWidth="30" svgHeight="30" className="p-20" />
      )}
    </CardSpotlightEffect>
  );
}

export default AnimeDataCard;

AnimeDataCard.propTypes = {
  data: PropTypes.array,
};
