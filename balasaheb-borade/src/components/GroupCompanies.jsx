import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/gp_infra.png";
import image2 from "../assets/images/tab2.png";
import image3 from "../assets/images/gp_masale.png";
import image4 from "../assets/images/gp_realtor.png";
import image5 from "../assets/images/tab5.png";
import arrowButton from "../assets/images/arrow-2.svg";
import tabImage from "../assets/images/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// company logo
import spInfraLogo from "../assets/images/shree-pandhari-lgo.svg"
import savitaMasaleLogo from "../assets/images/savita-logo.svg"
import sbRealtor from "../assets/images/sb-lgo.svg"
import logoNGO from "../assets/images/ngo-lgo.svg"
import IdcLogo from "../assets/images/id_logo_blue.png"

// Animation Variants...
// (keep all your animation variants as they are)

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const isMobileTwo = window.innerWidth <= 768;
const accordionData = [
  { id: 1, logo: spInfraLogo, title: "Shree Pandhari Infra", content: "We build, manage, and scale businesses with a foundation of trust, transparency, and long-term value.", image: image1, path: "https://shreepandhariinfra.balasahebboradegroup.com" },
  { id: 2, logo: logoNGO, title: "Shree Pandhari Seva Bhavi Sanstha", content: "Shree Pandhari Bahuuddeshiy Sevabhavi Sanstha NGO established on 30 March 2022", image: image2, path: "https://shreepandhariorg.balasahebboradegroup.com" },
  { id: 3, logo: savitaMasaleLogo, title: "Savita Masale", content: "Born in a small Nashik kitchen, Savita Masale has grown into a trusted brand known for purity and authentic flavour.", image: image3, path: "https://savitamasale.balasahebboradegroup.com" },
  { id: 4, logo: sbRealtor, title: "SB Realtors", content: "Founded in 2019, SB Realtor is a trusted real estate developer and property consultant offering reliable solutions for buying, selling, and rental properties.", image: image4, path: "https://sbrealtors.balasahebboradegroup.com" },
  { id: 5, logo: IdcLogo, title: "Ideal Corporation", content: "Ideal Corporation, with 11 years of expertise, provides transparent, compliant, and reliable trading and investment solutions for investors of all types.", image: image5, path: "https://idealcorporation.balasahebboradegroup.com" },
];

const GroupCompanies = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Handle click on accordion
  const handleAccordionClick = (id) => {
    setActive(id);

    // On mobile → navigate instead of just activating
    // if (isMobile) {
    //   navigate("/about");
    // }
  };

  const handleNavClick = () => navigate("/about");

  return (
    <motion.div className="group-companies"
      variants={isMobileTwo ? {} : fadeUp}
      initial={isMobileTwo ? "visible" : "hidden"}
      whileInView={isMobileTwo ? "visible" : "visible"}
      viewport={{ once: false, amount: 0.2 }}>
      <Container>
        <Row className="justify-content-between flex-row-reverse row-gap-4 flex-md-row ">

          {/* LEFT COLUMN */}
          <Col xs={12} md={6} lg={6}>
            <motion.h2 className="heading-text" variants={isMobileTwo ? {} : fadeUp}
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"} viewport={{ once: false }}>
              Group Companies
            </motion.h2>

            <motion.p
              variants={isMobileTwo ? {} : fadeUp}
              className="gp-text"
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"} viewport={{ once: false }}>
              Click on each company below to learn more about their services and offerings.
            </motion.p>

            <motion.div className="accordion-left" variants={isMobileTwo ? {} : fadeUp}
              initial={isMobileTwo ? "visible" : "hidden"}
              whileInView={isMobileTwo ? "visible" : "visible"} viewport={{ once: false }}>
              {accordionData.map((item) => (
                <motion.div
                  key={item.id}
                  className={`accordion-item ${active === item.id ? "active" : ""}`}
                  onClick={() => handleAccordionClick(item.id)}
                  variants={fadeUp}
                >
                  <button className="accordion-header">
                    <span>{item.title}</span>
                    <Link to={item.path} target="_blank" className="d-none d-md-block">
                      <img src={arrowButton} alt="arrow" />
                    </Link>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col xs={12} md={6} lg={5} className="d-flex align-items-end justify-content-center">
            <motion.div
              className="images-wrap"
            //  variants={isMobileTwo ? {} : fadeUp}
            // initial={isMobileTwo ? "visible" : "hidden"}
            // whileInView={isMobileTwo ? "visible" : "visible"} viewport={{ once: false }}
            >

              {/* SHOW IMAGE ONLY ON DESKTOP/TABLET */}

              <motion.img
                key={active}
                src={accordionData.find((i) => i.id === active)?.image}
                alt="Accordion"
                className="accordion-image"
                variants={zoomFade}
                initial="hidden"
                animate="visible"
              />

              <motion.div
                variants={isMobileTwo ? {} : fadeUp}
                initial={isMobileTwo ? "visible" : "hidden"}
                whileInView={isMobileTwo ? "visible" : "visible"}
                viewport={{ once: false }}
                className="company-logo">
                <img src={accordionData.find((i) => i.id === active)?.logo}
                  alt={accordionData.find((i) => i.id === active)?.title} />
              </motion.div>

              <motion.div
                className="image-text d-flex justify-content-between"
                variants={isMobileTwo ? {} : fadeUp}
                initial={isMobileTwo ? "visible" : "hidden"}
                whileInView={isMobileTwo ? "visible" : "visible"}
                viewport={{ once: false }}
              >
                <div className="t-wrap">
                  <h3>{accordionData.find((i) => i.id === active)?.title}</h3>
                  <p className="d-none d-md-block">{accordionData.find((i) => i.id === active)?.content}</p>
                </div>

                {/* a-wrap always navigates */}
                <a href={accordionData.find((i) => i.id === active)?.path} className="a-wrap" target="_blank">
                  <motion.img
                    src={tabImage}
                    variants={isMobileTwo ? {} : fadeUp}
                    initial={isMobileTwo ? "visible" : "hidden"}
                    whileInView={isMobileTwo ? "visible" : "visible"}
                    // onClick={handleNavClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </motion.div>
  );
};

export default GroupCompanies;
