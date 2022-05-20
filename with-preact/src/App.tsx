/** @jsx h */
import { Component, h, renderToString } from "../deps.ts";
import { Hello } from "./components/Hello.tsx";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Hello />
      </div>
    );
  }
}

// Instantiate app.
const app = new App();

// Form HTML.
const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    ${renderToString(app.render())}
  </body>
</html>`;

export default html;
