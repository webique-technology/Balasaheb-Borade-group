import React, { useState, useEffect, Activity } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { PrimeryBtn } from "./button";
import { Navbar, Row, Col, Nav } from "react-bootstrap";
import { SideBar } from "./sidebar";

import "../style/navBar.scss";
import logo from "../assets/imgaes/sp_infra_logo.png";
import logo2 from "../assets/imgaes/sp-infra-logo-2.png"
import webLgo from "../assets/imgaes/borade-logo.png";

const NavigationBar = () => {
    const [isShowingSidebar, setIsShowingSidebar] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"];

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
                <div className="container-xxl d-flex justify-content-center">
                    <Row className="w-100 me-0 align-items-center justify-content-between">

                        <Col xs={6} md={3} lg={2} className="">
                            <img src={scrolled ? logo : logo2} alt="Logo" className="nav-logo img-fluid" />
                        </Col>

                        <Col lg={6} className="d-none d-lg-flex justify-content-center">
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

                        {/* butto */}
                        <Col xs={6} md={6} lg={3} className="d-flex justify-content-end align-items-center gap-3 px-0">
                            <div className="nav-btn d-none d-lg-block">
                                <PrimeryBtn
                                    title="Get Quote"
                                    icon={<FaArrowUp />}
                                    btnClass="navBtn"
                                    href="tel:+919325561210"
                                />
                            </div>
                            <a href="https://balasahebboradegroup.com/" target="_blank" className="home-btn" title="Back to main website">
                                <img src={webLgo} />
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
