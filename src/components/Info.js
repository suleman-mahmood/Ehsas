import React, { Component } from "react";
import { Chart } from "react-charts";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export class Info extends Component {
  renderColorfulLegendText(value) {
    return <span style={{ color: "white" }}>{value}</span>;
  }

  state = {};
  render() {
    const data = [
      {
        name: "Jan",
        cases: 50
      },
      {
        name: "Feb",
        cases: 160
      },
      {
        name: "March",
        cases: 500
      },
      {
        name: "April",
        cases: 2000
      },
      {
        name: "May",
        cases: 1800
      }
    ];
    return (
      <div>
        <section className="section section-info">
          <div
            style={{ minHeight: "600px" }}
            className="container primary-color-bg valign-wrapper"
          >
            <div className="row">
              <div
                style={{ marginBottom: "10px" }}
                className="col s12 l5 white-text offset-l2"
              >
                <h4>What is COVID-19?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ut eius laudantium, impedit tenetur laborum id
                  voluptates fugiat cumque, illum quidem. Ducimus, fugiat.
                  Delectus, repellat?
                </p>
                <a
                  href="#"
                  className="btn btn-medium secondary-color-bg black-text"
                >
                  Learn More
                </a>
              </div>
              <div className="col s12 l5 rate-of-growth-graph">
                <div className="center">
                  <h5 className="white-text">Rate of Growth</h5>
                  <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                    <LineChart
                      data={data}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }}
                    >
                      <XAxis stroke="white" dataKey="name" />
                      <YAxis stroke="white" />
                      <Tooltip />
                      <Legend formatter={this.renderColorfulLegendText} />
                      <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Info;
