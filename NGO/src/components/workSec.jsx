

import { Container } from "react-bootstrap";
import workIMG1 from "../assets/images/work_2.png"
import workIMG2 from "../assets/images/work_4.png"
import workIMG3 from "../assets/images/work_5.png"
import { SecTitle } from "./titleComp";


const workCardData = [
    {
        src: workIMG1,
        country: "Pune",
        title: "Child Welfare & Development",
        color: "#D8B732BD",
        progressBarPercent: "10",
        progressBarNeed: "7,800",
    },
    {
        src: workIMG2,
        country: "Nahik",
        title: "Food Processing & Rural Industries",
        color: "#6C3667DB",
        progressBarPercent: "55",
        progressBarNeed: "5,500",
    },
    {
        src: workIMG3,
        country: "Mumbai",
        title: "Animal Husbandry, Dairying & Fisheries",
        color: "#019CF59E",
        progressBarPercent: "30",
        progressBarNeed: "220,000",
    },
]



const WorkSec = () => {
    return (
        <>
            <Container>
                <SecTitle heading={"Help Power Our Work"} />
                <div className="work-grid mt-3 mt-md-5">
                    {workCardData.map(({ src, country, title, color, progressBarPercent, progressBarNeed }, index) => {
                        return (
                            <div key={index} className="work-card" style={{ backgroundImage: `url(${src})` }}>
                                <div className="card-body" style={{ background: `${color}` }}>
                                    <p>in {country}</p>
                                    <h5>{title}</h5>

                                    <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                                        <div className="progress-wrapper">
                                            <div
                                                className="progress-inner"
                                                style={{ width: `${progressBarPercent}%`, background:`${color}` }}
                                            ></div>
                                        </div>

                                        <p className="d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                            </svg>
                                            <span>{progressBarNeed}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    )
}

export default WorkSec;