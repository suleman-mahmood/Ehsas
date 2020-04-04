import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer primary-color-bg">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="secondary-color-text">Footer Content</h5>
                <p className="secondary-color-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  minima corporis voluptate dolore neque necessitatibus rem
                  facere quod et odit!
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="secondary-color-text">Links</h5>
                <ul>
                  <li>
                    <a className="secondary-color-text" href="#!">
                      Stores
                    </a>
                  </li>
                  <li>
                    <a className="secondary-color-text" href="#!">
                      Emergency Services
                    </a>
                  </li>
                  <li>
                    <a className="secondary-color-text" href="#!">
                      Content
                    </a>
                  </li>
                  <li>
                    <a className="secondary-color-text" href="#!">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a className="secondary-color-text" href="#!">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container secondary-color-text">
              © 2020 Ehsas All Rights Reserved
              <a className="secondary-color-text right" href="#!">
                Language
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
