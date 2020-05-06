import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import barra1 from "../images/barra1.png";
import barra2 from "../images/barra2.png";
import barra3 from "../images/barra3.png";
import barra4 from "../images/barra4.png";
import barra5 from "../images/barra5.png";

export default class navbar extends Component {
  render() {
    return (
      <Navbar className="nabar" expand="xl" variant="dark" bg="dark">
        {/* <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container> */}
        <Nav>
          {/* <div className="containerNavbar"> */}
          <div className="containerNavbar">
            <div className="navSection">
              <img className="barra" src={barra1} alt="barra1" />
            </div>
            <div className="navSection">
              <img className="barra" src={barra2} alt="barra2" />
            </div>
            <div className="navSection">
              <img className="barra" src={barra3} alt="barra3" />
            </div>
            <div className="navSection">
              <img className="barra" src={barra4} alt="barra4" />
            </div>
            <div className="navSection">
              <img className="barra" src={barra5} alt="barra5" />
            </div>
          </div>
          {/* </div> */}
        </Nav>
      </Navbar>
    );
  }
}
