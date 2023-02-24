import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Help = lazy(() => import("./pages/help"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path="/"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/help"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Help />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
