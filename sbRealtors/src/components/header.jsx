import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domAnimation } from "motion/react";
import { motion } from "framer-motion"
import * as m from "motion/react-m";
import btnArrow from "../assets/images/button-arrow.png"
import "../style/heroHeader.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import headerBg1 from "../assets/images/hero_bg_1.png";
import headerBg2 from "../assets/images/hero_bg_2.png";
import headerBg3 from "../assets/images/hero_bg_3.png";

import arrowButton from "../assets/images/button-arrow.png";

import { PrimeryBtn } from "./shared/button";
import { AnimateScrollLeft } from "./shared/animation";
 const iconVariants = {
        hover: { rotate: 0 },
    };
const slides = [
  {
    id: 1,
    bg: headerBg1,
    title: (
      <>
        INNOVATION &  <br /> <span>EXCELLENCE</span>
      </>
    ),
    subtitle: "Real Estate | Land Developers",
    section: "about",
    btntitle: "About us"
  },
  {
    id: 2,
    bg: headerBg2,
    title: (
      <>
        GROWTH &<br /> <span>OPPORTUNITIES</span>
      </>
    ),
    subtitle: "Real Estate | Land Developers",
    section: "services",
    btntitle: "Services"
  },
  {
    id: 3,
    bg: headerBg3,
    title: (
      <>
        STRATEGY &<br /> <span>SUCCESS</span>
      </>
    ),
    subtitle: "Real Estate | Land Developers",
    section: "portfolio",
    btntitle: "Portfolio"
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero-banner" id="home">
      <Swiper
        spaceBetween={0}
        effect="fade"
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper"
      >
        {slides.map(({ id, bg, title, section, btntitle, subtitle }) => (
          <SwiperSlide key={id}>
            <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }}>
              <Container>
                <LazyMotion features={domAnimation}>
                  <m.div
                    key={activeIndex}
                    className="hero-contant d-flex flex-column gap-2 align-items-start justify-content-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <AnimateScrollLeft x={-200} duration={1}>
                      <h1 className="fw-bold mb-3">{title}</h1>
                      <h4>{subtitle}</h4>

                      <motion.button
                        title="Our Services"
                        icon={" "}
                        className="primaryBtn d-none d-md-flex"

                        href="#"

                        onClick={() =>
                          document
                            .getElementById(section)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >

                        {btntitle}

                        <motion.div className="pb-circle">
                                        <motion.div variants={iconVariants} className="icon">
                                            <img src={btnArrow} alt="" />
                                        </motion.div>
                                    </motion.div>


                      </motion.button>

                    </AnimateScrollLeft>
                  </m.div>
                </LazyMotion>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section >
  );
};

export default HeroBanner;

