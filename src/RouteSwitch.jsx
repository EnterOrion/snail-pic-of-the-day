import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PicPage from "./pages/PicPage";
import CategoryPage from "./pages/CategoryPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pictures-all" element={<PicPage itemsPerPage={12} />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
