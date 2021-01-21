import React from "react";

const getViewBox = (name) => {
  switch (name) {
    default:
      return "0 0 24 24";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "question-mark":
      return (
        <>
          <path
            fill={props.fill}
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"
          />
        </>
      );
    case "arrow-right-circle":
      return (
        <>
                <path
                  d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12zm11.86-3.69l2.86 3a.49.49 0 0 1 .1.15.54.54 0 0 1 .1.16.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38z"
                  fill={props.fill}
                />
        </>
      );
    default:
      return <path />;
  }
};

const Icon = ({
  name = "",
  style = {},
  fill = "none",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default Icon;
