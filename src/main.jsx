import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import router from "./Routes/Routes.jsx";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000, // default animation duration in ms
  once: true, // animations happen only once while scrolling
  mirror: false, // whether elements should animate out while scrolling past them
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
