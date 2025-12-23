import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TitleLeft } from "./shared/titleComp";

import spiceProcessIMG1 from "../assets/images/spice_process_1.png"
import spiceProcessIMG2 from "../assets/images/spice_process_2.png"
import spiceProcessIMG3 from "../assets/images/spice_process_3.png"

import cleaning from "../assets/images/cleaning.png"
import drying from "../assets/images/drying.png"
import packing from "../assets/images/packaging.png"
import spicesOne from "../assets/images/spicesOne.png"
import spicesTwo from "../assets/images/spicesTwo.png"
import spicesThree from "../assets/images/spicesThree.png"

const spices = [
    {
        logo: cleaning,
        logo2: spicesOne,
        title: "Cleaning",
        desc: "Provide strong protection against falling objects and site hazards. Ensures worker safety with durable, shock-resistant design.",
    },
    {
        logo: drying,
        logo2: spicesTwo,
        title: "Drying",
        desc: "Industrial safety shoes with steel-toe protection and anti-slip grip. Prevents injuries and ensures ",
    },
    {
        logo: packing,
        logo2: spicesThree,
        title: "Packaging",
        desc: "Industrial safety shoes with steel-toe protection and anti-slip grip. Prevents injuries and ensures ",
    },
]

const SpicesMakinProcess = () => {
    return (
        <>
            <Container>
                <Row className="gap-5 gap-lg-0">
                    <Col sm={12} lg={6} xl={6}>
                        <div className={"sf-card-count"}>
                            <div className="d-flex align-items-center justify-content-center">
                                <TitleLeft
                                    heading={"Spices Making Process"}
                                    extraClass={"text-center maroon"}
                                />
                            </div>
                            {spices.map((item, i) => (
                                <div key={i} className="gap-0 gap-md-2 card">
                                    <div className="card-top">
                                        <img src={item.logo} alt={item.title} />
                                        <img src={item.logo2} alt={item.title} className="card-img-2"/>
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
                                <img src={spiceProcessIMG1} alt="Safety Equipment 1" className="sf-img-1" />
                            </div>
                            <div className={"sf"}>
                                <img src={spiceProcessIMG2} alt="Safety Equipment 2" className="sf-img-2" />
                            </div>
                            <div className={"sf"}>
                                <img src={spiceProcessIMG3} alt="Safety Equipment 3" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SpicesMakinProcess;