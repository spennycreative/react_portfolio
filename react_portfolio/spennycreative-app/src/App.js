import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/modules/NavBar";
import Home from "./pages/Home";
import History from "./pages/History";
import Skills from "./pages/Skills";
import Archive from "./pages/Archive";
import ProjectSingle from "./pages/ProjectSingle";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";
import "../src/css/typography.css";
import "../src/css/container.css";
import "../src/css/buttons.css";
import "../src/css/page-body.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child("speed");
    speedRef.on("value", snap => {
      this.setState({
        speed: snap.val()
      });
    });
    console.log(speedRef);
  }

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <NavBar />
            <main id="page-body" className="body main">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/history" component={History} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Archive} />
                <Route path="/project/:name" component={ProjectSingle} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
