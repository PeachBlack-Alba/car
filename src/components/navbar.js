import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import barra from "../images/barra.png";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar sticky="top">
          <img className="navbar" src={barra} alt="navbar" />
        </Navbar>
      </div>
    );
  }
}
