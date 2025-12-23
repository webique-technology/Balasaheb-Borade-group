import { Col, Container, Row } from "react-bootstrap"
import { TitleLeft } from "./titleComp";
import { PrimaryBtn } from "./shared/button";

import phone from "../assets/images/phone.png"

import donationGirl from "../assets/images/donation_girl.png"
import qrCode from "../assets/images/qrcode.png"

const DonationSec = () => {
    return (
        <>
            <Container>
                <Row className="row-gap-4">
                    <Col sm={12} md={12} lg={6}>
                        <div className="titleRound mb-3">
                            <p>Donations</p>
                        </div>
                        <TitleLeft
                            heading={"Give a Healping hand to Those Who Need It?"}
                            h2class={"secH2"}
                            para={"We are a dedicated non-profit organisation committed to empowering underprivileged communities. Your support helps us provide education, healthcare, nutrition, and essential welfare services to individuals and families in need. Every contribution—big or small—brings hope, creates opportunities, and transforms lives. Together, we can build a brighter, more compassionate future for all."}
                        />
                        <div className="connectSec d-flex justify-content-start gap-1 gap-sm-3 gap-md-5">
                            {/* <PrimaryBtn
                                btnClass={"primaryBtn"}
                                href="#donate-us-about"
                                btnTitle={"Donate Us"}
                                btnBackgraound={"#F56A01"}
                            /> */}
                            <div className="call d-flex align-items-center gap-1 gap-md-4">
                                <span>
                                    <img src={phone} alt="phone" />
                                </span>
                                <div>
                                    <a href="tel:9325561210"><b>+91 9325561210</b></a>
                                    <p>Call us Anytime</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} className="img-left text-center position-relative">
                        <img src={donationGirl} alt="" className="donation-girl img-fluid d-none d-md-inline-block" />
                        <img src={qrCode} alt="Anbout-section-img" className="donation-qr" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DonationSec;