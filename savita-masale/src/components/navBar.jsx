import React, { useState, useEffect, Activity } from "react";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { PrimeryBtn } from "../components/shared/button";
import { Navbar, Row, Col, Nav } from "react-bootstrap";
// import { SideBar } from "./sidebar";
import call from "../assets/images/telephone.png"
import "../style/navbar.scss";
// import logo from "../assets/imgaes/logo.png";
import masaleLogo from "../assets/images/savita-lgo-one.svg"
import masalaLogo2 from "../assets/images/savita-lgo-two.svg"
import { SideBar } from "./sidebar";
import boradeLogo from "../assets/images/borade-logo.png"


const NavigationBar = () => {
    const [isShowingSidebar, setIsShowingSidebar] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "product", "process", "testimonial", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 90);

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToId = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={scrolled ? "nav-bar scrolled" : "sticky-navbar nav-bar"}>
            <Navbar expand="lg">
                <div className="container-xl d-flex justify-content-center">
                    <Row className="w-100 align-items-center justify-content-between">
                        <Col xs={6} sm={6} md={3} lg={2} className="ps-0">
                            <div className="nav-logo">
                                <img src={scrolled ? masalaLogo2 : masaleLogo} alt="Logo" className="img-fluid" />
                            </div>
                        </Col>

                        <Col lg={8} xl={7} className="d-none d-lg-flex justify-content-center">
                            <Nav className="nav-link-count">

                                {sections.map((sec) => (
                                    <Nav.Link
                                        key={sec}
                                        onClick={() => scrollToId(sec)}
                                        className={activeSection === sec ? "active" : ""}
                                    >
                                        {sec.charAt(0).toUpperCase() + sec.slice(1)}
                                    </Nav.Link>
                                ))}

                            </Nav>
                        </Col>

                        {/* button */}
                        <Col xs={6} sm={6} md={6} lg={2} xl={2} xxl={2} className="d-flex px-0 align-items-center justify-content-end gap-3 gap-xl-0 justify-content-xl-between">
                            <div className="nav-btn d-none d-lg-block">
                                <motion.a
                                    href="tel:+917745061210"
                                    className="navBtn"
                                    whileHover="hover"
                                >
                                    <span className="d-none d-xl-block">Call Us</span>
                                    <motion.div className="pb-circle">
                                        <motion.div className="icon">
                                            <IoCallOutline />
                                        </motion.div>
                                    </motion.div>
                                </motion.a>
                            </div>
                            {/* borade main website redirect link */}
                            <a href="https://balasahebboradegroup.com/" target="_blank" title="Back to main website" className="borade-web-btn">
                                <img src={boradeLogo} alt="Balasaheb borade Group of Companies" className="" />
                            </a>
                            {/* ham btn */}
                            <div className="ham-btn d-block d-lg-none">
                                <Activity mode={isShowingSidebar ? 'visible' : 'hidden'}>
                                    <SideBar />
                                </Activity>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
