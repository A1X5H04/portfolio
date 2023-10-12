
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs) {
    return twMerge(clsx(inputs));
  }

function GridPattern({
  width = 30,
  height = 30,
  x = -1,
  y = -1,
  strokeDasharray="2 3",
  squares,
  className,
  ...props
}) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-slate-400/30 dark:fill-gray-400/30 stroke-slate-400/30 dark:stroke-gray-400/30 ",
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
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export default GridPattern
