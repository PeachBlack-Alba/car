import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class images extends Component {
  render() {
    return (
      <div className="wrapper">
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          arrows={true}
          focusOnSelect={true}
          className="slider"
        >
          <img className="image" src={image1} alt="image1" />

          <img className="image" src={image2} alt="image2" />

          <img className="image" src={image3} alt="image3" />
        </Slider>
      </div>
    );
  }
}
