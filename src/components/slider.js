import React, { Component } from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default class slider extends Component {
  render() {
    return (
      <div class="wrapper">
        <section id="section1">
          <a href="#section3" class="arrow__btn">
            ‹
          </a>
          <div class="item">
            <img src={image1} alt="firstImage" />
          </div>
          <a href="#section2" class="arrow__btn">
            ›
          </a>
        </section>
        <section id="section2">
          <a href="#section1" class="arrow__btn">
            ‹
          </a>
          <div class="item">
            <img src={image2} alt="secondImage" />
          </div>
          <a href="#section3" class="arrow__btn">
            ›
          </a>
        </section>
        <section id="section3">
          <a href="#section2" class="arrow__btn">
            ‹
          </a>
          <div class="item">
            <img src={image3} alt="thirdImage" />
          </div>

          <a href="#section1" class="arrow__btn">
            ›
          </a>
        </section>
      </div>
    );
  }
}
