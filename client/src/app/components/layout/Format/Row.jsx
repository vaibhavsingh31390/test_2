import React from "react";

const Row = ({ children, className = "" }) => {
  return <div className={`flex flex-wrap -mx-4 ${className}`}>{children}</div>;
};

export default Row;
