import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../style/footer.scss";

import insta from "../assets/images/insta.png"
import facebook from "../assets/images/facebook.png"
import linkedin from "../assets/images/linkedin.png"
import twitter from "../assets/images/twitter.png"

const footIcon = [
  { icon: insta, link: "https://www.instagram.com/bigdreamassociates/" },
  { icon: facebook, link: "https://www.facebook.com/" },
  { icon: linkedin, link: "https://in.linkedin.com/in/mr-balasaheb-borade-mrs-savita-b-borade-58230632" },
  { icon: twitter, link: "https://x.com/" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between gap-3 gap-md-0 gap-md-0">

          {/* Left Side */}
          <Col
            xs={{ order: 1 }}
            md={{ order: 0, span: 4 }}
            className="d-flex align-items-center justify-content-start "
          >
            <p className="para text-center text-md-start">
              &copy; Copyright {new Date().getFullYear()}{" "}
              <span>SB Realtors</span> {" "} Rights Reserved
            </p>
          </Col>

          {/* Right Side - Social Icons */}
          {/* <Col
            xs={{ order: 0 }}
            md={{ order: 0, span: 4 }}
            className="d-flex align-items-center justify-content-center gap-3"
          >
            <div className="me-0 me-md-5 d-flex align-items-center gap-3">
              {footIcon.map(({ icon, link, alt }, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                  <img src={icon} alt={alt} />
                </a>
              ))}
            </div>
          </Col> */}

          {/* Designed and Developed */}
          <Col
            xs={{ order: 2 }}
            md={{ order: 0, span: 4 }}
            className="d-flex align-items-center  justify-content-md-end"
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
