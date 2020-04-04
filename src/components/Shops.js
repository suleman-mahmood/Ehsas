import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
import querystring from "querystring";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 24.8607, lng: 67.0011 }}
    >
      <Marker key={131515} position={{ lat: 45.383321536272049, lng: -75.3372987731628 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class Shops extends Component {
  componentDidMount() {
    //this.fetchStoreTypes();
  }

  fetchStoreTypes = () => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d37931c0b3d66b16bc806fa2b5382a57b1585870133");

    var formdata = new FormData();
    formdata.append("op", "getTypes");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://cors-anywhere.herokuapp.com/https://therovecompany.com/Ehsas/GetStores.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        var types = JSON.parse(result);
        this.setState({ storeTypes: types });
        this.fetchAllStoresData();
      });
  }

  fetchStore = (storeID) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d37931c0b3d66b16bc806fa2b5382a57b1585870133");

    var formdata = new FormData();
    formdata.append("op", "getStores");
    formdata.append("id", storeID);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://cors-anywhere.herokuapp.com/https://therovecompany.com/Ehsas/GetStores.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        var types = JSON.parse(result);
        console.log("Types", types);

        var stateName = "stores" + storeID;

        this.setState({
          [stateName]: types
        })
      });
  }

  fetchAllStoresData = () => {
    for (let index = 0; index < this.state.storeTypes.length; index++) {
      this.fetchStore(this.state.storeTypes[index].idStoreType);
    }
  }

  state = {
    storeTypes: [],
    stores1: {},
    stores2: {},
    stores3: {},
    stores4: {},
    stores5: {},
    stores6: {},
  }

  render() {
    /*var formdata = new FormData();
    formdata.append("op", "getTypes");
    axios
      .post("www.https://therovecompany.com/Ehsas/GetStores.php", formdata)
      .then(res => {
        console.log(res.data);
      });*/

    return (
      <div>
        <section className="section">
          <div className="container section-shops primary-color-bg white-text">
            <div className="row">
              <div className="col s12 m10 offset-m1 center">
                <h2>Shops Open in Pakistan</h2>
              </div>
              <div className="col s12 m8">
                <div
                  style={{ width: "40vw", height: "40vh" }}
                  className="google-maps center black-text"
                >
                  <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBvNcWVU9APfFP24TrZP6EaI6I7F1PVKX4`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                  />
                </div>
              </div>
              <div className="col s12 m4">
                <h3>Shops In Your Area?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint atque ullam molestias omnis, maxime, deserunt labore,
                  nisi sit est asperiores! Aliquid possimus dolorem beatae
                  ipsam! Ullam repellat neque eos.
                </p>
                <a
                  href="#"
                  className="btn btn-medium secondary-color-bg black-text"
                >
                  Search Your Area
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Shops;
