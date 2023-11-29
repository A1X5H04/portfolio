import { useCallback } from "react";
import PropTypes from "prop-types";
import { PieChart } from "chartist";
import { roundToTwo } from "../../libs/utils";

const calculatePercentage = (partialValue, totalValue) => {
  let percentage = (partialValue / totalValue) * 100;
  return Math.min(percentage, 100);
};

const DonutChartComponent = ({ dataArray }) => {
  const pieChart = useCallback(() => {
    new PieChart(
      "#donut-chart",
      {
        series: [
          {
            value: dataArray[0],
            color: "#ffcdb2",
          },
          {
            value: dataArray[1],
            color: "#b5838d",
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
        {roundToTwo(calculatePercentage(dataArray[0], dataArray[1]))}%
      </h1>
    </div>
  );
};

export default DonutChartComponent;

DonutChartComponent.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.number),
};
