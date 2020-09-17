import React from "react";

const Present = (props) => {    
    return (        
        <ul className="pack__present">
            <li><b>{props.numberOfServings}</b> {props.presentEat}</li>
            <li><b>{props.numberOfToys}</b> {props.presentToy}</li>
            <li>{props.satisfaction}</li>
        </ul>            
    );    
};

export default Present;