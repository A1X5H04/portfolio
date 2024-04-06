import PropTypes from "prop-types";
import { PiSealWarning } from "react-icons/pi";

function CardError({ error, children }) {
  return error.status ? (
    <div className="py-10 grid place-items-center h-full" role="alert">
      <div className="flex flex-col justify-center items-center">
        <div className="border border-slate-300 dark:border-gray-900 p-4 rounded-md bg-slate-100 dark:bg-gray-1000">
          <PiSealWarning size="28" />
        </div>
        <div className="flex flex-col mt-6 items-center gap-1">
          <span className="block sm:inline font-bold">{error.message}</span>
          <p className="text-sm text-slate-500 dark:text-gray-600">
            Check console for more info
          </p>
        </div>
      </div>
    </div>
  ) : (
    children
  );
}

export default CardError;

CardError.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node,
};
