/*
Developed By: Joseph Leahy
Email: josleahy@icloud.com
Time spent: Approx. 10 hours 
This assignment was completed entirely on my own.
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
