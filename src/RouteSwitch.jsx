import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PicPage from "./pages/PicPage";
import CategoryPage from "./pages/CategoryPage";
import DrawnCategory from "./pages/DrawnCategory";
import StatueCategory from "./pages/StatueCategory";
import LiveCategory from "./pages/LiveCategory";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pictures-all" element={<PicPage itemsPerPage={12} />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route
          path="/pictures-2D"
          element={<DrawnCategory itemsPerPage={12} />}
        />
        <Route
          path="/pictures-3D"
          element={<StatueCategory itemsPerPage={12} />}
        />
        <Route
          path="/pictures-live"
          element={<LiveCategory itemsPerPage={12} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
