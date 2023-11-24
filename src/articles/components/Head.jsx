import React from "react";

export const Head = ({ title1, title2 }) => {
    return (
        <div className='title'>
            <hr />
            <h2>{title1}</h2>
            <h3>{title2}</h3>
            <hr />
        </div>
    );
};
