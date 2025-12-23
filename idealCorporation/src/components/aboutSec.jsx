import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TitleLeft } from "./shared/titleComp";


import truIcon from "../assets/images/true_icon.png"
import CountUp from "react-countup";

const serviceProvide = [
    {
        text: "We provide 24/7 service"
    },
    {
        text: "Comprehensive Financial Solutions"
    },
    {
        text: "Transparency & Compliance"
    },
    {
        text: "Long-Term Trust & Value"
    },
]

const AboutSec = () => {
    return (
        <>
            <Container>
                <Row className="gap-4 justify-content-between">
                    <Col sm={12} md={12} lg={6}>
                        <TitleLeft
                            heading={
                                <>
                                    We Always Think On <span>Your Dream</span>
                                </>
                            }
                            para={"Borade Groups brings 11+ years of corporate governance and disciplined financial services. We deliver trading, research, and investment solutions designed for all types of investors — backed by transparency, compliance, and long-term trust."}
                            para2={"Borade Groups brings 11+ years of corporate governance and disciplined financial services. We deliver trading, research, and investment solutions designed for all types of investors."}
                        />
                        <Row className="flex-column flex-md-row  row-gap-md-0 row-gap-xs-1">
                            {serviceProvide.map((value, i) => {
                                return (
                                    <Col xs={12} sm={6} key={i} className="d-flex align-items-center justify-content-start gap-3 py-2">
                                        <img src={truIcon} alt="" />
                                        <b>{value.text}</b>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={5}>
                        <div className="about-img">
                            <div className="experience text-center">
                                <h4><CountUp start={0} end={10} duration={2} /></h4>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutSec;