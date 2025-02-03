/* eslint-disable react/prop-types */

function Loader({
  width = "21px",
  height = "21px",
  borderColor = "var(--loader-border-color)", // Use CSS variable
  borderWidth = "3",
  ...props
}) {
  const loaderStyle = {
    width,
    height,
    border: `${borderWidth}px solid ${borderColor}`,
    borderTop: `${borderWidth}px solid transparent`,
  };

  return <div className="global--loader" style={loaderStyle} {...props}></div>;
}

export default Loader;
