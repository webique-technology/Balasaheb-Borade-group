import React from "react";

// import threeStars from "../../assets/images/threeStars.png"

export const SecTitle = ({ heading, extraClass = "" }) => {
    return (
        <div className={`d-flex flex-column gap-3 align-items-center justify-content-center ${extraClass}`}>
            <h2 className={`text-center`}>{heading}</h2>
        </div>
    );
};



export const TitleLeft = ({ heading, para, extraClass,h2class }) => {
    return (
        <>
            <div className={`d-flex flex-column ${extraClass}`}>
                <h2 className={`mb-0 mb-md-4 ${h2class}`}>{heading}</h2>
                <p className="mb-4">{para}</p>
            </div>
        </>
    )
}