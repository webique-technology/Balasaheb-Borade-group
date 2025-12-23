import { Container, Row, Col } from "react-bootstrap";
import { SecTitle } from "./shared/titleComp";


import featureIcon1 from "../assets/images/feature_card_1.png"
import featureIcon2 from "../assets/images/feature_card_2.png"
import featureIcon3 from "../assets/images/feature_card_3.png"
import featureIcon4 from "../assets/images/feature_card_4.png"

const featureData = [
    {
        src: featureIcon1,
        title: "Real-Time Trading",
        desc: "Stay ahead with real-time data and instant trade execution. Lorem ipsum dolor sit amet."
    },
    {
        src: featureIcon2,
        title: "Secure Wallets",
        desc: "Your assets are safe with our state-of-the-art security and Manegement measures."
    },
    {
        src: featureIcon3,
        title: "User-Friendly Interface",
        desc: "Intuitive design that makes trading easy for everyone. Lorem ipsum dolor sit amet"
    },
    {
        src: featureIcon4,
        title: "Diverse Assets",
        desc: "Trade a wide variety of cryptocurrencies and stocks from one platform."
    },
]

const FeatureSec = () => {
    return (
        <>
            <Container className="featrue-count">
                <SecTitle
                    heading={
                        <>
                            Explore the Full Spectrum of <br /> Cutting-Edge Trading Features
                        </>
                    }
                />
                <div className="feature-grid mt-5">
                    {featureData.map(({ src, title, desc }) => {
                        return (
                            <div className="feature-card">
                                <div className="feature-content">
                                    <div className="ft-card-img">
                                        <img src={src} alt={title} />
                                    </div>
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default FeatureSec;