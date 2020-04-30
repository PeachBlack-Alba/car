import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Navbar from "./navbar";

class landing extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    );
  }
}
export default landing;
