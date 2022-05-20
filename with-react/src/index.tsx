import { React, ReactDOM } from "../deps.client.ts";
import App from "./App.tsx";

// Initial data.
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

// Bind react app to <div id="app" />
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App tasks={DATA} />);
