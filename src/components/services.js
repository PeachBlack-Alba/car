import React from "react";
import services1 from "../images/services1.png";
import services2 from "../images/services2.png";
import services3 from "../images/services3.png";
import services4 from "../images/services4.png";
import services5 from "../images/services5.png";

export default function services() {
  return (
    <div>
      <p>So kaufen Sie Ihr Fahrzeug mit der Bank 11</p>
      <div className="containerServices">
        <img className="services1" src={services1} alt="services1" />
        <img className="services2" src={services2} alt="services2" />
        <img className="services3" src={services3} alt="services3" />
        <img className="services4" src={services4} alt="services4" />
        <img className="services5" src={services5} alt="services5" />
      </div>
    </div>
  );
}
