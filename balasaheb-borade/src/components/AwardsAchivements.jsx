import React, { useEffect, useRef, useState } from 'react'
import image1 from "../assets/images/award-1.png";
import image2 from "../assets/images/award-2.png";
import image3 from "../assets/images/award-3.png";
import { Col, Container, Row } from 'react-bootstrap';
import { EffectFade, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const accordionData = [
  { id: 1, title: "Excellence in Education<br> Support", image: image1 },
  { id: 2, title: "Healthcare Contribution<br> Award", image: image2 },
  { id: 3, title: "Outstanding NGO<br> Transparency Award", image: image3 },
  { id: 4, title: "Excellence in Education<br> Support", image: image1 },
  { id: 5, title: "Healthcare Contribution<br> Award", image: image2 },
  { id: 6, title: "Outstanding NGO<br> Transparency Award", image: image3 }
];

const AwardsAchivements = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Choose wrapper element (motion or div)
  const Wrapper = isMobile ? "div" : motion.div;
  const CardWrapper = isMobile ? "div" : motion.div;

  return (
    <Wrapper
      className='achivement-wrap'
      {...(!isMobile && {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 }
      })}
    >
      <Container className="position-relative">
        <h2 className='intro-title heading-text'>Achievements & Awards</h2>

        {!isMobile && (
          <>
            <button ref={prevRef} className="custom-arrow left">
              <FaChevronLeft />
            </button>

            <button ref={nextRef} className="custom-arrow right">
              <FaChevronRight />
            </button>
          </>
        )}

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          slidesPerView={3}
          navigation={!isMobile ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
          pagination={isMobile ? { clickable: true } : false}
          onInit={(swiper) => {
            if (!isMobile) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            0: { slidesPerView: 1.25 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 }
          }}
        >

          <Row className='flex-md-row gap-2 gap-md-0'>

            {accordionData.map((item) => (
              <SwiperSlide key={item.id}>
                <CardWrapper
                  className='image-wrap'
                  {...(!isMobile && {
                    variants: cardAnim,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, amount: 0.2 }
                  })}
                >
                  <img src={item.image} alt="" />
                  <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                </CardWrapper>
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      </Container>
    </Wrapper>
  )
}

export default AwardsAchivements;
