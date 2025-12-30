import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "../style/about.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AnimateOnScroll } from "./shared/animation";

// import cpImg from "../assets/imgaes/image_sec_2.png";
// import mrBorade from "../assets/imgaes/mr.borade.png";

import aboutImg from "../assets/images/sb_img_2.jpg"

import mrBorade from "../assets/images/mr.borade.png";
import placeOne from "../assets/images/mrs.borade.png";




const AboutUs = () => {



 const directorSlides = [
    {
        src: mrBorade,
        name: "<span>Director</span><br/>Shree. BalaSaheb P. Borade",
    },
    {
        src: placeOne,
        name: "<span>Co. Director</span><br/>Smt. Savita Balasaheb Borade",
    },
];


    const stats = [
        { no: 700, label: "Plots Sold" },
        { no: 150, label: "Projects Completed" },
        { no: 140, label: "Flats Sold" }
    ];

    return (
        <Container>
            <Row className="d-flex justify-content-between gap-4 gap-lg-0">
                <Col sm={12} lg={4} className="d-none d-lg-block">
                    <AnimateOnScroll>
                        <div className="cp-img">
                            <img src={aboutImg} alt="Company Profile" />
                            <div className="est-count">
                                <p className="title2 m-0">Establishment</p>
                                <p className="text-rsone m-0 text-end">
                                    <CountUp start={0} end={2019} duration={2} separator="" />
                                </p>
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
                                SB realtor is actively engaged company in serving as a credible real estate Developers, which is catering to dynamic real estate requirements of the clients. Being a reliable name, we offer top-notch real estate services for buying, sell property, and rental property. A group of skilled and dexterous real estate dealers
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
                                        {/* <p className="m-0">Director</p> */}
                              

                                          <p
            className="director-name m-0"
            dangerouslySetInnerHTML={{ __html: slide.name }}
        />
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

export default AboutUs;
