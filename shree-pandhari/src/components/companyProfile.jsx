import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AnimateOnScroll } from "./shared/animation";

import cpImg from "../assets/imgaes/image_sec_2.png";
import mrBorade from "../assets/imgaes/mr.borade.png";
import placeOne from "../assets/imgaes/mrs.borade.png";





const CompanyProfile = () => {

    const directorSlides = [
        { src: mrBorade, name: "Shree. BalaSaheb P. Borade" },
        { src: placeOne, name: "Smt. Savita Balasaheb Borade" },
        { src: mrBorade, name: "Shree. BalaSaheb P. Borade" },
        { src: placeOne, name: "Smt. Savita Balasaheb Borade" },

    ];

    const stats = [
        { no: 720, label: "Satisfied Clients" },
        { no: 140, label: "Projects Completed" },
        { no: 720, label: "Workforce" }
    ];

    return (
        <Container>
            <Row className="d-flex justify-content-between gap-4 gap-lg-0">
                <Col sm={12} lg={4} className="d-none d-lg-block">
                    <AnimateOnScroll>
                        <div className="cp-img">
                            <img src={cpImg} alt="Company Profile" />
                            <div className="est-count">
                                <p className="title2 m-0">Establishment</p>
                                <p className="text-rsone m-0 text-end">2014</p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </Col>
                <Col sm={12} lg={8}>
                    <AnimateOnScroll>
                        <div className="content">
                            <div className="sec-title mb-3">COMPANY PROFILE</div>
                            <h2>Driving Construction Excellence Through Digital Innovation</h2>
                            <p>
                                We are pleased to introduce Shree Pandhari Infrastructure Pvt. Ltd.,
                                formerly known as Borade Builders, an ISO 9001:2014 certified company
                                engaged in civil construction. With 15+ years of experience, we deliver
                                irrigation projects, dams, canals, bridges, highways, and residential &
                                institutional buildings across Maharashtra.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </Col>
                <Col sm={12} lg={7}>
                    <AnimateOnScroll y={80}>
                        <div className="cp-counter">
                            {stats.map((item, index) => (
                                <div key={index} className="d-flex flex-column align-items-center">
                                    <h2 className="counter d-flex align-items-center">
                                        <CountUp start={0} end={item.no} duration={1} />
                                        <b className="m-0">+</b>
                                    </h2>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </Col>
                <Col sm={12} lg={5} className="cp-slider">
                    <AnimateOnScroll y={90}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 40 },
                                1024: { slidesPerView: 1, spaceBetween: 50 },
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {directorSlides.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="d-flex align-items-center justify-content-center position-relative"
                                >
                                    <img src={slide.src} alt={slide.name} />
                                    <div className="director-count">
                                        <p className="m-0">Director</p>
                                        <p className="m-0">{slide.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </AnimateOnScroll>
                </Col>
            </Row>
        </Container>
    );
};

export default CompanyProfile;
