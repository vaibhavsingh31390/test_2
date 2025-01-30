/* eslint-disable react/prop-types */
function Loader({ width, height, borderColor, ...props }) {
  return (
    <div
      className="global--loader"
      style={{
        width: width || "16px",
        height: height || "16px",
        border: `5px solid ${borderColor || "theme('colors.primary')"}`,
      }}
    ></div>
  );
}

export default Loader;
