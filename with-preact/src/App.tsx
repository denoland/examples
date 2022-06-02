/** @jsx h */
import { Component, h, PreactRouter } from "../deps.ts";
import { HomePage } from "./pages/HomePage.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { UserPage } from "./pages/UserPage.tsx";
import { GettingStartedPage } from "./pages/GettingStartedPage.tsx";
import { Footer } from "./components/Footer.tsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PreactRouter>
          <HomePage path="/" />
          <GettingStartedPage path="/getting-started" />
          <UserPage path="/users/:username" />
          <HomePage default />
        </PreactRouter>
        <Footer />
      </div>
    );
  }
}

// Instantiate app.
export default new App();
