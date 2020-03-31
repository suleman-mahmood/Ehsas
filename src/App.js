import React, { Component } from "react";
import {
  Navbar,
  Card,
  Select,
  Icon,
  NavItem,
  Footer,
  Row
} from "react-materialize";
import "./App.css";

export class App extends Component {
  onLanguageChange = e => {
    console.log(e.nativeEvent.target.options.selectedIndex);
  };

  render() {
    return (
      <div>
        <Navbar
          className={"primary-color-bg"}
          alignLinks="right"
          brand={
            <a className="brand-logo secondary-color-text" href="#">
              Ehsas
            </a>
          }
          centerChildren
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem className={"secondary-color-text"} href="#">
            Link1
          </NavItem>
          <NavItem className={"secondary-color-text"} href="#">
            Link2
          </NavItem>
          <NavItem className={"secondary-color-text"} href="#">
            Link3
          </NavItem>
          <NavItem className={"secondary-color-text"} href="#">
            Link4
          </NavItem>
          <NavItem className={"secondary-color-text"} href="#">
            Link5
          </NavItem>
          <NavItem className={"secondary-color-text"} href="#">
            Link6
          </NavItem>
          <NavItem className={"secondary-color-text"}>
            <Select
              id="select-language"
              multiple={false}
              onChange={this.onLanguageChange}
              options={{
                classes: "",
                dropdownOptions: {
                  alignment: "left",
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  container: null,
                  coverTrigger: false,
                  hover: false,
                  inDuration: 150,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 250
                }
              }}
              value="English"
            >
              <option value="1">English</option>
              <option value="2">Urdu</option>
            </Select>
          </NavItem>
        </Navbar>

        <section className="section section-intro">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h3>What is Ehsas?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae provident voluptatum deleniti assumenda, rem
                  earum, quia facilis, illum voluptas placeat in perspiciatis
                  laboriosam suscipit sit facere labore officia consequuntur
                  aut.
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
                    <span className="card-title primary-color-text">
                      Heading
                    </span>
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
              <div className="col m5 s10 primary-color-bg">
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

export default App;
