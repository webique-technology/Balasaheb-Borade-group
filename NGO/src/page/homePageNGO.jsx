import React, { useState, useEffect } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import HeroBanner from "../components/heroHeader.jsx";
import Contact from "../components/contact.jsx";
import TestimoniSec from "../components/testimoni.jsx";
import AboutUsSec from "../components/aboutUs.jsx";
import { TitleLeft } from "../components/titleComp.jsx";
import { Col, Container, Row } from "react-bootstrap";

import CountUp from "react-countup";

import countIMG1 from "../assets/images/count_img_1.png"
import countIMG2 from "../assets/images/count_img_2.png"
import countIMG3 from "../assets/images/count_img_3.png"
import WorkSec from "../components/workSec.jsx";
import DonationSec from "../components/donation.jsx";
import CausesSec from "../components/causesSec.jsx";

import evelynDevin1 from "../assets/images/chairman.png"
import evelynDevin2 from "../assets/images/placeholder.png"
import crisBela1 from "../assets/images/placeholder.png"
import crisBela2 from "../assets/images/placeholder.png"
import ServicesSec from "../components/services.jsx";


const countUpData = [
    {
        countEnd: "15586",
        countColor: "#C01729",
        src: countIMG1,
        name:"Skilled Youth"
    },
    {
        countEnd: "8265",
        countColor: "#E97422",
        src: countIMG2,
        name:"Children Beneficiaries"
    },
    {
        countEnd: "4568",
        countColor: "#1A73A7",
        src: countIMG3,
        name:"Women Health awareness"
    },
]

const teamData = [
    {
        src: evelynDevin1,
        name: "Balasaheb Borade",
        post: "Founder and CEO"
    },
    {
        src: crisBela1,
        name: "Savita Balasaheb Borade",
        post: "Financial Expert"
    },
    {
        src: evelynDevin2,
        name: "name of person",
        post: "Founder and CEO"
    },
    {
        src: crisBela2,
        name: "name of person",
        post: "Financial Expert"
    },
]

const HomePageNGO = () => {


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

    // const serviceCradStyle = {}

    return (
        <>

            <HeroBanner />

            <section className="about-us section-padding" id="about">
                <AboutUsSec />
            </section>

            <section className="our-services section-padding" id="services">
                <ServicesSec />
            </section>

            <section className="count-up section-padding">
                <Container>
                    <Row className="row-gap-3">
                        {countUpData.map(({ countColor, countEnd, src, name }) => {
                            return (
                                <Col xs={12} sm={4} md={4}>
                                    <div className="count-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-lg-4"
                                        style={{ background: `${countColor}` }}
                                    >
                                        <div className="count-img">
                                            <img src={src} alt="" />
                                        </div>
                                        <div className="d-flex text-center text-md-start flex-column">
                                            <CountUp end={countEnd} start={0} duration={3} />
                                            <p>{name}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>

            <section className="our-work section-padding">
                <WorkSec />
            </section>

            <section className="donation section-padding" id="donate">
                <DonationSec />
            </section>


            <section className="causes-sec section-padding" id="goals">
                <CausesSec />
            </section>

            <section className="team section-padding">
                <Container>
                    <div className="titleRound mb-3">
                        Team & Expert
                    </div>
                    <TitleLeft
                        heading={"Meet Our Leadership Team"}
                    />





                    <Row className="row-gap-3">
                        {teamData.map((value, i) => {
                            return (
                                <Col xs={6} md={3} lg={3}>
                                    <div className="team-lead-card d-flex flex-column align-items-center justify-content-center gap-2">
                                        <img src={value.src} alt="" className="img-fluid" />
                                        <b>{value.name}</b>
                                        <p>{value.post}</p>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>

            <section className="section-padding d-flex flex-column gap-5" id="testimoni">
                <TestimoniSec />
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
                // referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </section>

            <a href="https://www.whatsapp.com/" target='blank' className='whatsapp-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
            </a>

            <button className={showScrollTop ? "scrollTop" : "d-none"} onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                </svg>
            </button>
        </>
    )
}

export default HomePageNGO;