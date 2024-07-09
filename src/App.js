import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy"; // Add this import
import { BrowserRouter, Route, Switch } from "react-router-dom"; // Add this import
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Switch>
          <Route path="/" exact>

            <Intro></Intro>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Credits></Credits>
          </Route>
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
