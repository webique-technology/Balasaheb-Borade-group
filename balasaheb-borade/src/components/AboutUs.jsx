import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import abt1 from "../assets/images/borade _about_img_1.png";
// import abt2 from "../assets/images/aboutus-2.svg";
import abt2 from "../assets/images/borade _about_img_2.png";
import abt3 from "../assets/images/aboutus-3.svg";
import CountUp from "react-countup";
import buttoArr from '../assets/images/button-circle.svg';
import { FiUsers } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Link } from "react-router-dom";

import groupCompany from "../assets/images/group-of-company.avif"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const slideLeft = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const slideRight = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutUs = ({
  showStoryButton = true,
  showFirstImg = true,
  showCards = true,
  showBottomBackground = true,
  showBackground = true,
  className = ""
}) => {

  const isMobile = window.innerWidth <= 768;
  const aboutData = {
    smallText: "Who we are",
    titleAbout: "A Leading Force in Ethical and Impact-Driven Business Growth",
    paragraph:
      "Balasaheb Pandarinath Borade has 11 years in corporate governance. Holds Director and Designated Partner roles. Currently with 5 companies, including Sb Realtors and Shree Pandhari Infrastructures Private Limited. Engaged in General Business. Contributes to corporate operations.",
    // firstCard: {
    //   small: "global reach",
    //   smallImg: HiOutlineBuildingOffice2,
    //   number: 85,
    //   title: "offices <br> worldwide"
    // },
    // secondCard: {
    //   small: "local expertise",
    //   smallImg: FiUsers,
    //   number: 150,
    //   title: "Employees <br> Working"
    // },
    firstCard: {
      small: "Total Firms",
      smallImg: HiOutlineBuildingOffice2,
      number: 5,
      title: "Total Firms"
    },
    secondCard: {
      small: "Experience",
      smallImg: FiUsers,
      number: 11,
      title: "Experience"
    },
    images: [
      { id: 1, src: abt1, name: "about-1" },
      { id: 2, src: groupCompany, name: "about-2" },
      { id: 3, src: abt3, name: "about-3" }
    ],
    imageMap: {
      coluOne: "about-1",
      coluTwo: "about-2",
      coluThree: "about-3"
    }
  };

  const getImage = (name) =>
    aboutData.images.find((img) => img.name === name)?.src;

  const FirstIcon = aboutData.firstCard.smallImg;
  const SecondIcon = aboutData.secondCard.smallImg;

  return (
    <>
      <div
        className="about-section">

        {/* MAIN WRAPPER WITH SCROLL ANIMATION */}
        <motion.div
          className="company-section"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Container>
            <Row>
              {/* LEFT IMAGE + BUTTON */}
              {showStoryButton && (
                <Col md={3} className="no-mobile mb-4 d-none d-lg-block">
                  <motion.img
                    src={getImage(aboutData.imageMap.coluOne)}
                    alt=""
                    className="img-fluid"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  />

                  <motion.div
                    variants={isMobile ? {} : fadeUp}
                    initial={isMobile ? "visible" : "hidden"}
                    whileInView={isMobile ? "visible" : "visible"}
                    viewport={{ once: false }}
                  >
                    <Link to="/about" className="common-button about-button d-none d-lg-block">
                      Our Story <img src={buttoArr} alt="button arrow" />
                    </Link>
                  </motion.div>
                </Col>
              )}

              <Col md={12} xs={12} lg={9} xl={9}>
                {/* SMALL TEXT */}
                <motion.h5
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                >
                  {aboutData.smallText}
                </motion.h5>

                {/* TITLE */}
                <motion.h2
                  className="intro-title heading-text mb-2"
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                >
                  {aboutData.titleAbout}
                </motion.h2>

                <Row>
                  {/* SECOND IMAGE */}
                  <Col md={6}>
                    <motion.img
                      src={getImage(aboutData.imageMap.coluTwo)}
                      alt=""
                      className="img-fluid d-none d-lg-block"
                      variants={isMobile ? {} : fadeUp}
                      initial={isMobile ? "visible" : "hidden"}
                      whileInView={isMobile ? "visible" : "visible"}
                      viewport={{ once: false }}
                    />
                  </Col>

                  {/* TEXT + CARDS */}
                  <Col md={12} lg={6} className="d-flex flex-column gap-4 align-items-center justify-content-between">
                    <motion.p
                      className="main-paragraph-about m-0"
                      variants={isMobile ? {} : fadeUp}
                      initial={isMobile ? "visible" : "hidden"}
                      whileInView={isMobile ? "visible" : "visible"}
                      viewport={{ once: false }}
                    >
                      {aboutData.paragraph}
                    </motion.p>

                    <Link to="/about" className="common-button about-button d-block d-lg-none order-3 order-md-2">
                      Our Story <img src={buttoArr} alt="button arrow" />
                    </Link>

                    {showCards && (
                      <Row className="w-100 d-flex align-items-center justify-content-center">
                        {/* FIRST CARD */}
                        <Col xs={6} sm={5} md={6}>
                          <motion.div
                            className="bottom-sec-1"
                            variants={isMobile ? {} : fadeUp}
                            initial={isMobile ? "visible" : "hidden"}
                            whileInView={isMobile ? "visible" : "visible"}
                            viewport={{ once: false }}
                          >
                            <p className="small-txt">
                              {aboutData.firstCard.small}
                            </p>

                            <div className="icon-box d-none d-sm-block">
                              <FirstIcon color="#ffffff" />
                            </div>

                            <h2 className="col-title">
                              <CountUp
                                duration={5}
                                end={aboutData.firstCard.number}
                              />
                              +
                            </h2>

                            <p
                              className="col-para"
                              dangerouslySetInnerHTML={{
                                __html: aboutData.firstCard.title
                              }}
                            />


                          </motion.div>
                        </Col>

                        {/* SECOND CARD */}
                        <Col xs={6} sm={5} md={6}>
                          <motion.div
                            className="bottom-sec-1 bs-2"
                            variants={isMobile ? {} : fadeUp}
                            initial={isMobile ? "visible" : "hidden"}
                            whileInView={isMobile ? "visible" : "visible"}
                            viewport={{ once: false }}
                          >
                            <p className="small-txt">
                              {aboutData.secondCard.small}
                            </p>

                            <div className="icon-box d-none d-sm-block">
                              <SecondIcon color="#ffffff" />
                            </div>

                            <h2 className="col-title">
                              <CountUp
                                duration={5}
                                end={aboutData.secondCard.number}
                              />
                              +
                            </h2>

                            <p
                              className="col-para"
                              dangerouslySetInnerHTML={{
                                __html: aboutData.secondCard.title
                              }}
                            />
                          </motion.div>
                        </Col>
                      </Row>
                    )}

                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
