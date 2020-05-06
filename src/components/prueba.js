import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const photos = [
  {
    id: 1,
    url: "../images/image1.png",
    title: "image1",
    description: "image1",
  },
  {
    id: 2,
    url: "../images/image2.png",
    title: "image2",
    description: "image2",
  },
  {
    id: 3,
    url: "../images/image3.png",
    title: "image3",
    description: "image3",
  },
];

export default class prueba extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };

    return (
      <div className="App" style={{ padding: 24 }}>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="80%" height="400px" src={photo.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
