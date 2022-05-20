import { h, render } from "../deps.js";
import App from "./components/app.js";

let root;
function init() {
  root = render(<App />, document.body, root);
}

init();
