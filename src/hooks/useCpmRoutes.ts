import { useState, useEffect } from "react";
import { RouteObject } from "react-router-dom";

export const useCpmRoutes = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    import("cpm/CPMApp").then((module) => {
      setRoutes(module.cpmAppRoutes);
    });
  }, []);

  return routes;
};
