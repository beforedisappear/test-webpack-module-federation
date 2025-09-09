import { useState, useLayoutEffect } from "react";
import { RouteObject } from "react-router-dom";

export const module = import("cpm/CPMApp");

export const useCpmRoutes = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useLayoutEffect(() => {
    module.then((module) => {
      setRoutes(module.cpmAppRoutes);
    });
  }, []);

  return routes;
};
