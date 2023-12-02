import PropTypes from "prop-types";
import { useId } from "react";
import { cn } from "../libs/utils";

function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 10,
  cy = 10,
  cr = 1,
  outline = false,
  className,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none -z-10 absolute inset-0 h-full w-full fill-slate-400/30 dark:fill-gray-500/30 stroke-slate-400/30 dark:stroke-gray-500/30 ",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            id="pattern-circle"
            cx={cx}
            cy={cy}
            r={cr}
            fill={!outline ? "inherit" : "none"}
            stroke={outline ? "inherit" : "none"}
          ></circle>
        </pattern>
      </defs>

      <rect x={x} y={y} width="100%" height="100%" fill={`url(#${id})`}></rect>
    </svg>
  );
}

DotPattern.propTypes = {
  className: PropTypes.string,
  cr: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  height: PropTypes.number,
  outline: PropTypes.bool,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default DotPattern;
