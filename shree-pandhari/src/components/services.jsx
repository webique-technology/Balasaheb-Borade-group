import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Card, Container } from "react-bootstrap";
import { SecTitle } from "./shared/titlteComp";
import { AnimateOnScroll } from "./shared/animation";
import compass from "../assets/imgaes/compass.svg"

const ServicesSlider = () => {

    const servicesData = [
        {
            logo: compass,
            title: "Govt. Contarctor",
            decs: "innovative concepts with functional design",
            // hDesc:""
        },
        {
            logo: compass,
            title: "Leadership in Concrete Solution",
            decs: "Highways, bridges, concrete structure",
            // hDesc:""
        },
        {
            logo: compass,
            title: "Real Estate",
            decs: "Modern interior that improve efficiency & Quality execution",
            // hDesc:""
        },
        {
            logo: compass,
            title: "Land Developers",
            decs: "Smart upgardes expert restoration",
            // hDesc:""
        },
        {
            logo: compass,
            title: "Road Infra",
            decs: "Highways, bridges, concrete structure",
            // hDesc:""
        },
    ]

    return (
        <>
            <Container className="position-relative">
                <AnimateOnScroll y={20} duration={1}>
                    <SecTitle
                        title="Services"
                        heading="Reliable Construction Services for Every Project"
                    />
                </AnimateOnScroll>
                <AnimateOnScroll y={80} duration={1.2}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
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
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 40 },
                            992: { slidesPerView: 3, spaceBetween: 50 },
                            1024: { slidesPerView: 4, spaceBetween: 50 },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {servicesData.map((value, i) => (
                            <SwiperSlide key={i}>
                                <Card className="services-card d-flex gap-4">
                                    <img src={value.logo} alt="" />
                                    <Card.Body className="d-flex flex-column gap-3">
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Text>{value.decs}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </AnimateOnScroll>
                {/* Navigation buttons MUST be outside Swiper */}
                <div className="custom-prev"><FaArrowLeft /></div>
                <div className="custom-next"><FaArrowRight /></div>
            </Container>
        </>
    )
}

export default ServicesSlider;