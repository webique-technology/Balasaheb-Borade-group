import React, { useState, useEffect } from "react";
import HeroBanner from "../components/heroBanner";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
// import { motion } from "framer-motion";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EquipmentSilder } from "../components/equipment";

import CompanyProfile from "../components/companyProfile";
import ServicesSlider from "../components/services";
import { SecTitle } from "../components/shared/titlteComp";


import helmet from "../assets/imgaes/hard_hat.svg"
import belt from "../assets/imgaes/belt.svg"
import boots from "../assets/imgaes/boots.svg"
import sfBackImg from "../assets/imgaes/saftey_img_back.png"
import sf1 from "../assets/imgaes/saftey_equipment_1.png"
import sf2 from "../assets/imgaes/saftey_equipment_2.png"
import sf3 from "../assets/imgaes/saftey_equipment_3.png"
import WorkProjcts from "../components/workProject";
import TestimoniSec from "../components/testmoni";

import { AnimateScrollLeft, AnimateOnScroll, AnimateResponsive } from "../components/shared/animation";

import { PolicySec } from "../components/shared/policySec";
import Contact from "../components/contact";


const vmArray = [
    {
        title: "VISION",
        desc: "To establish Shree Pandhari Infrastructure Pvt. Ltd. as a benchmark in the construction industry by adopting modern technology, delivering uncompromised quality, and exceeding client expectations. ",
        x: 60,
        duration: 1
    },
    {
        title: "MISSION",
        desc: "To deliver high-quality, innovative, and cost-effective infrastructure solutions through advanced engineering, continuous improvement, and a skilled workforce. We are committed to safety, timely execution.",
        x: 70,
        duration: 1
    },
    {
        title: "QUALITY ASSURANCE",
        desc: "To deliver high-quality, innovative, and cost-effective infrastructure solutions through advanced engineering, continuous improvement, and a skilled workforce. We are committed to safety, timely execution.",
        x: 80,
        duration: 1
    },
]

const safteyCard = [
    {
        logo: helmet,
        title: "HELMETS",
        desc: "Provide strong protection against falling objects and site hazards. Ensures worker safety with durable, shock-resistant design.",
    },
    {
        logo: belt,
        title: "BELTS",
        desc: "Secure harnesses designed for safe work at heights and scaffolding.Reduces fall risks and provides stable support during elevated tasks.",
    },
    {
        logo: boots,
        title: "SHOES",
        desc: "Industrial safety shoes with steel-toe protection and anti-slip grip. Prevents injuries and ensures safe movement on rough site surfaces.",
    },
]

export default function ShreePandhariHP() {

    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <>
            <HeroBanner />

            <section className="equipment-count position-relative">
                <EquipmentSilder />
            </section>

            <section className="company-profile section-padding" id="about">
                <CompanyProfile />
            </section>

            <section className="vission-mission">
                <Container>
                    <div className="vm-sec d-flex flex-column align-items-center gap-5 justify-content-center">
                        <AnimateOnScroll y={70}>
                            <SecTitle
                                title={"Vission & Mission"}
                                heading={"Our Purpose & Commitment"}
                            />
                        </AnimateOnScroll>
                        <div className="vm-card-count">
                            {vmArray.map((value, i) => {
                                return (
                                    <AnimateOnScroll y={value.x} duration={value.duration}>
                                        <div className="vm-card" key={i}>
                                            <h4>{value.title}</h4>
                                            <p>{value.desc}</p>
                                        </div>
                                    </AnimateOnScroll>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="services section-padding " id="services">
                <ServicesSlider />
            </section>

            <section className="safety-Equipments position-relative section-padding">
                <Container>
                    <Row className="gap-5 gap-lg-0">
                        <Col sm={12} lg={6} xl={6}>
                            <AnimateResponsive x={-200} y={0} duration={1} className={"sf-card-count"}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="text-center">
                                        Safety <br /> Equipments
                                    </h2>
                                </div>
                                {safteyCard.map((item, i) => (
                                    <div key={i} className="gap-2 gap-md-3 card">
                                        <img src={item.logo} alt={item.title} />
                                        <div className="card-title mb-0 mb-md-2">{item.title}</div>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                ))}
                            </AnimateResponsive>
                        </Col>
                        <Col sm={12} lg={5} xl={6} className="d-none d-lg-block">
                            <div className="sf-img-count gap-5 ps-5 h-100 position-relative d-flex flex-column align-items-center align-items-lg-start justify-content-between">
                                <AnimateResponsive x={-200} duration={1} className={"sf"}>
                                    <img src={sf1} alt="Safety Equipment 1" className="sf-img-1" />
                                </AnimateResponsive>
                                <AnimateResponsive x={-200} duration={1} className={"sf"}>
                                    <img src={sf3} alt="Safety Equipment 2" className="sf-img-2" />
                                </AnimateResponsive>
                                <AnimateResponsive x={-200} duration={1} className={"sf"}>
                                    <img src={sf2} alt="Safety Equipment 3" />
                                </AnimateResponsive>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={sfBackImg} alt="Background" className="sf-back-img" />
            </section>

            <section className="work-projects section-padding" id="portfolio">
                <WorkProjcts />
            </section>

            <section className="community-sec d-flex flex-column gap-5 gap-sm-4 gap-md-5" id="testimonials">
                <TestimoniSec />
                <PolicySec
                    spanT={"Privacy Policy "}
                    mainT={"That Keeps Your Business Safe"}
                    para={"We follow strict quality, safety, and environmental standards to ensure every project is delivered with excellence. No compromise. No shortcuts."}
                />
            </section>

            <section className="contact section-padding" id="contact">
                <Contact />
            </section>

            <section className="map m-0 p-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.8079181332295!2d73.76678379674817!3d19.95361094487302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95f5ba76ff57%3A0x44e1830bb9d40a86!2sWebique%20technology!5e0!3m2!1sen!2sin!4v1764743018672!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>


            <a href="https://www.whatsapp.com/" target='blank' className='whatsapp-btn'>
                <FaWhatsapp className='text-light wh-icon' />
            </a>

            <button className={showScrollTop ? "scrollTop" : "d-none"} onClick={scrollToTop}>
                <FaArrowUp />
            </button>

            {/* <button className="scrollTop"></button> */}

        </>
    );
}

