import React from "react";
import Present from "./Present";
import PackText from "./PackText";
import ItemText from "./ItemText";
import PackTitle from "./PackTitle";
import PackImg from "./PackImg";
import PackWaight from "./PackWaight";
import './style.css';

const List = (props) => {
    return ( 
        <div className="assortment__list-item">                
            <div className={props.present.packState.join(" ")} 
                 onClick = {props.ActivePackOnClick} 
                 onKeyDown = {props.ActivePackOnKeyDown} 
                 onMouseLeave = {props.hoverMouseLeave} 
                 tabIndex="0">
                <div className="pack__info">
                    <PackText />                    
                    <PackTitle additive = {props.present.additive} />
                    <Present                         
                        presentEat = {props.present.presentEat}
                        numberOfServings = {props.present.numberOfServings}
                        presentToy = {props.present.presentToy}
                        numberOfToys = {props.present.numberOfToys}
                        satisfaction = {props.present.satisfaction}                    
                        present = {props.present}
                    />
                    <PackImg />
                    <PackWaight packWeight = {props.present.packWeight} />                       
                </div>
            </div>
            <ItemText ActivePackOnClick = {props.ActivePackOnClick}
                      ActivePackOnKeyDown = {props.ActivePackOnKeyDown}
                      additive = {props.present.additive}
                      itemInfo = {props.present.itemText}
            />
        </div>            
    );    
};

export default List;