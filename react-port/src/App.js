import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Nav />
          <br />
          <br />
          <br />
          <About />
        </Route>
        <Route path="/contact">
          <Nav />
          <br />
          <br />
          <br />
          <Contact />
        </Route>
        <Route path="/projects">
          <Nav />
          <br />
          <br />
          <br />
          <Projects />
        </Route>
        <Route path="/My-portfolio">
          <Jump>
            <Nav />
          </Jump>
          <br />
          <br />
          <br />
          <Zoom>
            <Card />
          </Zoom>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
