import { useCallback } from "react";
import PropTypes from "prop-types";
import "chartist/dist/index.css";
import { LineChart, Interpolation } from "chartist";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { roundToTwo } from "../../libs/utils";

// eslint-disable-next-line react/prop-types
const AreaGraphComponent = ({ data }) => {
  const chart = useCallback(() => {
    new LineChart(
      "#area-graph",
      {
        // eslint-disable-next-line react/prop-types
        labels: data.map((item) => item.name.slice(0, 3)),
        // eslint-disable-next-line react/prop-types
        series: [data.map((item) => item.total / 60)],
      },
      {
        axisX: {
          divisor: 30,
        },
        showGridBackground: true,
        height: "225px",
        showArea: true,
        lineSmooth: Interpolation.cardinal({
          fillHoles: true,
          tension: 5,
        }),
        chartPadding: {
          left: -5,
          right: 25,
        },
        fullWidth: true,
        axisY: {
          onlyInteger: true,
        },
      }
    ).on("draw", function (data) {
      if (data.type === "point") {
        data.element.attr({
          "data-tooltip-id": "point-tooltip",
          "data-tooltip-float": "true",
          "data-tooltip-place": "top",
          "data-tooltip-delay": "100",
          "data-tooltip-content": roundToTwo(data.value.y) + " minutes",
        });
      }
    });
  }, [data]);

  return (
    <div className="w-full h-full col-span-2" ref={chart} id="area-graph">
      <ReactTooltip
        id="point-tooltip"
        place="bottom"
        disableStyleInjection="true"
        className="text-black dark:text-white bg-slate-100 dark:bg-gray-1000 border border-slate-300 dark:border-gray-800 p-1.5 rounded text-xs font-semibold shadow-lg "
      />
    </div>
  );
};

export default AreaGraphComponent;

AreaGraphComponent.propTypes = {
  data: PropTypes.array.isRequired,
};
