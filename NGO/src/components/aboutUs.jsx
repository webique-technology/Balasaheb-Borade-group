import { Col, Container, Row } from "react-bootstrap"
import { SecTitle, TitleLeft } from "./titleComp";
import { PrimaryBtn } from "./shared/button";

import aboutImg from "../assets/images/about_us_img.png"
import phone from "../assets/images/phone.png"


const AboutUsSec = () => {
    return (
        <>
            <Container>
                <Row className="row-gap-4 align-items-start">
                    <Col xs={{ order: 2 }} md={{ order: 1 }} lg={6} className="img-left">
                        <img src={aboutImg} alt="Anbout-section-img" className="img-fluid" />
                    </Col>
                    <Col xs={{ order: 1 }} md={{ order: 2 }} lg={6}>
                        <div className="titleRound mb-3">
                            <p>About Us</p>
                        </div>
                        <TitleLeft
                            heading={"Give a Healping hand to Those Who Need It?"}
                            h2class={"secH2"}
                            para={"We are a non-profit organisation dedicated to improving the lives of underprivileged communities. Through education support, health initiatives, and social welfare programs, we work every day to create opportunities for those who need it most. Our efforts include providing scholarships and learning resources to children."}
                        />
                        <Row className="connectSec" gy-4 gy-md-0>
                            <Col xs={12} md={6} sm={6}>
                                <div className="vm-card">
                                    <b>Vision</b>
                                    <p>To build a self-reliant, healthy, educated, and empowered society by promoting sustainable development, social justice, and community participation.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} sm={6}>
                                <div className="vm-card">
                                    <b>Mission</b>
                                    <p>Serve society through integrated development programs that support agriculture, education, health, skill development, and social welfare, especially for rural, marginalized, and economically weaker sections of society.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUsSec;