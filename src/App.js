import React, { Component } from "react";
import "./App.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderNavbar } from "./components/HeaderNavbar";
import { Intro } from "./components/Intro";
import { Info } from "./components/Info";
import { Shops } from "./components/Shops";
import { Safety } from "./components/Safety";
import { Footer } from "./components/Footer";
import { ShopsPage } from "./components/ShopsPage";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNavbar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Intro />
              <Info />
              <Shops />
              <Safety />
            </React.Fragment>
          )} />
          <Route path="/stores" component={ShopsPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
