import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
import Image1 from "../img/english.png";
import Stores from "../img/stores.png";

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from "react-google-maps";

var defLat = parseFloat(24.8607);
var defLng = parseFloat(67.0011);
var lat = parseFloat(45.383321536272049);
var lng = parseFloat(-75.3372987731628);
var key = 2604;

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 24.8607, defLng: 67.0011 }}
        >
            <Marker key={key} position={{ lat: 45.383321536272049, lng: -75.3372987731628 }} />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class ShopsPage extends Component {
    componentDidMount() {
        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        var instancesDropdown = M.Dropdown.init(elemsDropdown, { hover: true });

        document.getElementById("dropdown1").addEventListener("click", (e) => {
            this.setState({
                calledByStore: 1,
                calledByType: e.target.text,
                showByCatergoryStoresBool: true,
                showAutocompleteStoresSearchesBool: false
            })
        });
        document.getElementById("dropdown2").addEventListener("click", (e) => {
            this.setState({
                calledByStore: 2,
                calledByType: e.target.text,
                showByCatergoryStoresBool: true,
                showAutocompleteStoresSearchesBool: false
            })
        });
        document.getElementById("dropdown3").addEventListener("click", (e) => {
            this.setState({
                calledByStore: 3,
                calledByType: e.target.text,
                showByCatergoryStoresBool: true,
                showAutocompleteStoresSearchesBool: false
            })
        });
        document.getElementById("dropdown4").addEventListener("click", (e) => {
            this.setState({
                calledByStore: 4,
                calledByType: e.target.text,
                showByCatergoryStoresBool: true,
                showAutocompleteStoresSearchesBool: false
            })
        });
        document.getElementById("dropdown5").addEventListener("click", (e) => {
            this.setState({
                calledByStore: 5,
                calledByType: e.target.text,
                showByCatergoryStoresBool: true,
                showAutocompleteStoresSearchesBool: false
            })
        });
        document.getElementById("dropdown6").addEventListener("click", (e) => {
            this.setState({
                calledByStore: 6,
                calledByType: e.target.text,
                showByCatergoryStoresBool: true,
                showAutocompleteStoresSearchesBool: false
            })
        });

        this.fetchStoreTypes();
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
                this.setState({ dataFetched: true });
                this.fetchAllStoresData();
            });
    }

    fetchAllStoresData = () => {
        for (let index = 0; index < this.state.storeTypes.length; index++) {
            this.fetchStore(this.state.storeTypes[index].idStoreType);
        }
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

                var stateName = "stores" + storeID;

                this.setState({
                    [stateName]: types,
                    datafetchedStore: true
                });
                this.addAutoCompleteData();
            });
    }

    showStores = () => {
        if (this.state.datafetchedStore) {
            this.initialiseModal();

            var storeObjs = [];
            var imgUrl = "";
            if (this.state.calledByStore === 1) { storeObjs = this.state.stores1; imgUrl = this.state.storeTypes[0].photourl }
            else if (this.state.calledByStore === 2) { storeObjs = this.state.stores2; imgUrl = this.state.storeTypes[1].photourl }
            else if (this.state.calledByStore === 3) { storeObjs = this.state.stores3; imgUrl = this.state.storeTypes[2].photourl }
            else if (this.state.calledByStore === 4) { storeObjs = this.state.stores4; imgUrl = this.state.storeTypes[3].photourl }
            else if (this.state.calledByStore === 5) { storeObjs = this.state.stores5; imgUrl = this.state.storeTypes[4].photourl }
            else if (this.state.calledByStore === 6) { storeObjs = this.state.stores6; imgUrl = this.state.storeTypes[5].photourl }

            return (
                storeObjs.map((storeObj) => {
                    return (
                        <div className="col s12 l6">
                            <div className="card">
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col m6">
                                            {/* {<div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag1</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag2</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag3</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag4</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag1</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag2</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag3</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag4</a>
                                    </div>} */}
                                            <div className="col s12">
                                                {/* {<div style={{ marginTop: "30px" }} className="divider"></div>} */}
                                                <h4>{storeObj.Name}</h4>
                                                <h5>Address: </h5>
                                                <p>{storeObj.Address}</p>
                                            </div>
                                        </div>
                                        <div style={{ paddingTop: "30px" }} className="col m6 center">
                                            <h5>{storeObj.DistrictName}</h5>
                                            <img style={{ width: "100px" }} className="responsive-img" src={imgUrl} alt="" />
                                            <button data-target="modal1" className="btn btn-small modal-trigger">More Info</button>
                                            <div id="modal1" className="modal">
                                                <div className="modal-content center">
                                                    <h4>Store Name</h4>
                                                    <h4>{storeObj.Address}</h4>
                                                    <h4>{storeObj.Cell}</h4>
                                                    <div className="">{this.showRelatedIconsOfStore()}</div>
                                                    <p>The address is based upon an estimate and may not reflect the actual location of the shop</p>
                                                    {/* {<div className="">{this.showGoogleMaps(storeObj.Latitude, storeObj.Longitude)}</div>} */}
                                                    <a href="https://goo.gl/maps/gtSVNg793yEShHYS6" className="btn btn-large">Open in maps</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }
    };

    initialiseModal = () => {
        var elemsModal = document.querySelectorAll('.modal');
        var instancesModal = M.Modal.init(elemsModal, {});
        console.log("modal:", instancesModal);
    }

    showRelatedIconsOfStore = () => {

    }

    showGoogleMaps = (Latitude, Longitude) => {
        lat = Latitude;
        lng = Longitude;
        defLat = Latitude;
        defLng = Longitude;
        return (
            <div
                style={{ width: "40vw", height: "40vh" }}
            >
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBvNcWVU9APfFP24TrZP6EaI6I7F1PVKX4`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>

        );
    }

    showAutocompleteStores = () => {
        if (this.state.showAutocompleteStoresSearchesBool) {
            return (
                this.state.showAutocompleteStores.map((storeObj) => {
                    var imgUrl = "";

                    if (storeObj.storeType == 1) { imgUrl = this.state.storeTypes[0].photourl }
                    if (storeObj.storeType == 2) { imgUrl = this.state.storeTypes[1].photourl }
                    if (storeObj.storeType == 3) { imgUrl = this.state.storeTypes[2].photourl }
                    if (storeObj.storeType == 4) { imgUrl = this.state.storeTypes[3].photourl }
                    if (storeObj.storeType == 5) { imgUrl = this.state.storeTypes[4].photourl }
                    if (storeObj.storeType == 6) { imgUrl = this.state.storeTypes[5].photourl }

                    return (
                        <div className="col s12 l6">
                            <div className="card">
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col m6">
                                            {/* {<div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag1</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag2</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag3</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag4</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag1</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag2</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag3</a>
                                    </div>
                                    <div className="col s3 m4 l5 xl4">
                                        <a style={{ marginTop: "10px" }} href="#" className="btn btn-small">Tag4</a>
                                    </div>} */}
                                            <div className="col s12">
                                                {/* {<div style={{ marginTop: "30px" }} className="divider"></div>} */}
                                                <h4>{storeObj.Name}</h4>
                                                <h5>Address: </h5>
                                                <p>{storeObj.Address}</p>
                                            </div>
                                        </div>
                                        <div style={{ paddingTop: "30px" }} className="col m6 center">
                                            <h5>{storeObj.DistrictName}</h5>
                                            <img style={{ width: "100px" }} className="responsive-img" src={imgUrl} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }

    }

    addAutoCompleteData = () => {

        var autoData = {};

        for (let index = 0; index < this.state.stores1.length; index++) {
            const element = this.state.stores1[index].Name;
            autoData[element] = null;
        }
        for (let index = 0; index < this.state.stores2.length; index++) {
            const element = this.state.stores2[index].Name;
            autoData[element] = null;
        }
        for (let index = 0; index < this.state.stores3.length; index++) {
            const element = this.state.stores3[index].Name;
            autoData[element] = null;
        }
        for (let index = 0; index < this.state.stores4.length; index++) {
            const element = this.state.stores4[index].Name;
            autoData[element] = null;
        }
        for (let index = 0; index < this.state.stores5.length; index++) {
            const element = this.state.stores5[index].Name;
            autoData[element] = null;
        }
        for (let index = 0; index < this.state.stores6.length; index++) {
            const element = this.state.stores6[index].Name;
            autoData[element] = null;
        }

        var options = {
            data: autoData,
            onAutocomplete: (e) => {
                this.setState({ selectedStore: e })
                this.setSelectedStores(e);
            }
        };

        var elemsAutocomplete = document.querySelectorAll(".autocomplete");
        var instancesAutocomplete = M.Autocomplete.init(elemsAutocomplete, options);
    }

    setSelectedStores(storeName) {
        var showAutocompleteStores = [];

        this.state.stores1.map((store) => {
            if (store.Name === storeName) {
                var newStore = store;
                newStore["storeType"] = 1;
                showAutocompleteStores.push(newStore);
            }
        });
        this.state.stores2.map((store) => {
            if (store.Name === storeName) {
                var newStore = store;
                newStore["storeType"] = 2;
                showAutocompleteStores.push(newStore);
            }
        });
        this.state.stores3.map((store) => {
            if (store.Name === storeName) {
                var newStore = store;
                newStore["storeType"] = 3;
                showAutocompleteStores.push(newStore);
            }
        });
        this.state.stores4.map((store) => {
            if (store.Name === storeName) {
                var newStore = store;
                newStore["storeType"] = 4;
                showAutocompleteStores.push(newStore);
            }
        });
        this.state.stores5.map((store) => {
            if (store.Name === storeName) {
                var newStore = store;
                newStore["storeType"] = 5;
                showAutocompleteStores.push(newStore);
            }
        });
        this.state.stores6.map((store) => {
            if (store.Name === storeName) {
                var newStore = store;
                newStore["storeType"] = 6;
                showAutocompleteStores.push(newStore);
            }
        });

        this.setState({
            showAutocompleteStores,
            showAutocompleteStoresSearchesBool: true,
            showByCatergoryStoresBool: false,
        });

        console.log(this.state.showAutocompleteStores);


    }

    state = {
        storeTypes: [],
        stores1: {},
        stores2: {},
        stores3: {},
        stores4: {},
        stores5: {},
        stores6: {},
        dataFetched: false,
        datafetchedStore: false,
        calledByStore: 0,
        calledByType: "",
        selectedStore: "",
        showAutocompleteStores: [],
        showAutocompleteStoresSearchesBool: false,
        showByCatergoryStoresBool: false,
    }
    render() {
        return (
            <div>
                <section className="section section-stores primary-color-bg">
                    <div className="container">
                        <div style={{ padding: "" }} className="row center">
                            <div className="col s12">
                                <h1 style={{ fontSize: "7rem" }} className="secondary-color-text">
                                    <img style={{ width: "80px" }} className="responsive-img" src={Stores} alt="" />
                                    Stores
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-input center">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div style={{ borderStyle: "solid", borderRadius: "10px" }} className="input-field">
                                    <i className="material-icons prefix">search</i>
                                    <input
                                        type="text"
                                        className="white grey-text autocomplete"
                                        placeholder="Search Store"
                                        id="autocomplete-input"
                                    />
                                </div>
                            </div>
                            <div className="col s4 m3 l2">
                                {this.state.dataFetched && <img className="responsive-img" src={this.state.storeTypes[0].photourl} alt="" />}
                                <a className="dropdown-trigger btn" href="#" data-target="dropdown1">{this.state.dataFetched && this.state.storeTypes[0].Type_2}</a>
                                <ul id="dropdown1" className="dropdown-content">
                                    <li><a href="#">Shops By Area</a></li>
                                    <li><a href="#">Shops Near Me</a></li>
                                </ul>
                            </div>
                            <div className="col s4 m3 l2">
                                {this.state.dataFetched && <img className="responsive-img" src={this.state.storeTypes[1].photourl} alt="" />}
                                <a className="dropdown-trigger btn" href="#" data-target="dropdown2">{this.state.dataFetched && this.state.storeTypes[1].Type_2}</a>
                                <ul id="dropdown2" className="dropdown-content">
                                    <li><a href="#">Shops By Area</a></li>
                                    <li><a href="#">Shops Near Me</a></li>
                                </ul>
                            </div>
                            <div className="col s4 m3 l2">
                                {this.state.dataFetched && <img className="responsive-img" src={this.state.storeTypes[2].photourl} alt="" />}
                                <a className="dropdown-trigger btn" href="#" data-target="dropdown3">{this.state.dataFetched && this.state.storeTypes[2].Type_2}</a>
                                <ul id="dropdown3" className="dropdown-content">
                                    <li><a href="#">Shops By Area</a></li>
                                    <li><a href="#">Shops Near Me</a></li>
                                </ul>
                            </div>
                            <div className="col s4 m3 l2">
                                {this.state.dataFetched && <img className="responsive-img" src={this.state.storeTypes[3].photourl} alt="" />}
                                <a className="dropdown-trigger btn" href="#" data-target="dropdown4">{this.state.dataFetched && this.state.storeTypes[3].Type_2}</a>
                                <ul id="dropdown4" className="dropdown-content">
                                    <li><a href="#">Shops By Area</a></li>
                                    <li><a href="#">Shops Near Me</a></li>
                                </ul>
                            </div>
                            <div className="col s4 m3 l2">
                                {this.state.dataFetched && <img className="responsive-img" src={this.state.storeTypes[4].photourl} alt="" />}
                                <a className="dropdown-trigger btn" href="#" data-target="dropdown5">{this.state.dataFetched && this.state.storeTypes[4].Type_2}</a>
                                <ul id="dropdown5" className="dropdown-content">
                                    <li><a href="#">Shops By Area</a></li>
                                    <li><a href="#">Shops Near Me</a></li>
                                </ul>
                            </div>
                            <div className="col s4 m3 l2">
                                {this.state.dataFetched && <img className="responsive-img" src={this.state.storeTypes[5].photourl} alt="" />}
                                <a className="dropdown-trigger btn" href="#" data-target="dropdown6">
                                    {this.state.dataFetched && this.state.storeTypes[5].Type_2}
                                </a>
                                <ul id="dropdown6" className="dropdown-content">
                                    <li><a href="#">Shops By Area</a></li>
                                    <li><a href="#">Shops Near Me</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                </section>
                <section className="section section-list-shops">
                    <div className="container">
                        <div className="row">
                            {this.showAutocompleteStores()}
                            {this.state.showByCatergoryStoresBool && this.showStores()}
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default ShopsPage;
