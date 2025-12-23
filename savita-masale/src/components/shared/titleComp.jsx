import React from "react";

import threeStars from "../../assets/images/threeStars.png"

export const SecTitle = ({ heading, extraClass = "" }) => {
    return (
        <div className={`d-flex flex-column gap-3 align-items-center justify-content-center ${extraClass}`}>
            <h2 className="text-center">{heading}</h2>
            <img src={threeStars} alt="Three Stars" className="d-none d-md-block"/>
        </div>
    );
};



export const TitleLeft = ({ heading, para, extraClass }) => {
    return (
        <>
            <div className={`d-flex flex-column ${extraClass}`}>
                <h2 className="mb-2 mb-md-4 maroon">{heading}</h2>
                <p className={para === " " ? "d-none" : "mb-3 mb-md-4"}>{para}</p>
            </div>
        </>
    )
}

/*export const AbsoluteImgTitle = ({ img, rotateX = "0deg", rotateY = "0deg", top = " ", left = " " }) => {
    return (
        <div
            className="clove-img"
            style={{ transform: `rotateX(${rotateX}) rotateY(${rotateY})`, top: `${top}`, left: `${left}` }}
        >
            <img src={img} alt="" />
        </div>
    );
};*/
