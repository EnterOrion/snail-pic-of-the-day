import React, { useState } from "react";
import PicPage from "./pages/PicPage";
import LandingPage from "./pages/LandingPage";
import "./styles/style.scss";

function App() {
  const [state, setState] = useState("pictures");
  return (
    <div>
      {state === "home" && <LandingPage />}
      {state === "pictures" && <PicPage />}
    </div>
  );
}

export default App;
