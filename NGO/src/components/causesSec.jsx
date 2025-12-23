import { Container } from "react-bootstrap";
import { useState } from "react";

import causeRow11 from "../assets/images/causes_row1_1.png";
import causeRow12 from "../assets/images/bb-gallary-1.jpg";
import causeRow21 from "../assets/images/bb-gallary-5.jpg";
import causeRow22 from "../assets/images/causes_row2_2.png";
import causeRow31 from "../assets/images/causes_row3_1.png";
import causeRow32 from "../assets/images/bb-gallary-4.jpg";

import { TitleLeft } from "./titleComp";

const CausesSec = () => {
    const [lightboxImg, setLightboxImg] = useState(null);

    const images = [
        causeRow11, causeRow12,
        causeRow21, causeRow22,
        causeRow31, causeRow32
    ];

    return (

        <Container>
            <TitleLeft heading={"Gallery"} />

            <div className="wp-cards-grid">
                {/* column 1 */}
                <div className="wp-card">
                    <div className="wp-cardb">
                        <img
                            src={causeRow11}
                            alt=""
                        />
                        <div className="wpc-info">
                            <div className="wp-inner">
                                <button className="light-box-open" onClick={() => setLightboxImg(causeRow11)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                                        <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                                <p>Campus and food delivery in Maharashtra</p>
                            </div>
                        </div>
                    </div>

                    <div className="wp-cardb">
                        <img
                            src={causeRow12}
                            alt=""
                        />
                        <div className="wpc-info">
                            <div className="wp-inner">
                                <button className="light-box-open" onClick={() => setLightboxImg(causeRow12)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                                        <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                                <p>Campus and food delivery in Maharashtra</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* column 2 */}
                <div className="d-none d-lg-block">
                    <div className="wp-card">
                        <div className="wp-cardb">
                            <img
                                src={causeRow21}
                                alt=""
                            />
                            <div className="wpc-info">
                                <div className="wp-inner">
                                    <button className="light-box-open" onClick={() => setLightboxImg(causeRow21)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                            <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                                            <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                    </button>
                                    <p>Campus and food delivery in Maharashtra</p>
                                </div>
                            </div>
                        </div>

                        <div className="wp-cardb">
                            <img
                                src={causeRow22}
                                alt=""
                            />
                            <div className="wpc-info">
                                <div className="wp-inner">
                                    <button className="light-box-open" onClick={() => setLightboxImg(causeRow22)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                            <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                                            <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                    </button>
                                    <p>Campus and food delivery in Maharashtra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* column 3 */}
                <div className="wp-card">
                    <div className="wp-cardb order-2 order-lg-1">
                        <img
                            src={causeRow31}
                            alt=""
                        />
                        <div className="wpc-info">
                            <div className="wp-inner">
                                <button className="light-box-open" onClick={() => setLightboxImg(causeRow31)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                                        <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                                <p>Campus and food delivery in Maharashtra</p>
                            </div>
                        </div>
                    </div>

                    <div className="wp-cardb order-1 order-lg-2">
                        <img
                            src={causeRow32}
                            alt=""
                        />
                        <div className="wpc-info">
                            <div className="wp-inner">
                                <button className="light-box-open" onClick={() => setLightboxImg(causeRow32)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                                        <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                                <p>Campus and food delivery in Maharashtra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightboxImg && (
                <div className="lightbox" onClick={() => setLightboxImg(null)}>
                    <span className="close-btn">&times;</span>
                    <img src={lightboxImg} className="lightbox-img" alt="preview" />
                </div>
            )}
        </Container>
    );
};

export default CausesSec;
