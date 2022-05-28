/** @jsx h */
import { Component, h, PreactRouter, renderToString } from "../deps.ts";
import { HomePage } from "./components/HomePage.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { UserPage } from "./components/UserPage.tsx";
import { AboutPage } from "./components/AboutPage.tsx";
import { Footer } from "./components/Footer.tsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PreactRouter>
          <HomePage path="/" />
          <AboutPage path="/about" />
          <UserPage path="/users/:username" />
          <HomePage default />
        </PreactRouter>
        <Footer />
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
