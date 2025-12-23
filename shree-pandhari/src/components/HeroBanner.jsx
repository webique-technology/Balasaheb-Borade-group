import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domAnimation } from "motion/react";
import { motion } from "framer-motion"
import * as m from "motion/react-m";

import "../style/heroBanner.scss";
import "swiper/css";
import "swiper/css/effect-fade";

import headerBg1 from "../assets/imgaes/build_go_headbanner.png";
import headerBg2 from "../assets/imgaes/header_back_2.jpg";

import { PrimeryBtn } from "./button";
import { AnimateScrollLeft } from "./shared/animation";

const slides = [
    {
        id: 1,
        bg: headerBg1,
        title: (
            <>
                Leadership in <br /> <span>Concrete Solutions</span>
            </>
        ),
        subtitle: "Govt. Contractor | Real Estate | Land Developers | Road Infra",
        btnTitle: "Our Services",
        section: "services",
    },
    {
        id: 2,
        bg: headerBg2,
        title: (
            <>
                Future in <br /> <span>Build Solutions</span>
            </>
        ),
        subtitle: "Govt. Contractor | Real Estate | Land Developers | Road Infra",
        btnTitle: "Our Projects",
        section: "portfolio",
    },
];

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // console.log("header activeindex:", activeIndex);


    return (
        <section className="hero-banner" id="home">

            <Swiper
                effect="fade"
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {slides.map(({ id, bg, title, section, subtitle, btnTitle }) => (
                    <SwiperSlide key={id}>
                        <div
                            className="hero-bg"
                            style={{ backgroundImage: `url(${bg})` }}
                        >
                            <Container className="position-relative">
                                <LazyMotion features={domAnimation}>
                                    <m.div
                                        key={activeIndex}
                                        className="hero-contant d-flex flex-column gap-2 align-items-start justify-content-center"
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
                                            className="m-0 mb-md-2"
                                        >
                                            {title}
                                        </motion.h1>

                                        <motion.h4
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                ease: "easeOut",
                                                delay: 0.2,
                                            }}
                                            className="mb-0 mb-md-2"
                                        >
                                            {subtitle}
                                        </motion.h4>

                                        <motion.button
                                            className="primaryBtn"
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
                                            <motion.div className="pb-circle">
                                                <motion.div className="icon">
                                                    <FaArrowUp />
                                                </motion.div>
                                            </motion.div>
                                        </motion.button>
                                    </m.div>
                                </LazyMotion>
                            </Container>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* <Swiper
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
                {slides.map(
                    ({ id, bg, title, subtitle, btnTitle, section }) => (
                        <SwiperSlide key={id}>
                            {({ isActive }) => (
                                <div
                                    className="hero-bg"
                                    style={{ backgroundImage: `url(${bg})` }}
                                >
                                    <Container>
                                        <LazyMotion features={domAnimation}>
                                            <m.div
                                                className="hero-contant d-flex flex-column gap-2 align-items-start justify-content-center"
                                                initial={{ x: 100, opacity: 0 }}
                                                animate={
                                                    isActive
                                                        ? { x: 0, opacity: 1 }
                                                        : { x: 100, opacity: 0 }
                                                }
                                                transition={{ duration: 0.8 }}
                                            >
                                                <AnimateScrollLeft x={-200} duration={1}>
                                                    <h1 className="fw-bold mb-3">{title}</h1>
                                                    <h4>{subtitle}</h4>

                                                    <PrimeryBtn
                                                        title={btnTitle}
                                                        icon={<FaArrowUp />}
                                                        btnClass="primaryBtn"
                                                        onClick={() =>
                                                            document
                                                                .getElementById(section)
                                                                ?.scrollIntoView({ behavior: "smooth" })
                                                        }
                                                    />
                                                </AnimateScrollLeft>
                                            </m.div>
                                        </LazyMotion>
                                    </Container>
                                </div>
                            )}
                        </SwiperSlide>
                    )
                )}
            </Swiper> */}
        </section>
    );
};

export default HeroBanner;
