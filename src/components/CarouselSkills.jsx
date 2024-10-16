import React, { useState } from 'react'
import Slider from "react-slick";
import javascript from "../assets/img/javascript.svg"
import react from "../assets/img/react.svg"
import sass from "../assets/img/sass.svg"
import typescript from "../assets/img/typescript.svg"
import redux from "../assets/img/redux.svg"
import html from "../assets/img/html.svg"

const CarouselSkills = () => {
    const technologies = [
        { name: 'Sass', logo: sass, percentage: "90%" },
        { name: 'Java Script', logo: javascript, percentage: "80%" },
        { name: 'React', logo: react, percentage: "80%" },
        { name: 'Redux', logo: redux, percentage: "60%" },
        { name: 'Typescript', logo: typescript, percentage: "70%" },
        { name: 'Html', logo: html, percentage: "100%" }
    ];

    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accessibility: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <>
            <div className='container'>
                <div className="carousel-main">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {technologies.map((item, index) => (

                               <div className='d-flex justify-content-center align-items-center flex-column'>
                                 <div className="slider-item d-flex justify-content-center align-items-center flex-column" key={index}>
                                    <img height={60} width={60} style={{ objectFit: "contain" }} src={item.logo} alt={item.name} />
                                    <h5 className='mt-4 fw-bold' style={{ color: "#747779" }}>{item.percentage}</h5>
                                </div>
                                <h5 className='mt-4 fw-bold' style={{color: "#8750F7"}}>{item.name}</h5>
                               </div>


                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselSkills