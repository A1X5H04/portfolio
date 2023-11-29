import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DonutChartComponent from "../charts/DonutChartComponent";
import LoadingSpinner from "../LoadingSpinner";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { getLanguageColor } from "../../libs/utils";

function WakaTimeStats({ data }) {
  const [stats, setStats] = useState("");

  useEffect(() => {
    data.then((res) => {
      setStats(res);
    });
  }, [data]);
  return (
    <CardSpotlightEffect className="row-span-3">
      {stats ? (
        <div className="p-5">
          <div className="w-full flex justify-between items-center mb-5">
            <h4 className="font-bold text-lg">Overall Stats</h4>
            <p className="text-xs">Last 7 Days</p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2 pb-4 text-slate-600 dark:text-gray-400 border-b border-slate-200 dark:border-gray-1000">
              <div className="flex flex-col whitespace-nowrap">
                <div className="inline-flex justify-between w-52 text-sm font-semibold">
                  <p>Stats Range</p>
                  <span className="capitalize text-slate-400 dark:text-gray-600">
                    {stats.data.human_readable_range}
                  </span>
                </div>
                <div className="inline-flex justify-between w-52 text-sm font-semibold">
                  <p>Daily Average</p>
                  <span className="capitalize text-slate-400 dark:text-gray-600">
                    {stats.data.human_readable_daily_average}
                  </span>
                </div>
                <div className="inline-flex justify-between w-52 text-sm font-semibold">
                  <p>Days Coded</p>
                  <span className="capitalize text-slate-400 dark:text-gray-600">
                    {stats.data.days_minus_holidays} out of&nbsp;
                    {stats.data.days_including_holidays} days
                  </span>
                </div>
                <div className="inline-flex justify-between w-52 text-sm font-semibold">
                  <p>Percent Calculated</p>
                  <span className="capitalize text-slate-400 dark:text-gray-600">
                    {stats.data.percent_calculated}%
                  </span>
                </div>
                <div className="inline-flex justify-between w-52 text-sm font-semibold">
                  <p>Total</p>
                  <span className="capitalize text-slate-400 dark:text-gray-600">
                    {stats.data.human_readable_total}
                  </span>
                </div>
              </div>
              <div className="lg:mr-8">
                <DonutChartComponent
                  dataArray={[
                    stats.data.daily_average,
                    stats.data.total_seconds / 2,
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 border-b border-slate-200 dark:border-gray-1000">
            <h3 className="font-bold mb-5 text-lg">Languages</h3>
            <div className="w-full grid grid-cols-3 gap-x-5 gap-y-2.5 mb-2 pb-4 text-slate-600 dark:text-gray-400 ">
              {stats.data.languages.slice(0, 8).map((language) => (
                <div key={language.name}>
                  <div className="flex items-center">
                    <div
                      style={{
                        backgroundColor: getLanguageColor(language.name),
                      }}
                      className="w-2 h-2 rounded-full mr-1.5"
                    ></div>
                    <p className="text-sm font-semibold">{language.name}</p>
                  </div>
                  <p className="text-xs font-normal text-slate-400 dark:text-gray-700">
                    {language.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-5 text-lg">Editors</h3>
            <div className="w-full grid grid-cols-3 gap-3 pb-4 text-slate-600 dark:text-gray-400">
              {stats.data.editors.map((editor) => (
                <div key={editor.name}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></div>
                    <p className="text-sm font-semibold">{editor.name}</p>
                  </div>
                  <p className="text-xs font-normal text-slate-400 dark:text-gray-700">
                    {editor.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner svgWidth="30" svgHeight="30" className="p-20" />
      )}
    </CardSpotlightEffect>
  );
}

export default WakaTimeStats;

WakaTimeStats.propTypes = {
  data: PropTypes.object,
};
