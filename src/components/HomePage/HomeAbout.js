import React, { Component } from "react";

export class HomeAbout extends Component {
  render() {
    return (
      <div>
        <section className="section section-body">
          <div className="container">
            <div className="row">
              <div className="col m5 s10 primary-color-bg offset-m2 offset-s2">
                <div className="container valign-wrapper bla">
                  <div className="row">
                    <h3 className={"white-text"}>What is COVID-19</h3>
                    <p className={"white-text"}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Temporibus, distinctio eaque tempore eligendi quas optio
                      assumenda repellendus molestiae neque doloribus
                      consequuntur quaerat error, minima totam a? Rerum vitae
                      esse dignissimos cum cupiditate, optio necessitatibus
                      provident, alias sed mollitia deserunt repellat.
                    </p>
                    <a
                      href="#"
                      className="btn btn-large secondary-color-bg primary-color-text"
                    >
                      Something
                    </a>
                  </div>
                </div>
              </div>
              <div className="col m5 s10 primary-color-bg offset-s2">
                <div className="container valign-wrapper bla">
                  <div className="row">
                    <div className="card secondary-color-bg blash valign-wrapper">
                      <div className="card-content primary-color-text">
                        <p className="flow-text">Covid19 Statistics Graph</p>
                      </div>
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

export default HomeAbout;
