import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../style/testimoni.scss"

// import { SecTitle } from "./shared/titleComp/jsx";
// import { AnimateOnScroll } from "./shared/animation";

import prevArrow from "../assets/images/arrowPrev.png"
import nextArrow from "../assets/images/arrowNext.png"

import evelyn from "../assets/images/placeholder-t.png"
import chris from "../assets/images/placeholder-t.png"
import { SecTitle } from "./shared/titleComp.jsx";


const testimoniData = [
    {
        src: evelyn,
        desc: "“Borade Groups stands out for its strong corporate governance and ethical approach. Their transparent processes and disciplined financial strategies have given me complete confidence as an investor.”",
        name: "Rajesh Mehta",
        post: "Senior Investor",
    },
    {
        src: chris,
        desc: "“With over 11 years of experience, Borade Groups delivers well-researched trading and investment solutions. Their compliance-driven approach makes them a reliable long-term partner.”",
        name: "Neha Sharma",
        post: "Market Analyst",
    },
    {
        src: evelyn,
        desc: "“What I value most about Borade Groups is their commitment to transparency and trust. Their investment guidance is clear, structured, and suitable for investors at every level.”",
        name: "Anant Ambani",
        post: "Retail Investor",
    },
    {
        src: chris,
        desc: "“Borade Groups combines deep market knowledge with disciplined financial services. Their research-backed solutions have helped me make informed and confident investment decisions.”",
        name: "Chris Bela",
        post: "Portfolio Client",
    },
]

const TestimoniSec = () => {
    return (
        <>
            <div className="testmoni">
                {/* <AnimateOnScroll y={70}> */}
                <Container className="position-relative d-flex flex-column align-items-center justify-content-center">
                    <SecTitle
                        heading={"What Community Says ?"}
                    />
                    <div className="testmoni-count pt-4">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={40}
                            loop
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, },
                                640: { slidesPerView: 1, },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2, },
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {testimoniData.map((value, i) => (
                                <SwiperSlide
                                    className="testimoni-card d-flex align-items-center justify-content-center"
                                    key={i}
                                >
                                    <div className="test-content">
                                        <p>{value.desc}</p>
                                        <div className="test-img">
                                            <div className="hor-line"></div>
                                            <img src={value.src} alt={value.name} />
                                        </div>
                                        <div className="test-user">
                                            <h5>{value.name}</h5>
                                            <p>{value.post}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Navigation buttons MUST be outside Swiper */}
                        <div className="custom-prev position-absolute fs-1 d-none d-md-block">
                            <img src={prevArrow} alt="" />
                        </div>
                        <div className="custom-next position-absolute fs-1 d-none d-md-block">
                            <img src={nextArrow} alt="" />
                        </div>
                    </div>
                </Container >
                {/* </AnimateOnScroll> */}
            </div >
        </>
    )
}


export default TestimoniSec;