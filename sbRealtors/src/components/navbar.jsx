import React, { useState, useEffect, Activity } from "react";
import { Navbar, Row, Col, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../style/navbar.scss";
import { PrimeryBtn, WebsiteButton } from "./shared/button";
import { SideBar } from "./sidebar";
import logo from "../assets/images/sb-realtors-lgo.svg";

import webLgo from "../assets/images/borade-logo.png";

const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isShowingSidebar, setIsShowingSidebar] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = ["home", "about", "services", "portfolio", "contact"];

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
                        <div className="nav-wrap">

                            {/* <Col xs={6} md={2} lg={2}> */}
                            <div className="logo-wrap">
                                <img src={logo} alt="Logo" className="nav-logo" />
                            </div>

                            {/* <Col lg={6} className="d-none d-lg-flex justify-content-end"> */}
                            <div className="nav-wrap-inner">
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
                            </div>

                            {/* butto */}

                            {/* <Col xs={6} md={6} lg={3} className="d-flex justify-content-end align-items-center gap-3"> */}
                                 <div className="btn-wrap">
                                <div className="nav-btn d-none d-lg-block">
                                    <PrimeryBtn
                                        title={"Get Quote"}
                                        btnClass={"primaryBtn"}
                                        href="tel:9822761210"

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
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        </>

    );
};

export default NavigationBar;
