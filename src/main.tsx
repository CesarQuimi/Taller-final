import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Login } from "./Login";
import { Portafolio } from "./portafolio/Portafolio";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Login /> */}
    <Portafolio />
  </StrictMode>
);
