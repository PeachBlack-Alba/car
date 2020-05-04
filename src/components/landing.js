import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Navbar from "./navbar";
import Images from "./images";

class landing extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Images></Images>
        <Footer></Footer>
      </div>
    );
  }
}
export default landing;
