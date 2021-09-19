import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Gallery() {
  return (
    <>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="slide1"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide2"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide3"></div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Gallery;
