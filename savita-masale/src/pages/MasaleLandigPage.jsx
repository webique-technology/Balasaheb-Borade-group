import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";

import { SecTitle } from "../components/shared/titleComp.jsx";
import { AboutSpecialCard } from "../components/shared/cardComp.jsx";
import HeroBanner from "../components/heroBanner.jsx";
import Contact from "../components/contact.jsx";
import TestimoniSec from "../components/testimoni.jsx";
import MasaleAbout from "../components/aboutSec.jsx";
import BestSellrs from "../components/bestSellers.jsx";
import ProductCategory from "../components/productCategory.jsx";
import SpicesMakinProcess from "../components/spicesProcess.jsx";

import specialUsLogo from "../assets/images/special_us_logo.png"


const specialUsData = [
    {
        src: specialUsLogo,
        title: "Pure Ingredients",
        desc: "Made from handpicked spices with no added colours.",
    },
    {
        src: specialUsLogo,
        title: "Authentic Taste",
        desc: "Blended using age-old methods for real flavour.",
    },
    {
        src: specialUsLogo,
        title: "Hygienic Processing",
        desc: "Clean and safe preparation to preserve freshness.",
    },
    {
        src: specialUsLogo,
        title: "Long-Lasting Freshness",
        desc: "Finely ground spices that stay fresh for longer.",
    },
]


export const WhatsAppLink = ({ productName = "Masale & Spices" }) => {
    const phoneNumber = "917745061210";
    const message = encodeURIComponent(`Hello! I'm interested in ${productName}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a href={whatsappUrl} target='blank' className='whatsapp-btn' rel="noopener noreferrer">
            {/* <img
                src={whatsappLogo}
                alt="Chat on WhatsApp"
                style={{ width: "50px", height: "50px" }}
            /> */}
            <FaWhatsapp className='text-light wh-icon' />
        </a>
    );
};


const MasaleLandingPage = () => {

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

            <section className="about section-padding" id="about">
                <MasaleAbout />
            </section>

            <section className="section-padding best-seller text-center" id="best-seller">
                <BestSellrs />
                <div className="strok-text d-none d-lg-block">Premium <span className="strok-yellow">Quality</span> Masalas</div>
            </section>

            <section className="health-herbs">
                <div className="herbs-bg">
                    <Container>
                        <div className="herbs-content">
                            <p className="hh-para">Healthy Herbs</p>
                            <div className="d-flex flex-column align-item-start">
                                <h2 className="mb-3 mb-md-4 maroon">Get <span>10% off</span> On all Spicy & Herbs</h2>
                                <p className="mb-3 mb-md-0">Savita Masale Udyog is a homegrown spice brand offering freshly prepared, authentic Indian masalas made using traditional recipes.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="product-category section-padding" id="product">
                <ProductCategory />
            </section>

            <section className="spices-process position-relative section-padding" id="process">
                <SpicesMakinProcess />
            </section>

            <section className="special-us section-padding position-relative">
                <Container className="d-flex flex-column gap-4 gap-md-5">
                    <SecTitle
                        heading={`What Makes Us Special`}
                        extraClass="maroon"
                    />
                    <Row className="row-gap-4">
                        {specialUsData.map((value, i) => {
                            return (
                                <Col xs={6} md={6} lg={3}>
                                    <AboutSpecialCard
                                        src={value.src}
                                        title={value.title}
                                        desc={value.desc}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>

            <section className="section-padding d-flex flex-column gap-5" id="testimonial">
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

            {/* <a href="https://www.whatsapp.com/" target='blank' className='whatsapp-btn'>
                <FaWhatsapp className='text-light wh-icon' />
            </a> */}
            <WhatsAppLink />

            <button className={showScrollTop ? "scrollTop" : "d-none"} onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        </>
    )
}
export default MasaleLandingPage;