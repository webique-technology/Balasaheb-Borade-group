import { Col, Container, Row } from "react-bootstrap";
import { TitleLeft } from "./shared/titleComp";
import CountUp from "react-countup";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import tata from "../assets/images/tata.png"
import bajaj from "../assets/images/bajaj.png"
import kite from "../assets/images/kite.png"
import ford from "../assets/images/ford.png"
import mahindra from "../assets/images/mahindra.png"
import stockMarketVedio from "../assets/images/stockMarket.mp4"

const investors = [tata, bajaj, kite, ford, mahindra, bajaj]

const TradeVaritey = () => {
    return (
        <>
            <Container>
                <div className="trade-varitey-count d-flex flex-column d-lg-block">
                    <video className="video order-2 order-lg-1" autoPlay muted loop>
                        <source src={stockMarketVedio} type="video/mp4" />
                    </video>

                    <div className="trade-content order-1 order-lg-2">
                        <div className="trade-info mb-2 mb-lg-0">
                            <TitleLeft
                                heading={
                                    <>
                                        Achivments & Investors
                                    </>
                                }
                                extraClass={"white"}
                                h2class={"mb-2 mt-0 mt-md-5 mt-lg-0"}
                                pClass={"d-none"}
                            />
                            <div className="trade-count">
                                <div className="count-up">
                                    <Row>
                                        <Col xs={4} className="d-flex flex-column align-items-center justify-content-start subTitle white text-center">
                                            <CountUp start={0} end={103} duration={3} suffix="M+" className="m-0" />
                                            <p className="mb-4">Happy Customers</p>
                                        </Col>
                                        <Col xs={4} className="d-flex flex-column align-items-center justify-content-start subTitle white text-center">
                                            <CountUp start={0} end={1003} duration={3} suffix="M+" className="m-0" />
                                            <p className="mb-4">Registered Companies</p>
                                        </Col>
                                        <Col xs={4} className="d-flex flex-column align-items-center justify-content-start subTitle white text-center">
                                            <CountUp start={0} end={903} duration={3} suffix="M+" className="m-0" />
                                            <p className="mb-4">Countries</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="invest-slider mt-4 mt-lg-5">
                                    <Swiper
                                        spaceBetween={20}
                                        loop
                                        autoplay={{
                                            delay: 1500,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            0: { slidesPerView: 2 },
                                            320: { slidesPerView: 3 },
                                            576: { slidesPerView: 3 },
                                            768: { slidesPerView: 4 },
                                            992: { slidesPerView: 4 },
                                        }}
                                        modules={[Autoplay, Pagination]}
                                        className="equipment-swiper"
                                    >
                                        {investors.map((value, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="invastor-card">
                                                    <img src={value} alt={`equipment-${i}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default TradeVaritey;