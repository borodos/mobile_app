import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
