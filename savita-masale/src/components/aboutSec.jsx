import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TitleLeft } from "./shared/titleComp";
import { AboutSpecialCard } from "./shared/cardComp";


import traditionalSvg from "../assets/images/traditional_about.png"
import ingredients from "../assets/images/ingredients_about.png"

import aboutMasala1 from "../assets/images/about_masala_1.png"
import aboutMasala2 from "../assets/images/about_masala_2.png"
import aboutMasala3 from "../assets/images/about_masala_3.png"
import SBorade from "../assets/images/savita-borade.jpeg"
import fssai from "../assets/images/fssai.png"

const aboutCardData = [
    {
        src: traditionalSvg,
        title: "Prepared Traditionally",
        desc: "Rich colour and bold flavour from premium chillies chillies.",
        classR: ""
    },
    {
        src: ingredients,
        title: "100% Pure Ingredients",
        desc: "If you want even shorter or more punchy versions, I can do that too!",
        classR: "m-0"
    }
]

const MasaleAbout = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-between">
                    <Col sm={12} lg={6} className="d-flex  flex-column justify-content-center">
                        <TitleLeft
                            heading={"Authentic Masalas for Every Kitchen"}
                            para={"Born in a small Nashik kitchen, Savita Masale has grown into a trusted brand known for purity and authentic flavour. Each blend is made with care using traditional recipes and high-quality ingredients."}
                        />
                        <div className="fsi-section">
                        <div className="fsi-lgo"><img src={fssai} alt="fssai"/></div>
                        <div>
                            <p>License Number <br/> <span>11522045000204</span></p>
                        </div>
                        </div>

                        <Row className="">
                            {aboutCardData.map(({ src, title, desc, classR }) => {
                                return (
                                    <Col xs={6}>
                                        <AboutSpecialCard
                                            src={src}
                                            title={title}
                                            desc={desc}
                                            mainClass={classR}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                    <Col sm={12} lg={6} className="masala-img mt-4 mt-lg-0">
                        <Row>
                            <Col sm={6} className="justify-content-end">
                                <img src={aboutMasala1} alt="" className="about-img-1  d-none d-md-flex " />
                                <img src={aboutMasala2} alt="" className="h-100 d-none d-sm-block d-md-none" />
                            </Col>
                            <Col sm={6}>
                                <div className="sb-main position-relative ">
                                    <img src={SBorade} alt="" className=""/>
                                    <div className="s-borade">
                                        <h4 className="m-0">Smt. Savita Borade</h4>
                                        <p className="m-0">Proprietor</p>
                                    </div>
                                </div>
                                <img src={aboutMasala3} alt="" className="mt-4 d-none d-md-block" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MasaleAbout;