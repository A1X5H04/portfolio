import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import ContentLoader from "react-content-loader";
import {
  calculateTimeElapsed,
  convertSecsToHrsAndMins,
} from "../../libs/utils";
import { PiCodeBlockDuotone } from "react-icons/pi";

function WakaTimeDuration({ data, theme }) {
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
          {wakaTimeData.data.length === 0 ? (
            <p className="grid place-items-center h-24 font-semibold text-slate-600 dark:text-gray-400">
              No data available
            </p>
          ) : (
            <div>
              {wakaTimeData.data.slice(0, 2).map((data) => (
                <div
                  key={data.duration}
                  className="flex justify-between items-center my-3 text-slate-600 dark:text-gray-400"
                >
                  <div className="grid place-items-start gap-y-1">
                    <div className="inline-flex items-center">
                      <PiCodeBlockDuotone
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
          )}
        </div>
      ) : (
        <ContentLoader
          speed={2}
          width={481}
          height={194}
          viewBox="0 0 481 194"
          backgroundColor={theme ? "#1e1e1e" : "#f6f5f4"}
          foregroundColor={theme ? "#9a9996" : "#deddda"}
        >
          <rect x="20" y="20" rx="5" ry="5" width="151" height="30" />
          <rect x="425" y="30" rx="3" ry="3" width="40" height="15" />
          <rect x="383" y="136" rx="3" ry="3" width="81" height="16" />
          <rect x="383" y="84" rx="3" ry="3" width="81" height="16" />
          <rect x="45" y="73" rx="3" ry="3" width="65" height="16" />
          <rect x="20" y="97" rx="3" ry="3" width="95" height="12" />
          <rect x="20" y="73" rx="3" ry="3" width="21" height="16" />
          <rect x="45" y="123" rx="3" ry="3" width="65" height="16" />
          <rect x="20" y="147" rx="3" ry="3" width="95" height="12" />
          <rect x="20" y="123" rx="3" ry="3" width="21" height="16" />
        </ContentLoader>
      )}
    </CardSpotlightEffect>
  );
}

export default WakaTimeDuration;

WakaTimeDuration.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.bool,
};
