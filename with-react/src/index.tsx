import { BrowserRouter, React, ReactDOM } from "../deps.client.ts";
import App from "./App.tsx";

// Bind react app to <div id="app" />
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
