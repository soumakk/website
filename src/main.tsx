import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Overlay from "./Overlay.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Overlay />
  </StrictMode>,
);
