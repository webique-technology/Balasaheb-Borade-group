import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'



import HeroBanner from "../components/header.jsx"
import TestimoniSec from "../components/testimoni.jsx"
import Contact from '../components/contact.jsx'
import AboutUs from '../components/about.jsx'
import { AnimateOnScroll } from '../components/shared/animation.jsx'
import { SecTitle } from '../components/shared/titleComp.jsx'
import ServicesSec from '../components/services.jsx'
import OurValuesSec from "../components/ourValues.jsx"
import WorkProjects from "../components/projectTab.jsx"


import speImg1 from "../assets/images/special_1.png"
import speImg2 from "../assets/images/special_2.png"
import speImg3 from "../assets/images/special_3.png"
import speImg4 from "../assets/images/special_4.png"

const vmArray = [
  // {
  //   title: "VISION",
  //   desc: "To establish Shree Pandhari Infrastructure Pvt. Ltd. as a benchmark in the construction industry by adopting modern technology, delivering uncompromised quality, and exceeding client expectations. ",
  //   x: 60,
  //   duration: 1
  // },
  // {
  //   title: "MISSION",
  //   desc: "To deliver high-quality, innovative, and cost-effective infrastructure solutions through advanced engineering, continuous improvement, and a skilled workforce. We are committed to safety, timely execution.",
  //   x: 70,
  //   duration: 1
  // },
  //   {
  //   title: "QUALITY ASSURANCE",
  //   desc: "To deliver high-quality, innovative, and cost-effective infrastructure solutions through advanced engineering, continuous improvement, and a skilled workforce. We are committed to safety, timely execution.",
  //   x: 80,
  //   duration: 1
  // },
  {
    title: "VISION",
    desc: "SB realtors phenomenal real estate organization in Nashik. The company is actively engaged in serving as a credible real estate Develope...",
    x: 60,
    duration: 1
  },
  {
    title: "MISSION",
    desc: "Being a reliable name, we offer top-notch real estate services for buying property, sell property, and rental property. A group of skilled and dextero...",
    x: 70,
    duration: 1
  },
  {
    title: "Values",
    desc: "Located in Nashik (Maharashtra, India), SB realtors is owned by Mr. Balasaheb Borade. He has handled all the major company operations well an...",
    x: 80,
    duration: 1
  },
]

const specilisationData = [
  {
    src: speImg1,
    title: "Trust Built Over Decades",
    desc: "Coming up with the perfect design through comprehensive research and insightful.",
  },
  {
    src: speImg2,
    title: "Transparency at Every Step",
    desc: "We extend assistance in propounding decor that complements created spaces.",
  },
  {
    src: speImg3,
    title: "Unwavering Reliability",
    desc: "We believe in creating spaces that are developed with the utmost care for our",
  },
  {
    src: speImg4,
    title: "Growing Together",
    desc: "A dedicated specialized team handles all the types of land acquisition processes.",
  },
]



const HomePageSB = () => {


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

      <section className='about section-padding' id='about'>
        <AboutUs />
      </section>

      <section className="vission-mission">
        <Container>
          <div className="vm-sec d-flex flex-column align-items-center gap-5 justify-content-center">
            <AnimateOnScroll y={70}>
              <div className="d-flex flex-column align-items-center gap-3">
                <div className='sec-title px-4'>
                  <p className='m-0'>Vision & Mission</p>
                </div>
                <SecTitle
                  title={"Vission & Mission"}
                  heading={"Our Purpose & Commitment"}
                />
              </div>
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

      <section className='services py-3 py-md-5' id='services'>
        <ServicesSec />
      </section>

      <section className="our-value section-padding">
        <OurValuesSec />
      </section>

      <section className="work-projects section-padding" id='portfolio'>
        <WorkProjects />
      </section>


      <section className='specilisation section-padding'>
        <Container>
          <Row className='row-gap-5 justify-content-between pb-5 spe-row'>
            <Col sm={12} className='d-flex align-items-center flex-column justify-content-center'>
              <div className='mb-2'>
                <p className='m-0 sec-title px-5 py-1'>Specilisation</p>
              </div>
              <SecTitle
                heading={"WHY CHOOSE US"}
              />
            </Col>
            {specilisationData.map((value, i) => {
              return (
                <Col sm={12} md={6} lg={5} key={i}>
                  <div className={`spe-card card${i + 1} d-flex align-items-start align-items-md-center justify-content-start gap-4`}>
                    <img src={value.src} alt="" />
                    <div className=''>
                      <h4>{value.title}</h4>
                      <p className='m-0'>{value.desc}</p>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>

      <section className="testimoni section-padding">
        <TestimoniSec />
      </section>
      <section className='contact section-padding' id='contact'>
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

export default HomePageSB;
