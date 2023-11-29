import { useState, useEffect } from "react";
import CardSpotlightEffect from "../CardSpotlightEffect";
import snarkdown from "snarkdown";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import LoadingSpinner from "../LoadingSpinner";

export default function AboutMeCard({ data }) {
  const [aboutArray, setAboutArray] = useState([]);

  useEffect(() => {
    data.then((res) => {
      setAboutArray(res);
    });
  }, [data]);

  return (
    <CardSpotlightEffect className="row-span-2">
      {aboutArray ? (
        <>
          <div className="flex px-5 pt-5 justify-between items-center font-medium">
            <div className="flex gap-1 items-center justify-center text-xs font-mono">
              <p className="">A1X5H04</p>
              <span className="text-gray-800">/</span>
              <h1 className="inline-flex font-mono">
                ABOUTME
                <span className="text-gray-800">.md</span>
              </h1>
            </div>
            <a href="https://github.com/a1x5h04">
              <img
                className="w-8 h-8 mb-1 rounded-full"
                src="https://avatars.githubusercontent.com/u/78891448?v=4"
                alt="Alish"
              />
            </a>
          </div>
          <div className="px-5 py-3 markdown">
            {aboutArray?.map((text) => (
              <div key={text} className="text-sm my-2">
                {parse(snarkdown(text))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <LoadingSpinner svgWidth="30" svgHeight="30" className="p-20" />
      )}
    </CardSpotlightEffect>
  );
}

AboutMeCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};
