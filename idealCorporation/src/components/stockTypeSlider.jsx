import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Col, Container, Row } from "react-bootstrap";

import logo1 from "../assets/images/tradeSlider_1.png"
import logo2 from "../assets/images/tradeSlider_2.png"
import logo3 from "../assets/images/tradeSlider_3.png"
import logo4 from "../assets/images/tradeSlider_4.png"



const tardeSlider = [
    {
        src: logo1,
        title: "Commodity"
    },
    {
        src: logo2,
        title: "Forex"
    },
    {
        src: logo3,
        title: "Bond"
    },
    {
        src: logo4,
        title: "Futures"
    },
    {
        src: logo1,
        title: "Commodity"
    },
    {
        src: logo2,
        title: "Forex"
    },

]

export const StockTypeSlider = () => {
    return (
        <Container>
            <div className="equipment-count">
                <div className="se-slider d-flex flex-column flex-md-row align-items-center gap-3">
                    {/* SWIPER */}
                    <Swiper
                        spaceBetween={20}
                        loop
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            320: { slidesPerView: 3 },
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            992: { slidesPerView: 4 },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="equipment-swiper"
                    >
                        {tardeSlider.map((value, i) => (
                            <SwiperSlide key={i}>
                                <div className="trade-card">
                                    <img src={value.src} alt={`equipment-${i}`} />
                                    <h5>{value.title}</h5>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};