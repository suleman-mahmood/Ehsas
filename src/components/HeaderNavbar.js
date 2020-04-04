import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import EnglishIcon from "../img/english.png";
import UrduIcon from "../img/urdu.png";

export class HeaderNavbar extends Component {
  componentDidMount() {
    var elemsSelect = document.querySelectorAll("select");
    M.FormSelect.init(elemsSelect, {});
    var instance1 = M.FormSelect.getInstance(elemsSelect[0]);

    document.getElementById("select1").addEventListener("change", e => {
      console.log(instance1.getSelectedValues()[0]);
    });
    instance1.wrapper.style.backgroundColor = "white";

    var instance2 = M.FormSelect.getInstance(elemsSelect[1]);
    document.getElementById("select2").addEventListener("change", e => {
      console.log(instance2.getSelectedValues()[0]);
    });
    instance2.wrapper.style.backgroundColor = "white";

    var elemsNavbar = document.querySelector(".sidenav");
    M.Sidenav.init(elemsNavbar, {});
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="primary-color-bg">
            <div className="container">
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                  Ehsas
                </Link>
                <a
                  href="#"
                  data-target="mobile-nav"
                  className="sidenav-trigger"
                  style={{ marginTop: "8px" }}
                >
                  <li className="material-icons">dehaze</li>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="/stores" className="secondary-color-text">
                      Stores
                    </a>
                  </li>
                  <li>
                    <a href="#search" className="secondary-color-text">
                      Emergency Services
                    </a>
                  </li>
                  <li>
                    <a href="#popular" className="secondary-color-text">
                      Content
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="secondary-color-text">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="secondary-color-text">
                      Contact
                    </a>
                  </li>
                  <li>
                    <div style={{ padding: "5px" }} className="input-field">
                      <select id="select1" className="icons">
                        <option value="urd" data-icon={EnglishIcon}>
                          English
                        </option>
                        <option value="eng" data-icon={UrduIcon}>
                          Urdu
                        </option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <ul className="sidenav primary-color-bg" id="mobile-nav">
          <li>
            <a
              style={{ fontSize: "2rem" }}
              href="#"
              className="white-text brand-logo "
            >
              Ehsas
            </a>
          </li>
          <div className="divider"></div>
          <li>
            <a href="#home" className="secondary-color-text">
              Home
            </a>
          </li>
          <li>
            <a href="#search" className="secondary-color-text">
              Search
            </a>
          </li>
          <li>
            <a href="#popular" className="secondary-color-text">
              Popular Places
            </a>
          </li>
          <li>
            <a href="#gallery" className="secondary-color-text">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="secondary-color-text">
              Contact
            </a>
          </li>
          <li>
            <div
              style={{ marginLeft: "11%", width: "70%" }}
              className="input-field"
            >
              <select id="select2" className="icons">
                <option value="urd" data-icon={EnglishIcon}>
                  English
                </option>
                <option value="eng" data-icon={UrduIcon}>
                  Urdu
                </option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderNavbar;
