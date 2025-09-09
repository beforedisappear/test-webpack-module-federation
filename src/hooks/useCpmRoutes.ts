import { useState, useLayoutEffect } from "react";
import { RouteObject } from "react-router-dom";

export const useCpmRoutes = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useLayoutEffect(() => {
    import("cpm/CPMApp").then((module) => {
      setRoutes(module.cpmAppRoutes);
    });
  }, []);

  return routes;
};
