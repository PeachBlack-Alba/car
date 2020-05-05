import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import barra1 from "../images/barra1.png";
import barra2 from "../images/barra2.png";
import barra3 from "../images/barra3.png";
import barra4 from "../images/barra4.png";

export default class navbar extends Component {
  render() {
    return (
      <Navbar class="navbar" fixed="top" bg="light" variant="light">
        {/* <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container> */}
        <Nav>
          <div className="containerNavbar">
            <img className="barra1" src={barra1} alt="barra1" />
            <img className="barra2" src={barra2} alt="barra2" />
            <img className="barra3" src={barra3} alt="barra3" />
            <img className="barra4" src={barra4} alt="barra4" />
          </div>
        </Nav>
      </Navbar>
    );
  }
}
