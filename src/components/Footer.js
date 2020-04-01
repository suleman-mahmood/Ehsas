import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer class="page-footer primary-color-bg">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="secondary-color-text">Footer Content</h5>
              <p class="secondary-color-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                minima corporis voluptate dolore neque necessitatibus rem facere
                quod et odit!
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="secondary-color-text">Links</h5>
              <ul>
                <li>
                  <a className="secondary-color-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="secondary-color-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="secondary-color-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="secondary-color-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container secondary-color-text">
            © 2020 Ehsas All Rights Reserved
            <a class="secondary-color-text right" href="#!">
              Language
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
