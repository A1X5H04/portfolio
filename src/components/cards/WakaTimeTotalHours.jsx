import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { roundToTwo } from "../../libs/utils";

export default function WakaTimeTotalHours({ data }) {
  const [wakaAllTime, setWakaAllTime] = useState("");

  useEffect(() => {
    data.then((data) => {
      setWakaAllTime(data);
    });
  }, [data]);

  return (
    <CardSpotlightEffect>
      {wakaAllTime ? (
        <div className="p-5">
          <div className="w-full flex justify-between items-center pb-2">
            <h4 className="font-semibold text-lg">Total Coding Time</h4>
            {wakaAllTime.data.is_up_to_date ? (
              <p className="text-xs text-green-500">Updated</p>
            ) : (
              <p className="text-xs text-red-500">Not Updated</p>
            )}
          </div>
          <div className="flex justify-between items-end my-4">
            <p className="text-3xl font-bold">{wakaAllTime.data.text}</p>
            <p className="text-sm font-bold text-gray-500">
              {roundToTwo(wakaAllTime.data.total_seconds)}
              &nbsp;<span className="font-light">seconds</span>
            </p>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full my-2">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              style={{
                width: `${wakaAllTime.data.percent_calculated}%`,
              }}
            />
          </div>
          <div className="inline-flex justify-between w-full">
            <p className="text-xs text-gray-500">
              Since: &nbsp;
              <span className="font-bold">
                {wakaAllTime.data.range.start_text}
              </span>
            </p>
            <p className="text-xs text-gray-500">
              Updated:&nbsp;
              <span className="font-bold">
                {wakaAllTime.data.range.end_text}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <LoadingSpinner svgWidth="30" svgHeight="30" className="p-20" />
      )}
    </CardSpotlightEffect>
  );
}

WakaTimeTotalHours.propTypes = {
  data: PropTypes.object,
};
