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

import evelyn from "../assets/images/placeholder-t.png"
import chris from "../assets/images/placeholder-t.png"
import { SecTitle } from "./titleComp";


const testimoniData = [
    {
        src: evelyn,
        desc: "“Thanks to Little Steps Foundation, my son now attends school regularly and has access to nutritious meals. The support has changed our lives — we finally feel hopeful about his future.”",
        name: "Pallavi Jain",
        post: "Founder and CEO",
    },
    {
        src: chris,
        desc: "This NGO has brought smiles to many children in our community. Their health camps and educational classes are making a real difference.",
        name: "Sakshi D",
        post: "Financial Expert",
    },
    {
        src: evelyn,
        desc: "Collaborating with Hope for Kids has strengthened our impact in the region. Together, we’ve reached hundreds of children with vital services.",
        name: "Anupam L",
        post: "Founder and CEO",
    },
    {
        src: chris,
        desc: "What started as a small effort has become a beacon of hope for families — and it’s all because people cared enough to help.",
        name: "Aniket B",
        post: "Financial Expert",
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