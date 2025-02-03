import { motion } from "framer-motion";
import "./Loader.css";

function ScreenLoader({
  width = "45px",
  height = "45px",
  borderColor = "var(--color-text)",
  borderWidth = "5",
  onFadeOutComplete,
  ...props
}) {
  const loaderStyle = {
    width,
    height,
    border: `${borderWidth}px solid ${borderColor}`,
    borderTop: `${borderWidth}px solid transparent`,
  };

  return (
    <motion.div
      className="screen-loader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onFadeOutComplete}
    >
      <motion.div className="screen-loader" style={loaderStyle} {...props} />
    </motion.div>
  );
}

export default ScreenLoader;
