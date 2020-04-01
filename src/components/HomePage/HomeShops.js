import React, { Component } from "react";
import Section from "react-materialize/lib/Section";

export class HomeShops extends Component {
  render() {
    return (
      <Section className="section section-shops">
        <div className="container primary-color-bg">
          <div className="row">
            <div className="col s12 m12 center">
              <h1>Shops Open in Pakistan</h1>
            </div>
            <div className="col xl10 s12">
              <div
                style={{ paddingTop: "100px" }}
                className="container bla white center"
              >
                <h3>Google Maps</h3>
                <h3>Shops Open During Lockdown</h3>
                <h3>(Static Data)</h3>
              </div>
            </div>
            <div
              style={{ paddingBottom: "20px", paddingRight: "10px" }}
              className="col xl2 s10 offset-s1"
            >
              <h4>Shops in Your Area?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt dolor exercitationem qui distinctio totam illum,
                laboriosam ipsam, aliquam possimus doloremque excepturi, quia
                repellendus eos fugiat. Atque autem ratione, pariatur dolores
                iure ab dolorum eveniet consequuntur quos molestias velit at
                illo obcaecati exercitationem iusto quia similique qui? Sunt
                aliquid in sit.
              </p>
              <a href="#" className="btn">
                SearchShops
              </a>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HomeShops;
