import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

const Home = lazy(() => import("./pages/home"));
const Quran = lazy(() => import("./pages/quran"));
const Hadith = lazy(() => import("./pages/hadith"));
const Tafsir = lazy(() => import("./pages/tafsir"));
const About = lazy(() => import("./pages/about"));
const Help = lazy(() => import("./pages/help"));
const Donate = lazy(() => import("./pages/donate"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/quran"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Quran />
              </Suspense>
            }
          />
          <Route
            path="/hadith"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Hadith />
              </Suspense>
            }
          />
          <Route
            path="/tafsir"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Tafsir />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <About />
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
          <Route
            path="/donate"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Donate />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
