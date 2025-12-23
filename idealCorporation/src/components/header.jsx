import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domAnimation } from "motion/react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import * as m from "motion/react-m";

import "swiper/css";
import "swiper/css/effect-fade";

import btnArrow from "../assets/images/button-arrow.png";
import banner1 from "../assets/images/hero_banner_1.png";
import banner2 from "../assets/images/head_bg_2.jpg";
import "../style/heroHeader.scss";

const slides = [
    {
        id: 1,
        bg: banner1,
        title: (<>Leadership in <br /></>),
        spanTitle: "Smart Investing",
        // subtitle: "Stock Market Insights | Wealth Planning | Portfolio Growth | Trading Solutions",
        section:"about"
    },
    {
        id: 2,
        bg: banner2,
        title: (<>Future in <br /></>),
        spanTitle: "Build Solutions",
        // subtitle: "Stock Market Insights | Wealth Planning | Portfolio Growth | Trading Solutions",
        section:"features"
    },
];

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const swiperRef = useRef(null);
    
    const scrollToId = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section className="hero-banner" id="home">
            <Swiper
                effect="fade"
                loop
                allowTouchMove={false}
                modules={[EffectFade]}


                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {slides.map(({ id, bg, title, spanTitle, subtitle, section }, index) => (
                    <SwiperSlide key={id}>
                        <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }}>
                            <Container>
                                <LazyMotion features={domAnimation}>
                                    <m.div
                                        className="hero-contant"
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
                                            {activeIndex === index && (
                                                <Typewriter
                                                    options={{
                                                        delay: 200,
                                                        deleteSpeed: 100,
                                                    }}
                                                    onInit={(typewriter) => {
                                                        typewriter
                                                            .typeString(spanTitle)
                                                            .pauseFor(300)
                                                            .callFunction(() => {
                                                                swiperRef.current.slideNext();
                                                            })
                                                            .start();
                                                    }}
                                                />
                                            )}
                                        </motion.h1>

                                        {/* type */}
                                        <motion.h4
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {subtitle}
                                        </motion.h4>

                                        <motion.a
                                            className="primaryBtn"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                                             onClick={() =>
                                                document
                                                    .getElementById(section)
                                                    ?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        >
                                            Our Services
                                            <motion.div className="pb-circle">
                                                <motion.div className="icon">
                                                    <img src={btnArrow} alt="" />
                                                </motion.div>
                                            </motion.div>
                                        </motion.a>
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
