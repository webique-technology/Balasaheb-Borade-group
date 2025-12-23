import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import image1 from "../assets/images/services_1.png";
import image2 from "../assets/images/services_2.png";
import image3 from "../assets/images/services_3.png";
import image4 from "../assets/images/services_4.png";
import image5 from "../assets/images/services_5.png";
import arrowButton from "../assets/images/about_arr.png";

import "../style/services.scss";


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};


const accordionData = [
  { id: 1, title: "Builders & Developers", content: "real estate Developers is the investment for a lifetime. You are going to be...", image: image1, sm: 6 },
  { id: 2, title: "Buying Properties", content: "Our company has a wide range of properties and collaborations...", image: image2, sm: 6 },
  { id: 3, title: "Property Sales Support", content: "Selling and buying a property needs a lot of dedication and time. Adding to this there...", image: image3, sm: 6 },
  { id: 4, title: "Requirement Matching Service", content: "We match your needs with the best available properties.", image: image4, sm: 6 },
  { id: 5, title: "Rental Property", content: "We provides you with the best properties for rent. We have varieties of properties for our customers and clients to choose from", image: image5, sm: 12 },
];

// const accordionData = [
//   { id: 1, title: "Builders & Developers", content: "We plan and develop residential and commercial projects.", image: image1, sm: 6 },
//   { id: 2, title: "Real Estate Consulting", content: "Expert guidance for buying, selling, or leasing properties.", image: image2, sm: 6 },
//   { id: 3, title: "Property Sales Support", content: "Assisting clients in finding and purchasing the right property.", image: image3, sm: 6 },
//   { id: 4, title: "Requirement Matching Service", content: "We match your needs with the best available properties.", image: image4, sm: 6 },
//   { id: 5, title: "Commercial Property Advisory", content: "Support for investing in offices and commercial spaces.", image: image5, sm: 12 },
// ];

const ServicesSec = () => {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);


  return (
    <motion.div
      className="group-companies"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Container>
        <Row className="justify-content-between flex-row-reverse row-gap-4 flex-md-row">

          {/* ---------------------- LEFT COLUMN ---------------------- */}
          <Col sm={12} md={6} lg={6}>
            <motion.h2
              className="heading-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              Services
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible">
              A unified network of businesses delivering excellence across multiple sectors.
            </motion.p>

            <motion.div
              className="accordion-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              {accordionData.map((item) => (
                <motion.div
                  className={`accordion-item ${active === item.id ? "active" : ""}`}
                  onClick={() => setActive(item.id)}
                  variants={fadeUp}
                >
                  <button className="accordion-header">
                    <span>{item.title}</span>
                    <img src={arrowButton} alt="arrow" className="d-none d-md-block" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* ---------------------- RIGHT COLUMN ---------------------- */}
          <Col sm={12} md={6} lg={5} className="d-flex align-items-end justify-content-center">
            <motion.div className="images-wrap" variants={fadeUp} initial="hidden" whileInView="visible">

              {/* Desktop/Tablet Image */}
              <motion.img
                key={active}
                src={accordionData.find((i) => i.id === active)?.image}
                alt="Accordion"
                className="accordion-image"
                variants={zoomFade}
                style={{ objectFit: isMobile ? "cover" : "contain" }}
                initial="hidden"
                animate="visible"
              />

              {/* Text box */}
              <motion.div
                className="image-text"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
              >
                <div className="t-wrap">
                  <h3>{accordionData.find((i) => i.id === active)?.title}</h3>
                  <p>{accordionData.find((i) => i.id === active)?.content}</p>
                </div>
              </motion.div>

            </motion.div>
          </Col>

        </Row>
      </Container>
    </motion.div>
  );
};

export default ServicesSec;
