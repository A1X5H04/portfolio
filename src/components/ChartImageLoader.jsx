import { ChartBar } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ChartImageLoader = ({ imageUrl, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setLoading(false);
    };

    img.onerror = () => {
      setLoading(false);
      setError(true);
    };

    img.src = imageUrl;

    // Clean up the image object to avoid memory leaks
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorElement />;
  }

  return <img className={props.className} src={imageUrl} alt="Loaded" />;
};

export default ChartImageLoader;

function ErrorElement() {
  return (
    <div className="grid place-items-center p-10 border-b w-full border-gray-900">
      <div className="border border-gray-700 p-4  rounded-md">
        <ChartBar size={24} />
      </div>
      <h4 className="font-semibold my-4 text-center">Failed To Load Chart</h4>
    </div>
  );
}

