import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../style/testimoni.scss"

// import { SecTitle } from "./shared/titleComp/jsx";
// import { AnimateOnScroll } from "./shared/animation";

import prevArrow from "../assets/images/arrowPrev.png"
import nextArrow from "../assets/images/arrowNext.png"


import { SecTitle } from "./shared/titleComp.jsx";

import evelyn from "../assets/images/placeholder-t.png"
import chris from "../assets/images/placeholder-t.png"

const testimoniData = [
  {
    src: evelyn,
    desc: "The agent helped me find Warehouse / Godown with good internet connectivity options spent extra time explaining",
    name: "shekhar",
    post: "",
  },
  {
    src: chris,
    desc: "demonstrated exceptional patience during our 8-month Pathardi Phata, Nashik property search",
    name: "Abhishek Soni",
    post: "",
  },
  {
    src: evelyn,
    desc: "Found a warehouse with office facility and truck loading dock through Big Dream Associates industrial property division",
    name: "Mohammed sohail",
    post: "",
  },
  {
    src: chris,
    desc: "From its medieval origins to the digital era, learn everything there is to know about ubiquitous ipsum passage",
    name: "Chris Bela",
    post: "",
  },
  {
    src: evelyn,
    desc: "The agent from Big Dream Associates spent extra time property papers and legal requirements for first-time buyers",
    name: "Anshika",
    post: "",
  },
]

const TestimoniSec = () => {
  return (
    <>
      <div className="testmoni">
        {/* <AnimateOnScroll y={70}> */}
        <Container className="position-relative d-flex flex-column align-items-center justify-content-center">
          <SecTitle
            heading={"What Community Says ?"}
          />
          <div className="testmoni-count pt-4">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 1500,
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
            <div className="custom-prev position-absolute fs-1 d-none d-md-block">
              <img src={prevArrow} alt="" />
            </div>
            <div className="custom-next position-absolute fs-1 d-none d-md-block">
              <img src={nextArrow} alt="" />
            </div>
          </div>
        </Container >
        {/* </AnimateOnScroll> */}
      </div >
    </>
  )
}


export default TestimoniSec;