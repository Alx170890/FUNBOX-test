import React from "react";

const PackTitle = (props) => {   
    return (   
        <h2 className="pack__title">Нямушка <span>{props.additive}</span></h2>
    );
};

export default PackTitle;