import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PicPage from "./pages/PicPage";
import CategoryPage from "./pages/CategoryPage";
import "./styles/style.scss";

function App() {
  const [state, setState] = useState("categories");
  return (
    <div>
      {state === "home" && <LandingPage />}
      {state === "pictures" && <PicPage />}
      {state === "categories" && <CategoryPage />}
    </div>
  );
}

export default App;
