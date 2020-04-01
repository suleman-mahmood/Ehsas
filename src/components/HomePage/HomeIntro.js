import React, { Component } from "react";

export class HomeIntro extends Component {
  render() {
    return (
      <section className="section section-intro">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h3>What is Ehsas?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae provident voluptatum deleniti assumenda, rem earum,
                quia facilis, illum voluptas placeat in perspiciatis laboriosam
                suscipit sit facere labore officia consequuntur aut.
              </p>
              <a
                href="#"
                className="btn btn-large secondary-color-bg primary-color-text"
              >
                Learn More
              </a>
            </div>
            <div className="col s12 m6 center">
              <div className="card">
                <div className="card-content white-text">
                  <span className="card-title primary-color-text">Heading</span>
                </div>
                <div className="card-action">
                  <div className="row">
                    <div className="col m4">
                      <a
                        href="#"
                        className="btn btn-large secondary-color-bg"
                      ></a>
                      <p>Button Text</p>
                    </div>
                    <div className="col m4">
                      <a
                        href="#"
                        className="btn btn-large secondary-color-bg"
                      ></a>
                      <p>Button Text</p>
                    </div>
                    <div className="col m4">
                      <a
                        href="#"
                        className="btn btn-large secondary-color-bg"
                      ></a>
                      <p>Button Text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeIntro;
