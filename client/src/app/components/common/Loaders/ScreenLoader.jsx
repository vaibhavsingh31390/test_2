/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function ScreenLoader({
  width = '45px',
  height = '45px',
  borderColor = '#fff',
  borderWidth = '3',
  onFadeOutComplete,
  ...props
}) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 500);
    return () => clearTimeout(fadeOutTimeout);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const unmountTimeout = setTimeout(() => {
        onFadeOutComplete?.();
      }, 500);
      return () => clearTimeout(unmountTimeout);
    }
  }, [fadeOut, onFadeOutComplete]);

  const loaderStyle = {
    width,
    height,
    border: `${borderWidth}px solid ${borderColor}`,
    borderTop: `${borderWidth}px solid transparent`,
  };

  return (
    <div
      className={`global--screen--loader--container ${
        fadeOut ? 'fade-out' : ''
      }`}
    >
      <div
        className="global--screen--loader"
        style={loaderStyle}
        {...props}
      ></div>
    </div>
  );
}

export default ScreenLoader;
