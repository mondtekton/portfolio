import * as React from "react";
const Send = ({ color, size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg-icon"
    style={{
      width: `${size ? size : "1em"}`,
      height: `${size ? size : "1em"}`,
      verticalAlign: "middle",
      fill: "currentColor",
      overflow: "hidden",
    }}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill={color ? color : "#231F20"}
      d="m906.24 54.4-848 464.96A50.56 50.56 0 0 0 64 611.2l232 86.08 14.08 196.8a93.44 93.44 0 0 0 165.12 52.48L589.76 806.4l248.96 92.48a50.56 50.56 0 0 0 67.84-42.56l74.56-752.64a50.56 50.56 0 0 0-74.88-49.28zm-93.76 256L531.52 712.96a72.32 72.32 0 0 1-118.4-82.88c6.08-8.32 348.16-348.16 354.88-355.52a28.8 28.8 0 0 1 44.8 37.12z"
    />
  </svg>
);
export default Send;
