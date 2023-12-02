import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { parseValueforHeatMap } from "../../libs/utils";
import LoadingSpinner from "../LoadingSpinner";
import HeatMap from "@uiw/react-heat-map";
import CardSpotlightEffect from "../CardSpotlightEffect";
import { Tooltip as ReactTooltip } from "react-tooltip";

function WakaTimeActivity({ data, theme }) {
  const [activity, setActivity] = useState("");
  useEffect(() => {
    data.then((data) => {
      setActivity(data);
    });
  }, [data]);

  const [rectSelected, setRectSelected] = useState(false);
  return (
    <CardSpotlightEffect className="col-span-2">
      {activity ? (
        <>
          <h5 className="lg:px-6 px-4 pt-5 w-full font-bold text-lg">
            Activity since{" "}
            <span className="capitalize font-extrabold">
              {activity.human_readable_range}
            </span>
          </h5>
          <ReactTooltip
            id="rect-tooltip"
            place="bottom"
            disableStyleInjection="true"
            className="text-black dark:text-white bg-slate-100 dark:bg-gray-1000 border border-slate-300 dark:border-gray-800 p-1.5 rounded text-xs font-semibold shadow-lg "
          />
          <div className="overflow-x-scroll whitespace-nowrap">
            <HeatMap
              className="h-full w-full p-5 "
              value={parseValueforHeatMap(activity.days)}
              legendRender={(props) => (
                <rect
                  {...props}
                  // eslint-disable-next-line react/prop-types
                  y={props.y + 10}
                  rx="2"
                />
              )}
              rectRender={(props, data) => {
                if (rectSelected) {
                  props.opacity = data.date === rectSelected ? 1 : 0.25;
                }
                return (
                  <rect
                    data-tooltip-id="rect-tooltip"
                    data-tooltip-float="true"
                    data-tooltip-place="top"
                    data-tooltip-delay="100"
                    data-tooltip-hidden={rectSelected ? "true" : "false"}
                    data-tooltip-content={
                      data.count !== undefined || null
                        ? data.count + " minutes"
                        : "No Activity Yet"
                    }
                    {...props}
                    className="relative"
                    onClick={() => {
                      setRectSelected(
                        data.date === rectSelected ? "" : data.date
                      );
                    }}
                  />
                );
              }}
              panelColors={
                theme === "dark"
                  ? {
                      0: "#0c0c0c",
                      1: "#121212",
                      216: "#22223b",
                      432: "#4a4e69",
                      648: "#9a8c98",
                      864: "#c9ada7",
                      1080: "#f2e9e4",
                    }
                  : {
                      0: "#f4f4f4",
                      1: "#EBEDF0",
                      216: "#f2e9e4",
                      432: "#c9ada7",
                      648: "#9a8c98",
                      864: "#4a4e69",
                      1080: "#22223b",
                    }
              }
              space={3}
              rectProps={{
                fill: "#fff",
                rx: "1.5",
              }}
              style={{
                color: theme === "dark" ? "#EBEDF0" : "#121212",
                "--rhm-rect-active": theme === "dark" ? "#fff" : "#000",
                "--rhm-rect-hover-stroke":
                  theme === "dark" ? "#343a40" : "#cbd5e1",
              }}
              weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
              startDate={new Date(activity.days[0].date)}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
          <LoadingSpinner svgWidth="30" svgHeight="30" />
        </div>
      )}
    </CardSpotlightEffect>
  );
}

WakaTimeActivity.propTypes = {
  data: PropTypes.object,
  theme: PropTypes.string,
};

export default WakaTimeActivity;
