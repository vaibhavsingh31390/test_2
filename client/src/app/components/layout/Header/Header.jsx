import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { loading, error, appConfig, currentPath } = useSelector(
    (state) => state.app
  );

  console.log(appConfig, currentPath());

  return <div>Header</div>;
}

export default Header;
