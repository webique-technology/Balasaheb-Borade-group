import React from "react";
import { Container } from "react-bootstrap";
// import { FaArrowUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

import "../style/heroHeader.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import headerBg1 from "../assets/images/hero_bg_1.png";
import headerBg2 from "../assets/images/hero_bg_2.png";
import headerBg3 from "../assets/images/hero_bg_3.png";

import { PrimeryBtn } from "./shared/button";
import { AnimateScrollLeft } from "./shared/animation";

const slides = [
  {
    id: 1,
    bg: headerBg1,
    title: (
      <>
        INNOVATION &  <br /> <span>EXCELLENCE</span>
      </>
    ),
    subtitle: "Govt. Contractor | Real Estate | Land Developers | Road Infra",
  },
  {
    id: 2,
    bg: headerBg2,
    title: (
      <>
        GROWTH &<br /> <span>OPPORTUNITIES</span>
      </>
    ),
    subtitle: "Govt. Contractor | Real Estate | Land Developers | Road Infra",
  },
  {
    id: 3,
    bg: headerBg3,
    title: (
      <>
        STRATEGY &<br /> <span>SUCCESS</span>
      </>
    ),
    subtitle: "Govt. Contractor | Real Estate | Land Developers | Road Infra",
  },
];

const HeroBanner = () => {
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
        className="mySwiper"
      >
        {slides.map(({ id, bg, title, subtitle }) => (
          <SwiperSlide key={id}>
            <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }}>
              <Container>
                <LazyMotion features={domAnimation}>
                  <m.div
                    className="hero-contant d-flex flex-column gap-2 align-items-start justify-content-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <AnimateScrollLeft x={-200} duration={1}>
                      <h1 className="fw-bold mb-3">{title}</h1>
                      <h4>{subtitle}</h4>

                      <PrimeryBtn
                        title="Our Services"
                        icon={" "}
                        btnClass="primaryBtn d-none d-md-flex"
                        href="#"
                        
                      />
                    </AnimateScrollLeft>
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

