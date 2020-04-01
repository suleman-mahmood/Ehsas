import React, { Component } from "react";
import { Navbar, Select, Icon, NavItem } from "react-materialize";

export class NavbarComp extends Component {
  render() {
    return (
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
    );
  }
}

export default NavbarComp;
