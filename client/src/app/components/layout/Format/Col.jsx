import React from "react";

const Col = ({ children, sm, md, lg, xl, className = "" }) => {
  const colClasses = [
    sm && `w-full sm:w-${sm}/12`,
    md && `md:w-${md}/12`,
    lg && `lg:w-${lg}/12`,
    xl && `xl:w-${xl}/12`,
    "px-4",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={colClasses}>{children}</div>;
};

export default Col;
