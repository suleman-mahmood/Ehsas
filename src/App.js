import React, { Component } from "react";
/*import {
  Navbar,
  Card,
  Select,
  Icon,
  NavItem,
  Footer,
  Row
} from "react-materialize";*/
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import HomeIntro from "./components/HomePage/HomeIntro";
import HomeAbout from "./components/HomePage/HomeAbout";
import HomeShops from "./components/HomePage/HomeShops";
import HomeSafetyProtocols from "./components/HomePage/HomeSafetyProtocols";
import Footer from "./components/Footer";

export class App extends Component {
  onLanguageChange = e => {
    console.log(e.nativeEvent.target.options.selectedIndex);
  };

  render() {
    return (
      <div>
        <NavbarComp />
        <HomeIntro />
        <HomeAbout />
        <HomeShops />
        <HomeSafetyProtocols />
        <Footer />
      </div>
    );
  }
}

export default App;
