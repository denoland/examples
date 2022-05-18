import { React } from "../deps.client.js";
import { ReactDOM } from "../deps.client.js";
import App from "./App.jsx";

// Initial data.
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

// Create react app.
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App tasks={DATA} />);
