import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardSpotlightEffect from "../CardSpotlightEffect";
import AreaGraphComponent from "../charts/AreaGraphComponent";
import CardError from "../CardError";
import LoadingSpinner from "../LoadingSpinner";

function WakaTimeInsights({ data }) {
  const [insights, setInsights] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    data
      .then((data) => {
        setInsights(data);
      })
      .catch((err) => {
        setError({
          status: true,
          message: err.message,
        });
      });
  }, [data]);

  return (
    <CardSpotlightEffect className="col-span-2 p-5">
      <CardError error={error}>
        {insights ? (
          <div>
            <h5 className="px-3 pb-5 w-full font-bold text-lg">
              Week Insight (In Minutes)
            </h5>
            <AreaGraphComponent data={insights.data.weekdays} />
          </div>
        ) : (
          <LoadingSpinner svgWidth="30" svgHeight="30" className="p-20" />
        )}
      </CardError>
    </CardSpotlightEffect>
  );
}

export default WakaTimeInsights;

WakaTimeInsights.propTypes = {
  data: PropTypes.object,
};
