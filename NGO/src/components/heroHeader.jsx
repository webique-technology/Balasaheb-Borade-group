import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { FaArrowUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domAnimation } from "motion/react";
import { motion } from "framer-motion"
import * as m from "motion/react-m";
import NavigationBar from "./navbar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style/heroHeader.scss";

import heart from "../assets/images/heart.png"
import insta from "../assets/images/top_insta.png"
import facebook from "../assets/images/top_fb.png"
import linkedin from "../assets/images/top_linkedin.png"
import twitter from "../assets/images/top_twitter.png"
// import { SecondaryBtn } from "./shared/button";

import banner1 from "../assets/images/ngo_banner_1.png"

const slides = [
    {
        id: 1,
        bg: banner1,
        title: (
            <>
                Together, We Can Change<br />Lives
            </>
        ),
        subtitle: (
            <>
                Improving the well-being of communities through child support, <br /> health awareness, and long-term empowerment projects.
            </>
        ),
    },
    {
        id: 2,
        bg: banner1,
        title: (
            <>
                Together, We Can Change<br />Lives
            </>
        ),
        subtitle: (
            <>
                Improving the well-being of communities through child support, <br /> health awareness, and long-term empowerment projects.
            </>
        ),
    },
];

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="hero-banner pt-3 pt-lg-0" id="home">
            <div className="top-bar py-2 d-none d-lg-block">
                <div className="container-xxl">
                    <Row>
                        <Col sm={12} md={6} className="d-flex align-items-center gap-3">
                            <img src={heart} alt="" />
                            <p>Are you ready to help them? Let's become a volunteers</p>
                        </Col>
                        <Col sm={12} md={6} className="d-flex align-items-center justify-content-end gap-3">
                            <p>Follow us</p>
                            <img src={insta} alt="" />
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={twitter} alt="" />
                        </Col>
                    </Row>
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                effect="fade"
                loop
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{ clickable: true }}
                modules={[EffectFade, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {slides.map(({ id, bg, title, subtitle }) => (
                    <SwiperSlide key={id}>
                        <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }}>
                            <Container className="position-relative">
                                <LazyMotion features={domAnimation}>
                                    <m.div
                                        key={activeIndex}
                                        className="hero-contant text-center"
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <motion.h1
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                                        >
                                            {title}
                                        </motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                                        >
                                            {subtitle}
                                        </motion.p>
                                        {/* <motion.a
                                            className="secondryBtn"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                                        >
                                            Read More
                                        </motion.a> */}
                                    </m.div>
                                </LazyMotion>
                            </Container>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroBanner;

