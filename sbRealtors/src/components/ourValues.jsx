import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TitleLeft } from "./shared/titleComp";

import ovTop from "../assets/images/ov_top.png"
import ovMid from "../assets/images/ov_mid.png"
import ovBottom from "../assets/images/ov_bottom.png"

import trust from "../assets/images/trust.svg"
import quality from "../assets/images/quality.svg"
import inovation from "../assets/images/inovation.svg"


const spices = [
    {
        logo: trust,
        title: "Trust",
        desc: "Provide strong protection against falling objects and site hazards. Ensures worker safety with durable, shock-resistant design.",
    },
    {
        logo: quality,
        title: "Quality",
        desc: "Industrial safety shoes with steel-toe protection and anti-slip grip. Prevents injuries and ensures ",
    },
    {
        logo: inovation,
        title: "Innovation",
        desc: "Industrial safety shoes with steel-toe protection and anti-slip grip. Prevents injuries and ensures ",
    },
]

const OurValuesSec = () => {
    return (
        <>
            <Container>
                <Row className="gap-5 gap-lg-0">
                    <Col sm={12} lg={6} xl={6}>
                        <div className={"sf-card-count"}>
                            <div className="d-flex align-items-center justify-content-center">
                                <TitleLeft
                                    heading={<>Our <br /> Values</>}
                                    extraClass={"text-center maroon"}
                                />
                            </div>
                            {spices.map((item, i) => (
                                <div key={i} className="gap-2 card">
                                    <div className="card-top">
                                        <img src={item.logo} alt={item.title} />
                                    </div>
                                    <h4 className="card-title">{item.title}</h4>
                                    <div className="card-text">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col sm={12} lg={6} xl={6} className="d-none d-lg-block">
                        <div className="sf-img-count gap-5 ps-5 h-100 position-relative d-flex flex-column align-items-center align-items-lg-start justify-content-between">
                            <div className={"sf"}>
                                <img src={ovTop} alt="Safety Equipment 1" className="sf-img-1" />
                            </div>
                            <div className={"sf"}>
                                <img src={ovMid} alt="Safety Equipment 2" className="sf-img-2" />
                            </div>
                            <div className={"sf"}>
                                <img src={ovBottom} alt="Safety Equipment 3" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OurValuesSec;