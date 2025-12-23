import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Container } from "react-bootstrap";

import logo1 from "../assets/imgaes/equipment3.png"
import logo2 from "../assets/imgaes/equipment2.png"
import logo3 from "../assets/imgaes/equipment3.png"
import logo4 from "../assets/imgaes/equipment4.png"
import logo5 from "../assets/imgaes/equipment2.png"
import logo6 from "../assets/imgaes/equipment4.png"

const equipment = [logo1, logo2, logo3, logo4, logo5, logo6]

export const EquipmentSilder = () => {
    return (
        <Container>
            <div className="equipment-count">
                <div className="se-slider d-flex flex-column flex-md-row align-items-center gap-3">

                    {/* TITLE */}
                    <div className="se-title text-center d-flex align-items-center justify-content-center">
                        <h3 className="title-yel mt-3 mt-md-0">
                            LIST OF <br /> MACHINERY
                        </h3>
                    </div>

                    {/* SWIPER */}
                    <Swiper
                        loop
                        spaceBetween={20}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            320: { slidesPerView: 3 },
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            992: { slidesPerView: 5 },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="equipment-swiper"
                    >
                        {equipment.map((value, i) => (
                            <SwiperSlide className="equipment-card" key={i}>
                                <img src={value} alt={`equipment-${i}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </Container>
    );
};