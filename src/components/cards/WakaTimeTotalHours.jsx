import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { roundToTwo } from "../../libs/utils";
import CardError from "../CardError";
import CardLoader from "../CardLoader";

export default function WakaTimeTotalHours({ data }) {
  const [wakaAllTime, setWakaAllTime] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    data
      .then((data) => {
        setWakaAllTime(data);
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
              <p className="text-3xl font-bold truncate">
                {wakaAllTime.data.text}
              </p>
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
          <CardLoader viewBox="0 0 481 180">
            <rect x="15" y="20" rx="5" ry="5" width="159" height="29" />
            <rect x="416" y="28" rx="5" ry="5" width="50" height="13" />
            <rect x="17" y="73" rx="5" ry="5" width="202" height="37" />
            <rect x="340" y="91" rx="3" ry="3" width="124" height="16" />
            <rect x="18" y="121" rx="3" ry="3" width="445" height="8" />
            <rect x="17" y="145" rx="2" ry="2" width="138" height="11" />
            <rect x="374" y="144" rx="2" ry="2" width="91" height="13" />
          </CardLoader>
        )}
      </CardError>
    </CardSpotlightEffect>
  );
}

WakaTimeTotalHours.propTypes = {
  data: PropTypes.object,
};
