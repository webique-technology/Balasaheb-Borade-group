import React from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SecTitle } from "./shared/titlteComp";

import evelyn from "../assets/imgaes/placeholder-t.png"
import chris from "../assets/imgaes/placeholder-t.png"
import { AnimateOnScroll } from "./shared/animation";

const testimoniData = [
    {
        src: evelyn,
        desc: "“Choosing Shri Pandhari Infrastructure was the best decision our family ever made. The architecture is modern, the build quality superior, Every day feels like a retreat!”",
        name: "Mr. Rajesh Sharma",
        post: "Homeowner",
    },
    {
        src: chris,
        desc: " The infrastructure is excellent — clean roads, efficient waste management, and uninterrupted power backup. Maintenance staff are always responsive and courteous.",
        name: "Ms. Neha Verma",
        post: "Resident",
    },
    {
        src: evelyn,
        desc: "From the first site visit to handing over the keys, the experience with Shri Pandhari Infrastructure was seamless. The transparency and communication truly set them apart.",
        name: "Mr. Amit Gupta",
        post: "Buyer",
    },
    {
        src: chris,
        desc: "What drew me to SPI was the quality of construction and attention to detail. The apartments are spacious, well-ventilated, and built with premium materials. Highly recommended!",
        name: "Mrs. Priya Rao",
        post: "Family Homeowner",
    },
]

const TestimoniSec = () => {
    return (
        <>
            <div className="testmoni">
                <AnimateOnScroll y={70}>
                    <Container className="position-relative d-flex flex-column align-items-center justify-content-center">
                        <div className="mb-3 mb-md-0">
                            <SecTitle
                                extraClass={"d-none"}
                                heading={"What Community Says ?"}
                            />
                        </div>
                        <div className="testmoni-count">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={40}
                                loop={true}
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
                            <div className="custom-prev position-absolute fs-1 d-none d-md-block"><IoIosArrowBack /></div>
                            <div className="custom-next position-absolute fs-1 d-none d-md-block"><IoIosArrowForward /></div>
                        </div>
                    </Container >
                </AnimateOnScroll>
            </div >
        </>
    )
}


export default TestimoniSec;