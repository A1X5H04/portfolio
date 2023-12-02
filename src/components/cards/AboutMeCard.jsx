import { useState, useEffect } from "react";
import CardSpotlightEffect from "../CardSpotlightEffect";
import snarkdown from "snarkdown";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import CardError from "../CardError";
import CardLoader from "../CardLoader";

export default function AboutMeCard({ data }) {
  const [aboutArray, setAboutArray] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  // useEffect(() => {
  //   data
  //     .then((res) => {
  //       setAboutArray(res);
  //     })
  //     .catch((err) => {
  //       setError({
  //         status: true,
  //         message: err.message,
  //       });
  //     });
  // }, [data]);

  return (
    <CardSpotlightEffect className="row-span-2">
      <CardError error={error}>
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
          <CardLoader viewBox="0 0 483 282">
            <rect x="20" y="27" rx="3" ry="3" width="140" height="19" />
            <rect x="18" y="78" rx="10" ry="10" width="446" height="181" />
            <rect x="283" y="198" rx="0" ry="0" width="5" height="13" />
            <circle cx="447" cy="36" r="22" />
          </CardLoader>
        )}
      </CardError>
    </CardSpotlightEffect>
  );
}

AboutMeCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};
