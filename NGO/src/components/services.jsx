import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { TitleLeft } from './titleComp'

import plant from "../assets/images/plant.png"
import healthcare from "../assets/images/healthcare.png"
import house from "../assets/images/house.png"
import cow from "../assets/images/cow.png"
import art from "../assets/images/creative-process.png"
import orphanage from "../assets/images/orphanage.png"
import waterDrink from "../assets/images/water.png"
import education from "../assets/images/education.png"
import food from "../assets/images/diet.png"
import sports from "../assets/images/sports.png"
import skill from "../assets/images/mindset.png"
import waterResources from "../assets/images/water-resources.png"


const serviceData = [
    {
        src: plant, // 🌾
        title: "Agriculture & Allied Activities",
        para: "Promoting sustainable farming practices, farmer awareness programs, and agricultural development.",
        color: "#2E7D32",
    },
    {
        src: cow, // 🐄
        title: "Animal Husbandry, Dairying & Fisheries",
        para: "Supporting livestock care, dairy development, and fisheries to enhance rural income.",
        color: "#8D6E63",
    },
    {
        src: art, // 🎨
        title: <>Art & <br /> Culture</>,
        para: "Preserving local traditions, folk art, and cultural heritage through community programs.",
        color: "#E97422",
    },
    {
        src: orphanage, // 👶
        title: "Child Welfare & Development",
        para: "Ensuring education, nutrition, health, and holistic development of children.",
        color: "#F06292",
    },
    {
        src: waterDrink, // 💧
        title: "Drinking Water & Sanitation",
        para: "Improving access to clean drinking water and promoting hygiene and sanitation practices.",
        color: "#039BE5",
    },
    {
        src: education, // 📘
        title: <>Education & <br /> Literacy</>,
        para: "Promoting literacy, digital education, and learning opportunities for all age groups.",
        color: "#1A73A7",
    },
    {
        src: food, // 🏭
        title: "Food Processing & Rural Industries",
        para: "Encouraging food processing units and value addition to agricultural produce.",
        color: "#F9A825",
    },
    {
        src: healthcare, // 🏥
        title: "Health & Family Welfare",
        para: "Conducting health camps, awareness programs, and family welfare initiatives.",
        color: "#C01729",
    },
    {
        src: house, // 🌱
        title: "Rural Development & Poverty Alleviation",
        para: "Enhancing livelihoods through self-help groups and rural development programs.",
        color: "#388E3C",
    },
    {
        src: sports, // ⚽
        title: "Sports & Youth Development",
        para: "Encouraging sports activities and youth leadership for physical and mental growth.",
        color: "#1976D2",
    },
    {
        src: skill, // 🛠️
        title: "Vocational Training & Skill Development",
        para: "Providing skill-based training to improve employability and entrepreneurship.",
        color: "#FB8C00",
    },
    {
        src: waterResources, // 💦
        title: "Water Resources & Conservation",
        para: "Promoting rainwater harvesting, water conservation, and sustainable water management.",
        color: "#0288D1",
    },
];


const ServicesSec = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <Container>
                <TitleLeft heading={"What We Do"} />
                <Row className="services-card-count">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
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
                            320: { slidesPerView: 2, spaceBetween: 0 },
                            640: { slidesPerView: 2, spaceBetween: 30 },
                            768: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {serviceData.map(({ color, title, src, para }, index) => (
                            <Col>
                                <SwiperSlide>
                                    <div
                                        className="services-card"
                                        style={{ borderColor: color, boxShadow: hoveredIndex === index ? `${color} 0px 2px 8px 0px` : " " }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div
                                            className="card-top"
                                            style={{
                                                backgroundColor: hoveredIndex === index ? color : " ",
                                                transition: "background-color 0.2s ease",
                                            }}
                                        >
                                            <img src={src} alt={title} />
                                        </div>
                                        <div className="card-body">
                                            <b className='mb-1'>{title}</b>
                                            <p className="uppercase d-none d-md-block">{para}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Col>
                        ))}

                    </Swiper>
                </Row>
            </Container>
        </>
    )
}

export default ServicesSec;
