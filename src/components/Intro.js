import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Stores } from "../img/stores.png"

export class Intro extends Component {
  render() {
    return (
      <div>
        <section className="section section-intro valign-wrapper">
          <div className="container">
            <div className="row">
              <div style={{ marginBottom: "20px" }} className="col s12 m6">
                <h3>What is Ehsas?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolorem enim maiores eum veniam modi consequuntur
                  ullam libero magni itaque!
                </p>
                <a
                  href="#"
                  className="btn btn-medium secondary-color-bg primary-color-text"
                >
                  Text link
                </a>
              </div>
              <div className="col s12 m6">
                <div className="card-panel">
                  <div className="center">
                    <h2>Heading</h2>
                  </div>
                  <div className="row center">
                    <div className="col m4">
                      <img className="responsive-img" src={Stores} alt="" />
                      <p>Stores</p>
                    </div>
                    <div className="col m4">
                      <img src="" alt="" />
                      <p>Donations</p>
                    </div>
                    <div className="col m4">
                      <img src="" alt="" />
                      <p>Content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Intro;
