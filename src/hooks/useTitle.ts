import startCase from "lodash/startCase";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const getTitle = (pathname: string) => {
  const paths = pathname.split("/").filter(Boolean);

  if (paths[0] === "employees" && paths[1]) return `Employee Details`;
  if (paths[0] === "inventory" && paths[1]) return `Product Details`;
  if (paths[0] === "procurement" && paths[1]) return `Order Details`;
  if (paths[0] === "procurement") return `Orders`;
  return startCase(paths[0]);
};

export const useTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Coreflow | ${getTitle(location.pathname)}`;
  }, [location.pathname]);
};
