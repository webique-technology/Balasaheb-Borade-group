import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import insta from "../assets/imgaes/insta.png"
import facebook from "../assets/imgaes/facebook.png"
import linkedin from "../assets/imgaes/linkedin.png"
import twitter from "../assets/imgaes/twitter.png"
import { Link } from "react-router";

const footIcon = [
    { icon: insta, link: "https://www.instagram.com/" },
    { icon: facebook, link: "https://www.facebook.com/" },
    { icon: linkedin, link: "https://www.linkedin.com/" },
    { icon: twitter, link: "https://x.com/" },
];

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row className="align-items-start align-items-lg-center  gap-2 gap-md-0 gap-md-0">

                        {/* Left Side */}
                        <Col
                            xs={{ order: 1 }}
                            md={{ order: 0, span: 6 }}
                            className="d-flex align-items-center justify-content-start "
                        >
                            <p className="para text-center text-md-start">
                                &copy; Copyright {new Date().getFullYear()}{" "}
                                <span>Shri Pandhari Infrastructure Pvt. Ltd.</span> {" "} Rights Reserved
                            </p>
                        </Col>



                        {/* Designed and Developed */}
                        <Col
                            xs={{ order: 2 }}
                            md={{ order: 0, span: 6 }}
                            className="d-flex align-items-center justify-content-center justify-content-md-end"
                        >
                            <div className="f-right text-center text-md-end">
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
        </>
    )
}


export default Footer;