import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { SliderData } from "../Utils/product";
import Sliderformat from "./Layout/Sliderformat";

export default function Mainslider() {
  const settings = {
    nav: false,
    // dots: true,
    infinite: true, // Loop the carousel
    autoplay: true, // Autoplay the carousel
    speed: 1000, // Delay between slides in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    
  };
  return (
    <section className="homeSlide">
      <Container>
        <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <Sliderformat
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
}
