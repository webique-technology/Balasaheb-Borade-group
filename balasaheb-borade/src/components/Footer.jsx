import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import listArr from '../assets/images/list-arrow.svg';
import fHome from '../assets/images/footer-home.svg';
import fEmail from '../assets/images/footer-email.svg';
import fPhone from '../assets/images/footer-phone.svg';
import fUnderline from '../assets/images/footer-underline.svg';
import { Link, NavLink } from 'react-router-dom';
import FuterLgo from '../assets/images/logo-sidebar.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const isMobile = window.innerWidth <= 768;
const footerData = {
    about: {
        title: "Logo",
        description:
            "The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward",
        socialIcons: [
            { icon: FaFacebookF, url: "https://facebook.com" },
            { icon: FaTwitter, url: "https://twitter.com" },
            { icon: FaInstagram, url: "https://www.instagram.com/bigdreamassociates/" },
            { icon: FaLinkedin, url: "https://in.linkedin.com/in/mr-balasaheb-borade-mrs-savita-b-borade-58230632" }
        ]


    },
    quickLinks: {
        title: "Quick Link",
        links: [
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Companies", path: "/companies" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" }
        ]
    },
    contact: {
        title: "Contact",
        details: [
            {
                type: "address",
                icon: fHome,
                text: "Office No-314/315, Atlanta Shoppers\nServ. No 323/1/1/A/5, Plot No-4/5, Pathardi Road, Nashik"
            },
            {
                type: "phone",
                icon: fPhone,
                phoneOne: "9822761210",
                phoneTwo: "02532951210"
            },
            {
                type: "email",
                icon: fEmail,
                text: "Spiplnsk@gmail.com"
            }
        ]
    },


    footline: {
        text: "Copyright 2024 ",
        brand: "Webique Technology",
        end: "Rights Reserved."
    }
};

const Footer = () => {
    // Framer Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
    return (
        <>
            <div className='footer-section'>
                <Container>
                    <Row className='d-flex row-gap-4 flex-md-row'>


                        {/* ABOUT */}
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <motion.div
                                variants={isMobile ? {} : fadeLeft}
                                initial={isMobile ? "visible" : "hidden"}
                                whileInView={isMobile ? "visible" : "visible"}
                                viewport={{ once: false, amount: 0.2 }}
                                className='description'>

                                <div className='futer-lgo'><img src={FuterLgo} alt='bb-logo' /></div>
                                {/* <img src={fUnderline} className='under-ln' /> */}
                                <p>{footerData.about.description}</p>
                                <div className='footer-icon-wrap'>

                                    {footerData.about.socialIcons.map((item, index) => (

                                        <Link to={item.url} key={index} target='_blank'>
                                            <item.icon className="footer-social-icons" />
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </Col>
                        {/* QUICK LINKS */}
                        <Col xs={12} sm={12} md={3} lg={3} className='d-flex align-items-start justify-content-start justify-content-md-center'>
                            <motion.div
                                variants={isMobile ? {} : fadeUp}
                                initial={isMobile ? "visible" : "hidden"}
                                whileInView={isMobile ? "visible" : "visible"}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h3>{footerData.quickLinks.title}</h3>
                                <img src={fUnderline} className='under-ln' />
                                <ul className='footer-links'>
                                    {footerData.quickLinks.links.map((item, index) => (
                                        <li key={index}>
                                            <img src={listArr} className="list-arrow" alt="arrow" />

                                            <Link to={item.path} className="footer-link-text">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </Col>
                        {/* CONTACT */}
                        <Col xs={12} sm={12} md={5} lg={5}>
                            <motion.div
                                variants={isMobile ? {} : fadeRight}
                                initial={isMobile ? "visible" : "hidden"}
                                whileInView={isMobile ? "visible" : "visible"}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h3>{footerData.contact.title}</h3>
                                <img src={fUnderline} className='under-ln' />
                                <div className='footer-contact-wrap d-flex flex-column gap-2'>
                                    {footerData.contact.details.map((item, index) => (

                                        <div className="contact-item" key={index}>
                                            {item.type === "address" && (
                                                <>
                                                    <img src={item.icon} className='mt-1' />
                                                    <p>
                                                        {item.text.split("\n").map((line, idx) => (
                                                            <span key={idx}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                    </p>
                                                </>
                                            )}

                                            {item.type === "phone" && (
                                                <>
                                                    <img src={item.icon} className='mt-1' />
                                                    <p className='d-flex gap-2 gap-md-0 flex-row'>
                                                        <a href={`tel:${item.phoneOne}`}>{item.phoneOne}</a>
                                                        <span className=''>&nbsp;,&nbsp;</span>
                                                        <a href={`tel:${item.phoneTwo}`}>{item.phoneTwo}</a>
                                                    </p>
                                                </>
                                            )}

                                            {/* TYPE: EMAIL */}
                                            {item.type === "email" && (
                                                <>
                                                    <img src={item.icon} className='mt-1' />
                                                    <p>

                                                        <a href={`mailto:${item.text}`}>{item.text}</a>
                                                    </p>
                                                </>
                                            )}
                                        </div>

                                    ))}
                                </div>
                            </motion.div>
                        </Col>


                    </Row>
                </Container>
                <div className='company-line'>
                    <div className="footline">
                        <Container>
                            <Row className="align-items-center justify-content-between gap-md-0 gap-md-0 mt-0 mt-md-4">

                                {/* Left Side */}
                                <Col
                                    xs={12}
                                    md={6}
                                    className="d-flex align-items-center justify-content-md-start justify-content-center"
                                >
                                    <p className="text-center text-md-start">
                                        &copy; Copyright {new Date().getFullYear()}{" "}
                                        <span>Balasaheb Borade</span> {" "} Rights Reserved
                                    </p>
                                </Col>

                                {/* Right Side - Social Icons */}


                                {/* Designed and Developed */}
                                <Col
                                    xs={12}
                                    md={6}
                                    className='d-flex align-items-center justify-content-center justify-content-md-end'
                                >
                                    <div className="f-right">
                                        <p>
                                            Designed & Developed by{" "}
                                            <Link
                                                to="https://webique.in/"
                                                className="text-decoration-none fw-bold"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Webique Technology
                                            </Link>
                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer