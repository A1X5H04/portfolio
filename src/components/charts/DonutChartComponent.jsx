import { useCallback } from "react";
import PropTypes from "prop-types";
import { PieChart } from "chartist";

const DonutChartComponent = ({ dataArray }) => {
  const pieChart = useCallback(() => {
    new PieChart(
      "#donut-chart",
      {
        series: [
          {
            value: dataArray[0],
            color: "#9b5de5",
          },
          {
            value: dataArray[1],
            color: "#f15bb5",
          },
        ],
      },
      {
        donut: true,
        donutWidth: 10,
        startAngle: 0,
        showLabel: false,
        chartPadding: 0,
        width: "115px",
        height: "115px",
      }
    ).on("draw", function (data) {
      if (data.type === "slice") {
        data.element.attr({
          style: `stroke-width: 8px; stroke: ${data.series.color}`,
        });
      }
    });
  }, []);

  return (
    <div id="donut-chart" ref={pieChart} className="relative">
      <h1 className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 font-extrabold text-xl">
        100%
      </h1>
    </div>
  );
};

export default DonutChartComponent;

DonutChartComponent.propTypes = {
  languageArray: PropTypes.arrayOf(
    PropTypes.shape({
      percent: PropTypes.number,
    })
  ),
};
