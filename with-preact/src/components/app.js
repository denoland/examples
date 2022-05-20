import { Component, h, Router } from "../../deps.js";

export default class App extends Component {
  /** Gets fired when the route changes.
   * 	@param {Object} event		"change" event from [preact-router](https://github.com/preactjs/preact-router)
   * 	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          Hello, world!
        </Router>
      </div>
    );
  }
}
