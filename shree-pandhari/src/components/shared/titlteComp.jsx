import React from "react";

export const SecTitle = ({ title, heading, extraClass }) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center gap-4 justify-content-center">
                <div className={`sec-title ${extraClass}`}>
                    {title}</div>
                <h2>{heading}</h2>
            </div>
        </>
    )
}