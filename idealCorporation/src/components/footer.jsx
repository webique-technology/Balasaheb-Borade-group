import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../style/footer.scss";

import insta from "../assets/images/top_insta.png";
import facebook from "../assets/images/top_fb.png";
import linkedin from "../assets/images/top_linkedin.png";
import twitter from "../assets/images/top_twitter.png";

const footIcon = [
    { icon: insta, link: "https://www.instagram.com/", alt: "Instagram" },
    { icon: facebook, link: "https://www.facebook.com/", alt: "Facebook" },
    { icon: linkedin, link: "https://www.linkedin.com/", alt: "LinkedIn" },
    { icon: twitter, link: "https://x.com/", alt: "Twitter/X" },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center justify-content-between  gap-2 gap-md-0 gap-md-0">

                    {/* Left Side */}
                    <Col
                        xs={{ order: 1 }}
                        md={{ order: 0, span: 4 }}
                        className="d-flex align-items-center justify-content-md-start justify-content-center"
                    >
                        <p className="para text-center text-md-start">
                            &copy; Copyright {new Date().getFullYear()}{" "}
                            <span>Ideal Corporation</span> {" "} Rights Reserved
                        </p>
                    </Col>

                    

                    {/* Designed and Developed */}
                    <Col
                        xs={{ order: 2 }}
                        md={{ order: 0, span: 4 }}
                        className="d-flex align-items-center justify-content-center justify-content-md-end"
                    >
                        <div className="f-right">
                            Designed & Developed by{" "}
                            <Link
                                to="https://webique.in/"
                                className="text-decoration-none fw-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Webique Technology
                            </Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;
