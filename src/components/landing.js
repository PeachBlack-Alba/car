import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Navbar from "./navbar";
// import Images from "./images";
import Services from "./services";
import Prueba from "./prueba";

class landing extends Component {
  render() {
    return (
      <div>
        <Services></Services>
        <Navbar></Navbar>
        {/* <Images></Images> */}
        <Prueba></Prueba>
        <Footer></Footer>
      </div>
    );
  }
}
export default landing;
