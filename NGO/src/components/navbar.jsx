


import React, { useState, useEffect, Activity } from "react";
// import { FaArrowUp } from "react-icons/fa6";
// import { PrimeryBtn } from "../components/shared/button";
import { Navbar, Row, Col, Nav, Container } from "react-bootstrap";
// import { SideBar } from "./sidebar";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../style/navbar.scss";
import { PrimaryBtn } from "./shared/button";
import { SideBar } from "./sidebar";
import logo from "../assets/images/ngo-lgo.svg";
import webLgo from "../assets/images/borade-logo.png";
// import masaleLogo from "../assets/images/savita_masale_logo.png"
// import { SideBar } from "./sidebar";

const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleDonateClick = () => {
        if (location.pathname === "/") {
            scrollToId("donate");
        } else {
            navigate("/donate");
        }
    };

    const [isShowingSidebar, setIsShowingSidebar] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "services", "gallary", "contact"];

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
        <>
            <div className={scrolled ? "nav-bar scrolled" : "sticky-navbar nav-bar"}>
                <Navbar expand="lg">
                    <div className={scrolled ? "container-lg scrolledNav" : "container-lg ngoNav"}>
                        <Row className="w-100 me-0 align-items-center justify-content-between">

                            <Col xs={6} md={3} lg={3}>
                                <img src={logo} alt="Logo" className="nav-logo" />
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
                            <Col xs={6} md={6} lg={3} className="d-flex justify-content-end align-items-center gap-3">
                                <div className="nav-btn d-none d-lg-block">
                                    <PrimaryBtn
                                        btnClass="primaryBtn"
                                        href="#donate"
                                        btnTitle={"Donate Us"}
                                        onClick={handleDonateClick}
                                    />
                                </div>
                                {/* ham btn */}
                                <a href="#" className="home-btn" title="https://balasahebboradegroup.com/">
                                        <img src={webLgo} />
                                    </a>
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
        </>

    );
};

export default NavigationBar;
