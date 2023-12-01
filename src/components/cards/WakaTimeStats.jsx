import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DonutChartComponent from "../charts/DonutChartComponent";
import ContentLoader from "react-content-loader";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { getEditorColor, getLanguageColor } from "../../libs/utils";
import CardError from "../CardError";

function WakaTimeStats({ data, theme }) {
  const [stats, setStats] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    data
      .then((res) => {
        setStats(res);
      })
      .catch((err) => {
        setError({
          status: true,
          message: err.message,
        });
      });
  }, [data]);
  return (
    <CardSpotlightEffect className="row-span-3">
      <CardError error={error}>
        {stats ? (
          <div className="p-5">
            <div className="w-full flex justify-between items-center mb-5">
              <h4 className="font-bold text-lg">Overall Stats</h4>
              <p className="text-xs">Last 7 Days</p>
            </div>
            <div>
              <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between mb-2 pb-4 text-slate-600 dark:text-gray-400 border-b border-slate-200 dark:border-gray-1000">
                <div className="flex w-full flex-col whitespace-nowrap">
                  <div className="inline-flex justify-between lg:w-56 w-full text-sm font-semibold mb-1">
                    <p>Stats Range:</p>
                    <span className="capitalize text-slate-400 dark:text-gray-600">
                      {stats.data.human_readable_range}
                    </span>
                  </div>
                  <div className="inline-flex justify-between lg:w-56 w-full text-sm font-semibold mb-1">
                    <p>Daily Average:&nbsp;</p>
                    <span className="capitalize text-slate-400 dark:text-gray-600">
                      {stats.data.human_readable_daily_average}
                    </span>
                  </div>
                  <div className="inline-flex justify-between lg:w-56 w-full text-sm font-semibold mb-1">
                    <p>Days Coded:&nbsp;</p>
                    <span className="capitalize text-slate-400 dark:text-gray-600">
                      {stats.data.days_minus_holidays} out of&nbsp;
                      {stats.data.days_including_holidays} days
                    </span>
                  </div>
                  <div className="inline-flex justify-between lg:w-56 w-full text-sm font-semibold mb-1">
                    <p>Languages Used:</p>
                    <span className="capitalize text-slate-400 dark:text-gray-600">
                      {stats.data.languages.length}
                    </span>
                  </div>
                  <div className="inline-flex justify-between lg:w-56 w-full text-sm font-semibold mb-1">
                    <p>Total:</p>
                    <span className="capitalize text-slate-400 dark:text-gray-600">
                      {stats.data.human_readable_total}
                    </span>
                  </div>
                </div>
                <div className="lg:mr-5 mb-3">
                  <DonutChartComponent
                    percentData={{
                      average_time: stats.data.daily_average / 60,
                      holidays: 0,
                      total_time: stats.data.total_seconds / 60,
                      number_of_language: stats.data.languages.length,
                    }}
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
                      <div
                        style={{
                          backgroundColor: getEditorColor(editor.name),
                        }}
                        className="w-2 h-2 rounded-full mr-1.5"
                      />
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
          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 481 545"
            backgroundColor={theme ? "#1e1e1e" : "#f6f5f4"}
            foregroundColor={theme ? "#9a9996" : "#deddda"}
          >
            <rect x="401" y="27" rx="3" ry="3" width="60" height="13" />
            <rect x="19" y="22" rx="5" ry="5" width="108" height="29" />
            <circle cx="373" cy="124" r="60" />
            <rect x="17" y="213" rx="5" ry="5" width="108" height="25" />
            <rect x="18" y="428" rx="5" ry="5" width="108" height="25" />
            <rect x="33" y="259" rx="3" ry="3" width="69" height="15" />
            <rect x="20" y="280" rx="3" ry="3" width="82" height="10" />
            <circle cx="24" cy="266" r="5" />
            <rect x="187" y="259" rx="3" ry="3" width="69" height="15" />
            <rect x="174" y="280" rx="3" ry="3" width="82" height="10" />
            <circle cx="178" cy="266" r="5" />
            <rect x="339" y="259" rx="3" ry="3" width="69" height="15" />
            <rect x="326" y="280" rx="3" ry="3" width="82" height="10" />
            <circle cx="330" cy="266" r="5" />
            <rect x="34" y="306" rx="3" ry="3" width="69" height="15" />
            <rect x="21" y="327" rx="3" ry="3" width="82" height="10" />
            <circle cx="25" cy="313" r="5" />
            <rect x="187" y="306" rx="3" ry="3" width="69" height="15" />
            <rect x="174" y="327" rx="3" ry="3" width="82" height="10" />
            <circle cx="178" cy="313" r="5" />
            <rect x="341" y="306" rx="3" ry="3" width="69" height="15" />
            <rect x="328" y="327" rx="3" ry="3" width="82" height="10" />
            <circle cx="332" cy="313" r="5" />
            <rect x="34" y="351" rx="3" ry="3" width="69" height="15" />
            <rect x="21" y="372" rx="3" ry="3" width="82" height="10" />
            <circle cx="25" cy="358" r="5" />
            <rect x="186" y="351" rx="3" ry="3" width="69" height="15" />
            <rect x="173" y="372" rx="3" ry="3" width="82" height="10" />
            <circle cx="177" cy="358" r="5" />
            <rect x="33" y="477" rx="3" ry="3" width="69" height="15" />
            <rect x="20" y="498" rx="3" ry="3" width="82" height="10" />
            <circle cx="24" cy="484" r="5" />
            <rect x="20" y="76" rx="5" ry="5" width="215" height="102" />
            <rect x="186" y="476" rx="3" ry="3" width="69" height="15" />
            <rect x="173" y="497" rx="3" ry="3" width="82" height="10" />
            <circle cx="177" cy="483" r="5" />
            <rect x="339" y="475" rx="3" ry="3" width="69" height="15" />
            <rect x="326" y="496" rx="3" ry="3" width="82" height="10" />
            <circle cx="330" cy="482" r="5" />
          </ContentLoader>
        )}
      </CardError>
    </CardSpotlightEffect>
  );
}

export default WakaTimeStats;

WakaTimeStats.propTypes = {
  data: PropTypes.object,
  theme: PropTypes.bool,
};
