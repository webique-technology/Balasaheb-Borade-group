import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domAnimation } from "motion/react";
import { motion } from "framer-motion";
import * as m from "motion/react-m";

import "swiper/css";
import "swiper/css/effect-fade";

import "../style/header.scss";

import banner1 from "../assets/images/savita_masale_banner.jpeg";
import banner2 from "../assets/images/bg_savitamasal.jpeg";

const slides = [
    {
        id: 1,
        bg: banner1,
        title: (
            <>
                Taste That <br /> Speaks for <span>Itself</span>
            </>
        ),
        section: "best-seller",
        btnTitle: "Best Sellers",
    },
    {
        id: 2,
        bg: banner2,
        title: (
            <>
                Authentic Taste <br /> <span>of Maharashtra</span>
            </>
        ),
        section: "product",
        btnTitle: "View Categories",
    },
];

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="hero-banner" id="home">
            <Swiper
                effect="fade"
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {slides.map(({ id, bg, title, section, btnTitle }) => (
                    <SwiperSlide key={id}>
                        <div
                            className="hero-bg"
                            style={{ backgroundImage: `url(${bg})` }}
                        >
                            <Container className="position-relative">
                                <LazyMotion features={domAnimation}>
                                    <m.div
                                        key={activeIndex}
                                        className="hero-contant text-center mt-5 mt-md-0"
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <motion.h1
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                ease: "easeOut",
                                                delay: 0.2,
                                            }}
                                        >
                                            {title}
                                        </motion.h1>

                                        <motion.button
                                            className="secondryBtn"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                ease: "easeOut",
                                                delay: 0.5,
                                            }}
                                            onClick={() =>
                                                document
                                                    .getElementById(section)
                                                    ?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        >
                                            {btnTitle}
                                        </motion.button>
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
