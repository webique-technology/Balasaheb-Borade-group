import React, { useEffect, useRef } from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import aboutImg from "../assets/images/inner-banner.svg";
import mission from "../assets/images/mission.svg";
import vision from "../assets/images/vision.svg";
import AboutUs from "../components/AboutUs";
import { Col, Container, Row } from "react-bootstrap";
import Community from "../components/Community";
import abt2 from "../assets/images/gp_infra.png";
import bBorade from "../assets/images/chairman.png";
import savitaBorade from "../assets/images/savita-borade.jpeg"

import TimeLine from "../components/TimeLine";
import { motion } from "framer-motion";
import placeholderImg from "../assets/images/placeholder.jpg"

import groupCompany from "../assets/images/group-of-company.avif"

const isMobile = window.innerWidth <= 768;



const team = [
  { src: bBorade, name: "Shree. Balasaheb Borade", designation: "Chairman" },
  { src: savitaBorade, name: "Smt. Savita Balasaheb Borade", designation: "Director" },
  { src: "", name: "Name of Person", designation: "" },
  { src: "", name: "Name of Person", designation: "" },
];


const About = () => {
  const headingText = "About Us";
  const subtitleText = "We deliver excellence in every project.";

  const itemRefs = useRef([]);
  const lineRef = useRef(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const handleStepScroll = () => {
      const items = itemRefs.current;
      const line = lineRef.current;

      if (!line) return;

      let activeSteps = 0;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.6; // when 60% of viewport reached

        if (rect.top < triggerPoint) {
          activeSteps += 1; // item reached → add step
        }
      });

      // total items
      const total = items.length;

      // step percentage
      const stepPercent = 100 / total;

      // final height
      const newHeight = activeSteps * stepPercent;

      line.style.height = `${newHeight}%`;
    };

    window.addEventListener("scroll", handleStepScroll);
    handleStepScroll();

    return () => window.removeEventListener("scroll", handleStepScroll);
  }, []);

  return (
    <div>
      {/* Passing props to child */}
      <InnerPageHeader heading={headingText} subtitle={subtitleText} image={aboutImg} />
      <div className="about-inner-page">


        <motion.div

          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "visible"}


          transition={{ duration: 0.6 }}
          className="image-text-section"
        >
          <Container>
            <h2 className="intro-title heading-text align-items-start justify-content-start mb-3 mb-md-4">
              About Balasaheb Borade  Group of Companies
            </h2>

            <Row>
              <Col xs={12} md={4}>
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src={groupCompany} alt="section" className="img-fluid mb-3 mb-md-0" />
                </motion.div>
              </Col>

              <Col xs={12} md={8}>
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="section-text">Shree. Balasaheb Pandarinath Borade brings over 11 years of experience in corporate governance and business management. He currently holds Director and Designated Partner positions in multiple companies, including Ihalok Nirman Private Limited, Shree Pandhari Infrastructures Private Limited, and a third company actively engaged in general business operations. Through these roles, he plays a pivotal part in shaping corporate strategy, ensuring operational efficiency, and driving sustainable growth.</p>
                  <p className="section-text">Balasaheb’s leadership style is defined by clarity, discipline, and integrity. He is deeply committed to building businesses that are responsible, transparent, and growth-oriented, guided by strong ethics and long-term vision. His contributions span strategic decision-making, corporate governance, business development, and operational management, reflecting a holistic approach to organizational success.</p>
                  <p className="section-text">With a focus on innovation, accountability, and stakeholder value, Balasaheb fosters trust-based relationships with clients, partners, and teams. His extensive experience in corporate operations ensures that each enterprise under his guidance is well-structured, resilient, and poised for long-term impact.</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </motion.div>



        <motion.div
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="vision-mission"
        >
          <Container>
            {/* <h2 className="inner-text vm-heading">Mission Vision</h2> */}

            <Row>
              <Col md={6} lg={6}>
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="vm-block"
                >
                  <div className="vm-image"><img src={mission} /></div>
                  <div className="vm-txt">
                    <h4>Mission</h4>
                    <p>To build sustainable, innovative, and customer-centric businesses that create value for stakeholders while maintaining ethical practices, transparency, and corporate responsibility.</p>
                  </div>
                </motion.div>
              </Col>

              <Col md={6} lg={6}>
                <motion.div
                  variants={isMobile ? {} : fadeUp}
                  initial={isMobile ? "visible" : "hidden"}
                  whileInView={isMobile ? "visible" : "visible"}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="vm-block"
                >
                  <div className="vm-image"><img src={vision} /></div>
                  <div className="vm-txt"><h4>Vision</h4><p>To be recognized as a leading and trusted business leader, fostering growth, innovation, and social impact across industries through disciplined governance and strategic excellence.</p></div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </motion.div>


        <TimeLine />

        <motion.div
          variants={isMobile ? {} : fadeUp}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="team-section"
        >
          <Container>
            <h2 className="inner-text text-center text-md-start vm-heading mb-4">Team</h2>

            <Row className="justify-content-start team-row">
              {team.map((person, i) => (
                <Col md={3} sm={6} xs={12} key={i}>
                  <motion.div
                    variants={isMobile ? {} : fadeUp}
                    initial={isMobile ? "visible" : "hidden"}
                    whileInView={isMobile ? "visible" : "visible"}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="team-card"
                  >
                    <img
                      src={person.src || placeholderImg}
                      className="team-img"
                      alt={person.name}
                      onError={(e) => { e.target.src = placeholderImg; }}
                    />
                    <div className="team-name">
                      <p className="fw-bold">{person.name}</p>
                      {person.designation ? <p className="text-uppercase">{person.designation}</p> : <p>not specified</p>}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </motion.div>


        <Community />
      </div>
    </div>
  );
};

export default About;
