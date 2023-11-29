import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { CodeBlock } from "@phosphor-icons/react";
import {
  calculateTimeElapsed,
  convertSecsToHrsAndMins,
} from "../../libs/utils";
import LoadingSpinner from "../LoadingSpinner";

function WakaTimeDuration({ data }) {
  const [wakaTimeData, setWakaTimeData] = useState("");

  useEffect(() => {
    data.then((res) => {
      setWakaTimeData(res);
    });
  }, [data]);

  return (
    <CardSpotlightEffect>
      {wakaTimeData ? (
        <div className="p-5">
          <div className="w-full flex justify-between items-center mb-2.5 pb-2.5">
            <h4 className="font-bold text-lg">Current Projects</h4>
            <p className="text-xs">Today</p>
          </div>
          {wakaTimeData.data.slice(0, 2).map((data) => (
            <div
              key={data.duration}
              className="flex justify-between items-center my-3 text-slate-600 dark:text-gray-400"
            >
              <div className="grid place-items-start gap-y-1">
                <div className="inline-flex items-center">
                  <CodeBlock
                    size="18px"
                    className="mr-1.5 text-blue-600 dark:text-blue-400"
                  />
                  <p className="font-semibold text-sm capitalize">
                    {data.project}
                  </p>
                </div>
                <p className="font-normal text-xs text-slate-400 dark:text-gray-600">
                  {convertSecsToHrsAndMins(data.duration)}
                </p>
              </div>
              <div className="ml-5">
                <p className="font-semibold text-sm">
                  {calculateTimeElapsed(data.time)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner svgWidth="30" svgHeight="30" className="p-20" />
      )}
    </CardSpotlightEffect>
  );
}

export default WakaTimeDuration;

WakaTimeDuration.propTypes = {
  data: PropTypes.object.isRequired,
};
