import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { PieChart, easings } from "chartist";
import { roundToTwo } from "../../libs/utils";
import { Tooltip as ReactTooltip } from "react-tooltip";

const calculatePercentage = (data) => {
  const average_time = data.average_time / 60;
  const total_time = data.total_time / 60;
  let percentage =
    (average_time / total_time) * 100 + data.number_of_language / 2;
  percentage -= data.holidays * 7;
  percentage += parseInt(data.number_of_language) * 5;
  if (isNaN(percentage)) percentage = 0;
  Math.max(percentage, 0);
  Math.min(percentage, 100);
  return roundToTwo(percentage);
};

const DonutChartComponent = ({ percentData }) => {
  const percent = useMemo(
    () => calculatePercentage(percentData),
    [percentData]
  );
  let gradeText, gradeColor;

  switch (true) {
    case percent >= 90:
      gradeText = "S";
      gradeColor = ["#e81cff", "#40c9ff"];
      break;
    case percent >= 85:
      gradeText = "A+";
      gradeColor = ["#0061ff", "#60efff"];
      break;
    case percent >= 75:
      gradeText = "A";
      gradeColor = ["#00ff87", "#60efff"];
      break;
    case percent >= 65:
      gradeText = "B";
      gradeColor = ["#11998e", "#38ef7d"];
      break;
    case percent >= 55:
      gradeText = "C";
      gradeColor = ["#db36a4", "#FEAC5E"];
      break;
    case percent >= 45:
      gradeText = "D";
      gradeColor = ["#1ed7b5", "#f0f9a7"];
      break;
    case percent >= 35:
      gradeText = "E";
      gradeColor = ["#f0073b", "#b94c98"];
      break;
    default:
      gradeText = "F";
      gradeColor = ["#bdc3c7", "#2c3e50"];
      break;
  }

  console.log(percent);

  const pieChart = useCallback(() => {
    new PieChart(
      "#donut-chart",
      {
        series: [
          {
            value: percent,
            isBackground: false,
          },
        ],
      },
      {
        donut: true,
        donutWidth: 10,
        startAngle: 0,
        showLabel: false,
        total: 100,
        chartPadding: 0,
        width: "120px",
        height: "120px",
      }
    ).on("draw", function (data) {
      if (data.type === "slice") {
        const pathLength = data.element._node.getTotalLength();

        data.element.attr({
          "data-tooltip-id": "point-tooltip",
          "data-tooltip-float": "true",
          "data-tooltip-place": "top",
          "data-tooltip-delay": "100",
          "data-tooltip-content": percent + "%",
          "stroke-dasharray": pathLength + "px " + pathLength + "px",
          style:
            "stroke-width: 6px; stroke: url(#stroke_gradient); stroke-linecap: round;",
        });

        // Create a new `I` (animator) object and animate `stroke-dashoffset`
        let animationDefinition = {
          "stroke-dashoffset": {
            id: "anim" + data.index,
            dur: 1500, // Duration of the animation
            begin: 250,
            from: -pathLength + "px",
            to: "0px",
            easing: easings.easeOutExpo, // Use an easing function
            fill: "freeze", // Keep the final state
          },
        };

        data.element.attr({
          "stroke-dashoffset": -pathLength + "px",
        });

        data.element.animate(animationDefinition, false);
      }
    });
  }, [percent]);

  return (
    <div className="relative">
      <svg className="absolute top-0 left-0 w-full h-full stroke-slate-200 dark:stroke-gray-900 ">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="none"
          strokeWidth="6px"
          opacity="1"
        />
      </svg>
      <div id="donut-chart" ref={pieChart} className="relative">
        <ReactTooltip
          id="point-tooltip"
          place="bottom"
          disableStyleInjection="true"
          className="text-black dark:text-white bg-slate-100 dark:bg-gray-1000 border border-slate-300 dark:border-gray-800 p-1.5 rounded text-xs font-semibold shadow-lg z-10"
        />
        <svg viewBox="0 0 0 0" className="h-0 w-0">
          <defs>
            <linearGradient id="stroke_gradient" x2="50%" y2="100%">
              <stop offset="0%" stopColor={gradeColor.at(0)} />
              <stop offset="100%" stopColor={gradeColor.at(1)} />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 font-extrabold text-3xl ">
          {gradeText}
        </h1>
      </div>
    </div>
  );
};

export default DonutChartComponent;

DonutChartComponent.propTypes = {
  percentData: PropTypes.object.isRequired,
};
