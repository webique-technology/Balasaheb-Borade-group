import React, { useState, useEffect } from "react";

import HeroBanner from "../components/header";
import Contact from "../components/contact";
import TestimoniSec from "../components/testimoni";
import { StockTypeSlider } from "../components/stockTypeSlider";
import AboutSec from "../components/aboutSec";
import FeatureSec from "../components/featureSec";

import featureEarth from "../assets/images/feature_earth.png"
import { Col, Container, Row } from "react-bootstrap";
import { TitleLeft } from "../components/shared/titleComp";

import truIcon from "../assets/images/true_icon.png"
import TradeVaritey from "../components/tradeVariety";
import CryptoCurrencie from "../components/cryptoCurrency";
// import chooseUSImg from "../assets/images/choose_us_img.png"

const chooseUs = [
    {
        text: "We provide 24/7 service"
    },
    {
        text: "Comprehensive Financial Solutions"
    },
    {
        text: "Transparency & Compliance"
    },
    {
        text: "Long-Term Trust & Value"
    },
]

const IdealCorporationHP = () => {

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

            <section className="stock-type-slider position-relative">
                <StockTypeSlider />
            </section>

            <section className="about-us section-padding" id="about">
                <AboutSec />
            </section>

            <section className="feartue-sec section-padding" id="features">
                <img src={featureEarth} alt="feture-earth" className="feture-earth" />
                <FeatureSec />
            </section>

            <section className="choose-us section-padding">
                <Container>
                    <Row className="choose-row">
                        <Col sm={12} md={10} lg={7}>
                            <div >
                                <h4 className="subTitle">Why Choose Us</h4>
                            </div>
                            <TitleLeft
                                heading={"Profit, Service, Technology, Stability—Traders' Top Choice."}
                                para={"Finding the right forex broker is crucial for a secure and profitable trading experience. We’ve done the hard work for you by reviewing."}
                            />
                            <Row className="row-gap-3">
                                {chooseUs.map((value, i) => {
                                    return (
                                        <Col xs={12} key={i} className="d-flex align-items-center justify-content-start gap-4">
                                            <img src={truIcon} alt="" />
                                            <b>{value.text}</b>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="trade-variety section-padding pb-0">
                <TradeVaritey />
            </section>

            <section className="crypto-cur section-padding" id="services">
                <CryptoCurrencie />
            </section>

            <section className="section-padding d-flex flex-column gap-5" id="testimonials">
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

export default IdealCorporationHP;