/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ScreenLoader({ width, height, borderColor, ...props }) {
  return (
    <div className="global--screen--loader--container">
      <div
        className="global--screen--loader"
        style={{
          width: width || "48px",
          height: height || "48px",
          border: `5px solid ${borderColor || "theme('colors.primary')"}`,
        }}
      ></div>
    </div>
  );
}

export default ScreenLoader;
