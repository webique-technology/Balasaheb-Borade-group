import React, { useState, useEffect, Activity } from "react";
import { Navbar, Row, Col, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/navbar.scss";
import { PrimeryBtn } from "./shared/button";
import { SideBar } from "./sidebar";
import logo from "../assets/images/logo_white.png";
import logoBlue from "../assets/images/logo_blue.png";
import webLgo from "../assets/images/borade-logo.png";
const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isShowingSidebar, setIsShowingSidebar] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "services", "testimonials", "contact"];

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

                            <Col xs={6} md={3} lg={2}>
                                <img src={scrolled ? logoBlue : logo} alt="Logo" className="nav-logo" />
                            </Col>
{/* md	≥ 768px
Large	lg	≥ 992px
Extra Large	xl */}
                            <Col lg={5} xxl={6} className="d-none d-lg-flex justify-content-center">
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
                            <Col xs={6} md={6} lg={4} xxl={3} className="d-flex justify-content-end align-items-center gap-3">
                                <div className="nav-btn d-none d-lg-block">
                                    <PrimeryBtn
                                        title={"Consult"}
                                        btnClass={"primaryBtn"}
                                        href="tel:9325561210"
                                    />
                                </div>
                                 <a href="https://balasahebboradegroup.com/" target="_blank" className="home-btn" title="balasaheb borade group">
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
        </>

    );
};

export default NavigationBar;
