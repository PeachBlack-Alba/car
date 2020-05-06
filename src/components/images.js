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

    const data = [
      {"id":"1",  "src={image1}"}
    ]
    return (
      <div className="appWrapper">
        <div className="carousel-container">
          <Slider
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={true}
            arrows={true}
            focusOnSelect={true}
            className="carousel-img"
          >
            <img className="carousel-img" src={image1} alt="image1" />

            <img className="carousel-img" src={image2} alt="image2" />

            <img className="carousel-img" src={image3} alt="image3" />
          </Slider>
        </div>
      </div>
    );
  }
}
