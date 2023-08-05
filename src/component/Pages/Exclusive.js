import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { discoutProducts } from "../../Utils/product";
import Exclusivefor from "../Layout/Exclusivefor";



export default function Exclusive() {
    const settings = {
        nav: false,
        dots: false,
        infinite: true, // Loop the carousel
        autoplay: true, // Autoplay the carousel
        speed: 1000, // Delay between slides in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        
    };
    return (
        <section className="homeSlide" >
            <Container>
                <Slider {...settings}>
                    {discoutProducts.map((value,index)=>{
                        return(
                            <Exclusivefor
                            key={index}
                            productName={value.productName}
                            imgUrl={value.imgUrl}
                            shortDesc={value.shortDesc}
                            />
                        )
                    })}    
                </Slider>
            </Container>
        </section>
    
    
  )
}
