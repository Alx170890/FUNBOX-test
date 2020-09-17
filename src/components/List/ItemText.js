import React from "react";

const ItemText = (props) => {   
    return (   
        <div>     
            <p className="assortment__item-text">Чего сидишь? Порадуй котэ, <span className="assortment__item-buy" onClick = {props.ActivePackOnClick} onKeyDown = {props.ActivePackOnKeyDown} tabIndex="0">купи.</span></p>
            <p className="assortment__item-text--selected">{props.itemInfo}</p>                                
            <p className="assortment__item-text--desabled">Печалька, {props.additive} закончился.</p>
        </div>
    );
};

export default ItemText;