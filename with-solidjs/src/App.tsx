import { Router, Route } from "@solidjs/router";
import Index from "./pages/Index.tsx";
import Dinosaur from "./pages/Dinosaur.tsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Index} />
      <Route path="/:selectedDinosaur" component={Dinosaur} />
    </Router>
  );
};

export default App;
