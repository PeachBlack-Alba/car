import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default class images extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="page">
          <Slider
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            dots={true}
          >
            <img className="image" src={image1} alt="image1" />
            <img className="image" src={image2} alt="image2" />
            <img className="image" src={image3} alt="image3" />
          </Slider>
        </div>
      </div>
    );
  }
}
