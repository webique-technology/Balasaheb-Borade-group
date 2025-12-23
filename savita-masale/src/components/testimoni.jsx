import React from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../style/testimoni.scss"

// import { SecTitle } from "./shared/titleComp/jsx";
// import { AnimateOnScroll } from "./shared/animation";

import evelyn from "../assets/images/evelyn_devin.png"
import chris from "../assets/images/chris_bela.png"
import placeholderImg from"../assets/images/placeholder.jpg"
import { SecTitle } from "./shared/titleComp";

const testimoniData = [
    {
        src: placeholderImg,
        desc: "Nice and quality shop for spices  Rates are better then many shops.",
        name: "Sneha jain",
        // post: "Founder and CEO",
    },
    {
        src: placeholderImg,
        desc: "I had good experiences. I purchased various types of spices, turmeric powder.",
        name: "Kartik B.",
        // post: "Financial Expert",
    },
    {
        src: placeholderImg,
        desc: "EVERY NEED OF KITCHEN U WILL FIND HERE...BEST MASALA ONE SHOP",
        name: "Kunal More",
        // post: "Founder and CEO",
    },
    {
        src: placeholderImg,
        desc: "One of the amazing taste in masala.used several brands but this top our household list.",
        name: "Manisha B.",
        // post: "Financial Expert",
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
                                            <img src={value.src} alt={value.name}/>
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
                        <div className="custom-prev position-absolute fs-1 d-none d-md-block"><IoIosArrowBack /></div>
                        <div className="custom-next position-absolute fs-1 d-none d-md-block"><IoIosArrowForward /></div>
                    </div>
                </Container >
                {/* </AnimateOnScroll> */}
            </div >
        </>
    )
}


export default TestimoniSec;