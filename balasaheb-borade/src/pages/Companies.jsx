import React from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-inner.jpg";
import { Col, Container, Row } from "react-bootstrap";

import tab1 from "../assets/images/tab1.png";
import tab2 from "../assets/images/tab2.png";
import tab3 from "../assets/images/gp_masale.png";
import tab4 from "../assets/images/gp_realtor.png";
import tab5 from "../assets/images/tab5.png";


// company logo
import spInfraLogo from "../assets/images/sp_infra_logo.png"
import savitaMasaleLogo from "../assets/images/sm-logo.png"
import sbRealtor from "../assets/images/logo_sb.png"
import logoNGO from "../assets/images/ngo_logo.png"
import IdcLogo from "../assets/images/id_logo_blue.png"

import buttoArr from "../assets/images/button-circle.svg";
import { Link } from "react-router-dom";

const isMobile = window.innerWidth <= 768;

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Companies = () => {
  const headingText = "Group of Companies";
  const subtitleText =
    "A unified network of businesses delivering excellence across multiple sectors.";

  return (
    <div>
      <InnerPageHeader
        heading={headingText}
        subtitle={subtitleText}
        image={aboutImg}
      />

      <div className="companies-inner-wrap">

        {/* SECTION 1 */}
        <motion.div
          className="company-section"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <Container>
            <Row className="flex-column flex-md-row">
              <Col md={4} className="position-relative company-img">
                <motion.img
                  src={tab1}
                  className="img-fluid"
                  variants={isMobile ? {} : slideLeft}
                  initial={isMobile ? "visible" : "visible"}
                />
                <img src={spInfraLogo} alt="" className="logo-compoany img-fluid" />
              </Col>

              <Col md={8}>
                <div className="text-wrap">
                  <motion.h2 className="company-title" variants={isMobile ? {} : fadeUp}>
                    Shree Pandhari Infra
                  </motion.h2>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    We build, manage, and scale businesses with a foundation of trust, transparency, and long-term value. Through strategic leadership, business development, compliance, and operational excellence, we guide every venture with clarity, responsibility, and strong governance across multiple industries.
                  </motion.p>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    We build, manage, and scale businesses with a foundation of trust, transparency, and long-term value. Through strategic leadership, business development, compliance, and operational excellence, we guide every venture with clarity, responsibility, and strong governance across multiple industries.
                  </motion.p>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <h4>Main points about concerned compnay</h4>
                    <ul className="inner-list">
                      <li> We build, manage, and scale businesses with a foundation of trust</li>
                      <li> transparency, and long-term value.</li>
                      <li> We build, manage, and scale businesses with </li>
                      <li> transparency, and long-term value.</li>
                    </ul>
                  </motion.div>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <Link to="https://shreepandhariinfra.balasahebboradegroup.com" target="_blank" className="common-button about-button">
                      Know more.. <img src={buttoArr} alt="button arrow" />
                    </Link>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Container>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          className="company-section"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <Container>
            <Row className="flex-column flex-md-row">
              <Col md={8} className="order-2 order-md-1">
                <div className="text-wrap">
                  <motion.h2 className="company-title" variants={isMobile ? {} : fadeUp}>
                    Shree Pandhari Seva Bhavi Sanstha
                  </motion.h2>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    Shree Pandhari Bahuuddeshiy Sevabhavi Sanstha, Nashik is a registered non-government organization established on 30 March 2022 under the Societies Registration Act, Maharashtra. The organization is working for the social, educational, and economic development of rural and underprivileged communities.
                  </motion.p>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    The Sanstha is actively involved in areas such as agriculture, animal husbandry, education, health, skill development, rural development, and poverty alleviation. Our aim is to empower farmers, youth, women, children, and marginalized sections of society through sustainable development programs and welfare initiatives.
                  </motion.p>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <h4>Main points about concerned compnay</h4>
                    <ul className="inner-list">
                      <li>Work for the overall development of rural and marginalized sections of society</li>
                      <li>Improve livelihood opportunities through skill development and vocational training</li>
                      <li>Promote education, health awareness, and social welfare programs</li>
                      <li>Support sustainable agriculture, water conservation, and environmental protection</li>
                    </ul>
                  </motion.div>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <Link to="https://shreepandhariorg.balasahebboradegroup.com" target="_blank" className="common-button about-button">
                      Know more.. <img src={buttoArr} alt="button arrow" />
                    </Link>
                  </motion.div>
                </div>
              </Col>

              <Col md={4} className="order-1 order-md-2 position-relative company-img">
                <motion.img
                  src={tab2}
                  className="img-fluid"
                  variants={isMobile ? {} : slideRight}
                  initial={isMobile ? "visible" : "visible"}
                />
                <img src={logoNGO} alt="" className="logo-compoany img-fluid" />
              </Col>
            </Row>
          </Container>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          className="company-section"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "visible"}
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <Container>
            <Row className="flex-column flex-md-row">

              <Col md={4} className="position-relative company-img">
                <motion.img
                  src={tab3}
                  className="img-fluid"
                  variants={isMobile ? {} : slideLeft}
                  initial={isMobile ? "visible" : "visible"}
                />
                <img src={savitaMasaleLogo} alt="" className="logo-compoany img-fluid" />
              </Col>

              <Col md={8}>
                <div className="text-wrap">
                  <motion.h2 className="company-title" variants={isMobile ? {} : fadeUp}>
                    Savita Masale
                  </motion.h2>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    Savita Masale offers a premium range of authentic Maharashtrian spices made using time-tested recipes and high-quality raw ingredients. From the bold and flavorful Kanda Lasoon Masala to essential everyday spices like Chilli, Turmeric, and Coriander, each blend is prepared to deliver consistent taste and rich aroma in every dish.
                  </motion.p>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    Our special spice blends are designed to enhance traditional as well as modern cooking. At Savita Masale, we believe good food starts with good spices. That’s why families trust Savita Masale today, tomorrow, and every day to bring authentic taste, purity, and quality to their meals.
                  </motion.p>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <h4>Main points about concerned compnay</h4>
                    <ul className="inner-list">
                      <li>Traditional recipes that bring real Maharashtrian flavor to your kitchen</li>
                      <li>Carefully selected spices, hygienically processed and packed</li>
                      <li>Expertly crafted Kanda Lasoon Masala and special spice mixes</li>
                      <li>Ground and packed to retain natural aroma, color, and taste</li>
                    </ul>
                  </motion.div>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <Link to="https://savitamasale.balasahebboradegroup.com" target="_blank" className="common-button about-button">
                      Know more.. <img src={buttoArr} alt="button arrow" />
                    </Link>
                  </motion.div>
                </div>
              </Col>

            </Row>
          </Container>
        </motion.div>

        {/* SECTION 4 */}
        <motion.div
          className="company-section"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <Container>
            <Row className="flex-column flex-md-row">
              <Col md={8} className="order-2 order-md-1">
                <div className="text-wrap">
                  <motion.h2 className="company-title" variants={isMobile ? {} : fadeUp}>
                    SB Realtors
                  </motion.h2>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    SB Realtors is a leading real estate organization based in Nashik, known for its credibility, professionalism, and commitment to excellence. The company is actively engaged in delivering reliable real estate solutions that cater to the diverse and dynamic property needs of its clients.
                  </motion.p>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    With a team of experienced real estate developers, property dealers, and consultants, Big Dream Associates offers end-to-end services including property buying, selling, and rental assistance. Our focus on transparency, market expertise, and customer satisfaction makes us a preferred choice for individuals and businesses looking for dependable real estate services in Nashik.
                  </motion.p>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <h4>Main points about concerned compnay</h4>
                    <ul className="inner-list">
                      <li>A reliable and professional real estate organization in Nashik</li>
                      <li>Buying, selling, and rental services under one roof</li>
                      <li>Skilled and knowledgeable real estate developers and property dealers</li>
                      <li>Transparent dealings and tailored solutions for every client</li>
                    </ul>
                  </motion.div>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <Link to="https://sbrealtors.balasahebboradegroup.com" target="_blank" className="common-button about-button">
                      Know more.. <img src={buttoArr} alt="button arrow" />
                    </Link>
                  </motion.div>
                </div>
              </Col>

              <Col md={4} className="order-1 order-md-2 position-relative company-img">
                <motion.img
                  src={tab4}
                  className="img-fluid"
                  variants={isMobile ? {} : slideRight}
                  initial={isMobile ? "visible" : "visible"}
                />
                <img src={sbRealtor} alt="" className="logo-compoany img-fluid" />
              </Col>
            </Row>
          </Container>
        </motion.div>

        {/* SECTION 5 */}
        <motion.div
          className="company-section pb-0"
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <Container>
            <Row className="flex-column flex-md-row">
              <Col md={4} className="position-relative company-img">
                <motion.img
                  src={tab5}
                  className="img-fluid"
                  variants={isMobile ? {} : slideLeft}
                  initial={isMobile ? "visible" : "visible"}
                />
                <img src={IdcLogo} alt="" className="logo-compoany img-fluid" />
              </Col>

              <Col md={8}>
                <div className="text-wrap">
                  <motion.h2 className="company-title" variants={isMobile ? {} : fadeUp}>
                    Ideal Corporation
                  </motion.h2>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    Ideal Corporation is a modern stock market and investment platform powered by Borade Groups, backed by over 11 years of experience in corporate governance and disciplined financial services. We provide transparent, compliant, and reliable trading, research, and investment solutions tailored for all types of investors.
                  </motion.p>

                  <motion.p className="main-paragraph-about" variants={isMobile ? {} : fadeUp}>
                    Our platform is designed to support informed decision-making through real-time trading tools, secure asset management, and easy-to-use features. At Ideal Corporation, we focus on long-term trust, regulatory compliance, and delivering consistent value to help investors confidently grow their financial future.
                  </motion.p>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <h4>Main points about concerned compnay</h4>
                    <ul className="inner-list">
                      <li>Real-Time Trading – Access live market data with fast and reliable trade execution</li>
                      <li>Secure Wallets & Asset Protection – Advanced security systems to safeguard funds and investments</li>
                      <li>User-Friendly Platform – Simple, intuitive interface suitable for beginners and professionals</li>
                      <li>Diverse Investment Options – Trade across stocks and multiple asset classes from one platform.</li>
                    </ul>
                  </motion.div>

                  <motion.div variants={isMobile ? {} : fadeUp}>
                    <Link to="https://idealcorporation.balasahebboradegroup.com" target="_blank" className="common-button about-button">
                      Know more.. <img src={buttoArr} alt="button arrow" />
                    </Link>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Container>
        </motion.div>

      </div>
    </div>
  );
};

export default Companies;
